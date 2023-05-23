const savedWeather = handleLocalStorage("weather");
const apiKey = "93d36d5ed8f49e95ac5c409eb3d39964"
const queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={93d36d5ed8f49e95ac5c409eb3d39964}'



function handleSearch(event) {
    event.preventDefault()
    const searchWeather = document.getElementById("searchweather").value
    handleLocalStorage("searchweather", "set")
    // call function on form submit
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchWeather}&appid=${apiKey}`)
        // return response .json
        .then(function (response) {
            return response.json()

        })
        .then(function (data) {
            console.log(data);
            localStorage.setItem("searchWeather", data);
            // dynamically create elements with data and display on page 
            // set into local storage
            // display data on webpage
        })
}

function handleLocalStorage(searchKey, type) {
    var searches = []
    
    if (type === "get") {
        
        searches = localStorage.getItem("searches");
      //  write code to add searches to the resent search section
    } else if (type === "set") { 
        searches.push(searchKey)
        
        localStorage.setItem("searches", searches);
        handleLocalStorage("", "get")
    }


}
// getting saved inputs on load
handleLocalStorage("", "get")

//addadvent listener on form submit call handle search
document.getElementById("search").addEventListener("click", handleSearch);