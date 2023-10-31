const apiKey='f6f68e4a9df0c1ade2c8faaac2c6b03b'
const apiUrl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox= document.querySelector('.search input')
const searchBtn= document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function getWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data =await response.json()
    console.log(data)

    document.querySelector('.description').innerHTML= data.name;
    document.querySelector('.temperature').innerHTML=Math.round(data.main.temp) +' °C';
    document.querySelector('.humidity').innerHTML= data.main.humidity + ' %';    ;
    document.querySelector('.wind2').innerHTML= data.wind.speed + ' Km/h';

    switch (data.weather[0].main) {
        case 'Clouds':
            weatherIcon.src = 'image/cloudy.png'
            break;

        case 'Drizzle':
            weatherIcon.src = 'image/cloudy rain.png'
            break;

        case 'Rain':
            weatherIcon.src = 'image/storm.png'
            break;
            
        case 'Clear':
                weatherIcon.src = 'image/sunny.png'
                break;
    }
}
searchBtn.addEventListener('click',()=> {
getWeather(searchBox.value)
})