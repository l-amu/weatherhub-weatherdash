// var searchValueEl = document.querySelector(".searchCity")
// var searchBtn  = document.querySelector(".button")
var currentCityContainerEl = document.querySelector("current-city-container")
const apiKey = config.API_KEY

var currentCondtion = function (cityData) {
    let inputvalueEl = $("#searchCity").val()
    var searchValueEl = inputvalueEl
    console.log(searchValueEl)
    if (searchValueEl) {
        weatherData(inputvalueEl);
        inputvalueEl.value = "";
    } else {
        // alert("Please enter a correct name");
    }
    var test = cityData.rain
    console.log(test)

    // for (let i = 0; i < userInput.length; i++) {
    //     var cityName = document.createElement("span")
    //     cityName.innerText = city.name + "(" + timezone + ")"
    //     console.log(cityName)
    // }
}

var weatherData = function (inputvalueEl) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputvalueEl + "&appid=" + apiKey;
    console.log(inputvalueEl)
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        var cityData = data
                        currentCondtion(cityData)
                        // return currentCondtion
                        //   console.log(info)
                    });
            } else {
                //   alert("Error:");
            }

        })
}
// hold user input and send it fecth

$("#searchBtn").on("click", (event) => {
    event.preventDefault();
    currentCondtion(event)

})



































