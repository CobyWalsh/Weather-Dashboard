// created const and var block to use in code
const savedWeather = handleLocalStorage("weather");
const apiKey = "93d36d5ed8f49e95ac5c409eb3d39964"
var futureWeatherList = document.getElementById("futureWeatherList");
var futureWind1 = document.getElementById("wind1");
var futureTemp1 = document.getElementById("temp1");
var futureHumidity1 = document.getElementById("humidity1");
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

            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchWeather}&{city name},{state code},{country code}&lat={lat}&lon={lon}&units=imperial&appid=${apiKey}`)
            .then(function (response) {
                return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    // this line of code selects the id container from my HTML code
                  var containerElement = document.getElementById("container")
                  // this line of code creates a var dateHtml with an empty string to concatenate current date and weather
                    var dateHtml = ""
            
                    for (let i = 0; i < data.list.length; i=i+8) {
                        //created a currentDate element and assigned it to a list property
                     var currentDate = data.list[i]
                     //appends a dynamically generated html snippet to the dateHtml card elements with the date, temperature, wind and humidity.
                     dateHtml +=`<div id="box" class="card" style="width: 13rem;">
                        <div class="card-header">
                          Date ${currentDate.dt_txt}
                        </div>
                        <ul id="futureWeatherList3">
                          <li id="temp3">Temp: ${currentDate.main.temp}</li>
                          <li id="wind3">Wind: ${currentDate.wind.speed}</li>
                          <li id="humidity3">Humidity: ${currentDate.main.humidity}</li>
                        </ul>
                      </div>`
                  
                      }
                      // html code stored in dateHtml will be inserted as the content of the containerElement and will display on the webpage
                      containerElement.innerHTML=dateHtml
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