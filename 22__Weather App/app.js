const search_input = document.getElementById('search-input')
const form = document.querySelector('form')
const weather = document.querySelector('#weather')

const API_key = '2809c302ee124bd7d797e3cf81d76f1f'


const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'

const getweather = async (city) =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data)
    return showWeather(data)
}

const showWeather = (data) =>{
    if(data.cod === '404'){
        weather.innerHTML = `<h2>City Not Found</h2>`
        return ;
    }
    weather.innerHTML=  `
    <div>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
    <p>${data.main.temp}</p>
    <h4>${data.weather[0].main}</h4>
    
    
    `
}


form.addEventListener('submit' , (event) =>{
    getweather(search_input.value)
    event.preventDefault()
    
})

