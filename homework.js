let city = 'LVIV'
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=3dde85ca76388847f97c0e9ee036638d`)
    .then(function (resp){return resp.json()})
    .then(function (data){
        console.log(data);
        document.querySelector('#temp').innerHTML = 'Temperature: ' + Math.round(data.main.temp) + '&deg;';
        document.querySelector('#pressure').textContent = 'Pressure: ' + data.main.pressure;
        document.querySelector('#description').textContent = 'Description: ' + data.weather[0].description;
        document.querySelector('#humidity').textContent = 'Humidity: ' + data.main.humidity;
        document.querySelector('#speed').textContent = 'Speed: ' + data.wind.speed;
        document.querySelector('#deg').textContent = 'Deg: ' + data.wind.deg;

    })
    .catch(function (err){
        console.log(err);
    })