function getDataWeather() {
    const weather = fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19', {
        method: "GET"
    } )

    weather.then(response => {
        if (response.status === 200 ) {
            return response.json();
        } else {
            return new Error("Error")
        }
    })
        .then(data => {
            const city = document.querySelector('.js__city').innerHTML = data.name;
            const temp = document.querySelector('.js__temperature').innerHTML = `${Math.round(data.main.temp)}ºC`;
            const pressure = document.querySelector('.js__pressure').innerHTML = `Pressure: ${data.main.pressure} hPa`;
            const humidity = document.querySelector('.js__humidity').innerHTML = `Humidity: ${data.main.humidity}%`;
            const windSpeed = document.querySelector('.js__wind__speed').innerHTML = `Wind Speed: ${data.wind.speed.toFixed(1)} m/s`;
            const windDeg = document.querySelector('.js__wind__deg').innerHTML = `Wind Direction: ${data.wind.deg} deg`;

            const description = document.querySelector('.js__description')
            const image = document.querySelector('.js__img__weather')
            for (let item of data.weather) {
                description.innerHTML = item.description
                image.src = `http://openweathermap.org/img/w/${item.icon}.png`
            }
        })

    const date = new Date().toLocaleDateString()
    const weekday = new Date().toDateString().slice(0,3);
    document.querySelector('.js__date').innerHTML = `${date} - ${weekday}`
    const time = new Date().toLocaleTimeString().slice(0,-3);
    document.querySelector('.js__time').innerHTML = time;
}

getDataWeather();

document.querySelector('.js__btn__update').addEventListener('click', getDataWeather)







