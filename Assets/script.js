var apiKey = "93d36d5ed8f49e95ac5c409eb3d39964";
var city;
var queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={93d36d5ed8f49e95ac5c409eb3d39964}'
var searchWeather = document.getElementById("searchweather")


function handleSearch(event) {
    handleLocalStorage("searchweather", "set")
    // call function on form submit
    document.getElementById("searchweather").addEventListener("submit", myFunction);
    fetch(queryUrl)
        // return response .json
        .then(function () {
            return response.json()

        })
        .then(function (data) {
            // dynamically create elements with data and display on page 
            var response = document.createDocumentFragment();
            var link = document.createElement("a");
            link.setAttribute("id", "id1");
            link.setAttribute("href", "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={93d36d5ed8f49e95ac5c409eb3d39964}")

        })
    link.appendChild(document.createTextNode("linkText"));

    var div = document.createElement("div");
    div.setAttribute("id", "id2");
    div.appendChild(document.createTextNode("divText"));

    response.appendChild(link);
    response.appendChild(div);
    document.getElementById("main").appendChild(response);
}
try {
        .catch(function()) {

            function handleLocalStorage(searchKey, type) {
            if (type === "get") {
                // need to get from local storage and display on page (buttons) addeventlistener
                localStorage.setItem("get", "set");

            } else if (type === "set") {
                // check array if search key exists if not add to local storage
            }


        }
    }
    // getting saved inputs on load
    handleLocalStorage("", "get")

     //addadvent listener on form submit call handle search
     addEventListener(submit, handleSearch);
}