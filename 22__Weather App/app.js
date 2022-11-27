const searchbtn = document.getElementById('searchbtn')
const InputEl = document.getElementById('input')
const output = document.querySelector('.output')

const API_key = '2809c302ee124bd7d797e3cf81d76f1f'



function getdata() {
    let cityvalue = InputEl.value


    if (cityvalue.length === 0) {
        output.innerHTML = `<h3>Plz Enter the City Name</h3>`
    }
    else {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalue}&appid=${API_key}`
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                output.innerHTML = `
                    <h2 id="Cityname">${data.name}</h2>
                    <h2 id="weather">${data.weather[0].main}</h2>
                    <h4 id="weatherDescrition">${data.weather[0].description}</h4>
                    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="">
                    <h1>${data.main.temp} &#176</h1>

                    <div class="temp-container">
                        <div class="min">
                            <h4>min</h4>
                            <h4>${data.main.temp_min} &#176</h4>
                     </div>
                        <div class="max">
                            <h4>max</h4>
                            <h4>${data.main.temp_max} &#176</h4>
                        </div>
                </div>
                
                `
            })
           .catch(() =>{
            output.innerHTML = `<h3 class="msg">City not found</h3>`;
           }) 
    }

}
searchbtn.addEventListener('click', getdata)


window.addEventListener('load', getdata)




