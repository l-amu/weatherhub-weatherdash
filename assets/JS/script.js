var searchValueEl = document.querySelector(".searchCity")
// var searchBtn  = document.querySelector(".button")
var currentCityContainerEl = document.querySelector("current-city-container")

var currentCondtion = function (cityInfo) {
    inputvalueEl = $("#searchCity").val()
    var searchValueEl = inputvalueEl.value
    if (searchValueEl) {
        weatherData(searchValueEl);
        inputvalueEl.value = "";
    } else {
        // alert("Please enter a correct name");
    }
    var test = cityInfo.city.coord.lon
    console.log(test)

    // for (let i = 0; i < userInput.length; i++) {
    //     var cityName = document.createElement("span")
    //     cityName.innerText = city.name + "(" + timezone + ")"
    //     console.log(cityName)
    // }


}

var weatherData = function (inputvalueEl) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputvalueEl + "&appid=" + APIKey;
    console.log(inputvalueEl)
    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json()
                    .then(function (data) {
                        var cityInfo = data
                        currentCondtion(cityInfo)
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
    inputvalueEl = $("#searchCity").val()
    currentCondtion(inputvalueEl)

})



































