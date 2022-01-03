var inputvalueEl = document.querySelector(".inputvalue")
var searchBtn  = document.querySelector(".button")
const APIKey = "3e95aab4804c8aa16c4c125c7444362d";







var weatherData = function(inputvalueEl) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + inputvalueEl + "&appid=" + APIKey;

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
          response.json()
          .then(function(data) {
            // var info =  data
            var humidity = data["humidity"]
            renderCityData(humidity)
            //   console.log(info)
          });
        } else {
        //   alert("Error:");
        }
      
      })
}
// hold user input and send it fecth
var formSubmitHandler = function(event){
    event.preventDefault();
        var userInput = inputvalueEl.value.trim();
        if (userInput) {
            weatherData(userInput);
            inputvalueEl.value = "";
          } else {
            // alert("Please enter a correct name");
          }
console.log(userInput)
}

// weatherData("canada")
var renderCityData = function(data) {
    // I am trying to acess the api in this function but it says undefined
    var pl =  main.humidity
    // var please2 =humidity
    console.log("this is info",pl)

}


































// fetch(apiUrl)
// .then(function(response) {
//     if (response.ok) {
//       response.json()
//       .then(function(data) {
//           function test() {
//             var info =  data
//             renderCityData(data)
//             return info
//             var humidity = data["humidity"]
//             renderCityData(data)
//             //   console.log(info)
//           }
        
//       });
//     } else {
//     //   alert("Error:");
//     }
  
//   })







searchBtn.addEventListener("click", formSubmitHandler  )



























// var formSubmitHandler = function(event) {
//     event.preventDefault();
//     var userInput = SearchBtnEl.value.trim();
//     console.log(userInput)

//     if (userInput) {
//         getWeatherData(userInput)
//         console.log("it passed");

//       } 
// };
// var getWeatherData = function(SearchBtnEl) {
//     var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + SearchBtnEl.value + "&appid=" + APIKey;
//     fetch(apiUrl)
    
//         // console.log(response)
//         // if (response.ok) {
//         //   response.json().then(function(data) {
//         //     formSubmitHandler(userSearch)
//         //     console.log(data)
//         //   });
//         // } 
//     //   })
//       console.log(apiUrl)

// };
// getWeatherData("toronto")

// SearchBtnEl.addEventListener("submit", formSubmitHandler)

