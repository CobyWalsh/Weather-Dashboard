var apiKey = "93d36d5ed8f49e95ac5c409eb3d39964";
var city;
var queryUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={93d36d5ed8f49e95ac5c409eb3d39964}'



function handleSearch(event) {
handleLocalStorage("this is where search key goes", "set") 
    // call function on form submit
    fetch(queryUrl)
        .then(function(){
    //r eturn respons .json
        }) 
        .then(function(){
    // dinamicaly create elements with data and display on page 
        })
        .catch(function(){

        })
}

//addadvent listener on form submit call handle search

function handleLocalStorage(searchKey, type) {

if (type === "get") {
    // need to get from local storage and display on page (buttons) addeventlistener
} else if (type === "set") {
    // check array if search key exists if not add to local storage
}


} 
// getting saved inputs on load
handleLocalStorage("", "get")