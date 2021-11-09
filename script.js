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