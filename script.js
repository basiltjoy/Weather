function getWeather() {
    let location_name = loc_name.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location_name}&appid=ce8de215b77740fe4b9ed0266fda95bd&units=metric`)
        .then(res => res.json()).then(data => displayValue(data))
        .catch(error => alert("location not Found"))

}
function displayValue(data) {
    let location_name = data.name
    let temperature = data["main"].temp
    let weather_type = data["weather"][0].main
    let wind_speed = data["wind"].speed

    let weather_data = ``
    weather_data = `
    Location Name:  ${location_name}<br>
    Location Temperature:  ${temperature}<br>
    Location Weather:  ${weather_type}<br>
    Location wind speed:  ${wind_speed}   `
    document.querySelector(".result").innerHTML = weather_data
}

/*{"coord":{"lon":77.2167,"lat":28.6667},
"weather":[{"id":711,"main":"Smoke","description":"smoke","icon":"50d"}],
"base":"stations",
"main":{"temp":25.05,
"feels_like":24.76,
"temp_min":25.05,
"temp_max":25.05,
"pressure":1015,
"humidity":44},
"visibility":1500,
"wind":{"speed":2.57,"deg":240},
"clouds":{"all":6},
"dt":1636527211,
"sys":{"type":1,
"id":9165,"country":"IN",
"sunrise":1636506594,"sunset":1636545617},
"timezone":19800,"id":1273294,
"name":"Delhi","cod":200} */