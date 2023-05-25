const savedWeather = handleLocalStorage("weather");
const apiKey = "93d36d5ed8f49e95ac5c409eb3d39964"
var futureWeatherList = document.getElementById("futureWeatherList");
var futureWind = document.getElementsByClassName("futureWind");
var futureTemp = document.getElementsByClassName("futureTemp");
var futureHumidity = document.getElementsByClassName("futureHumidity");
var currWind = document.getElementById("wind");
var currTemp = document.getElementById("temp");
var currHumidity = document.getElementById("humidity");
var currWeatherList = document.getElementById("currentWeatherList");

function handleSearch(event) {
    event.preventDefault()
    const searchWeather = document.getElementById("searchweather").value
    handleLocalStorage("searchweather", "set")
    // call function on form submit
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&units=imperial&appid=${apiKey}`)
        // return response .json
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data);
            const iconImg = document.createElement('img');
            iconImg.setAttribute('class', 'icon-span-styling');
            iconImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`);
            currWeatherList.append(iconImg);
            currWind.textContent = "Wind: " + data.wind.speed + " m/h";
            currTemp.textContent = "Temp: " + data.main.temp + " F";
            currHumidity.textContent = "Humidity " + data.main.humidity + "%";

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchWeather}lat={lat}&lon={lon}&units=imperial&appid=${apiKey}`)
            .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    const iconImg = document.createElement('img');
                    iconImg.setAttribute('class', 'icon-span-styling');
                    iconImg.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`);
                    futureWeatherList.append(iconImg);
                    futureWind.textContent = "Wind: " + data.wind.speed + " m/h";
                    futureTemp.textContent = "Temp: " + data.main.temp + " F";
                    futureHumidity.textContent = "Humidity " + data.main.humidity + "%";
                });
        });
}

function handleLocalStorage(searchKey, type) {
    var searches = []

    if (type === "get") {
        searches = localStorage.getItem("searches");
        //  write code to add searches to the resent search section
    } else if (type === "set") {
        searches.push(searchKey);

        localStorage.setItem("searches", searches);
        handleLocalStorage("", "get")
    }
}
// getting saved inputs on load
handleLocalStorage("", "get")

//addadvent listener on form submit call handle search
document.getElementById("search").addEventListener("click", handleSearch);