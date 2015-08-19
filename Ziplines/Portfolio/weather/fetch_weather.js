$(document).ready(function() {
  // set global vars for BG pictures
  var coldURL = "http://host2post.com/server13/photos/S1H-6hjE6S1FUM~/wallpapers-trees-full-snow-cold-weather-december-mountains.jpg";
  var mediumURL = "http://xbmc-favorites.googlecode.com/svn/trunk/skin/MARK-III/media/weather-background.png";
  var warmURL = "http://cdn.meteo-europ.com/img/background/background.jpg";
  // set other global vars
  var localWeather = new Object();
  var convertedTemp = 0, convertedMax = 0, convertedMin = 0;

  // Check if browser provides location
  if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(function(position) {
      var lat = position.coords.latitude;
      var long = position.coords.longitude;
      getWeather(lat, long);
    });
  } else {
    /* geolocation IS NOT available */
    alert("Geolocation is not available");
    // TODO LET USER INPUT CITY AND STATE
  }

  // Make the weather request
  function getWeather(lat, long) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
  };

  // Take the JSON results and proccess them
  var proccessResults = function() {
    var results = JSON.parse(this.responseText);
    if (results) {
      localWeather.city        = results.name;
      localWeather.weather     = results.weather[0].main;
      localWeather.temperature = results.main.temp;          // in Kelvin
      localWeather.minTemp     = results.main.temp_min;      // in Kelvin
      localWeather.maxTemp     = results.main.temp_max;      // in Kelvin
      localWeather.humidity    = results.main.humidity;
      localWeather.pressure    = results.main.pressure;
      localWeather.windSpeed   = results.wind.speed;
      localWeather.windDegrees = results.wind.deg;
      localWeather.windGust    = results.wind.gust ? results.wind.gust : 0;
      localWeather.icon        = "http://openweathermap.org/img/w/" + results.weather[0].icon  + ".png";
      localWeather.coordinates = [results.coord.lon, results.coord.lat];
      }

      // Set background image depending on temperature
      if (localWeather.temperature > 302) {
        // it's warm, display the hot picture
        $('html').css('background-image', 'url(' + warmURL + ')');
      } else if (localWeather.temperature < 273){
        // It's cold, display snowy picture
        $('html').css('background-image', 'url(' + coldURL + ')');
      } else {
        // display genric picture
        $('html').css('background-image', 'url(' + mediumURL + ')');
      }

      // Add weather icon and city name to header
      $('#place').html("<img src='" + localWeather.icon + "'>&nbsp;" + localWeather.city)

      // Determine which radio button is checked and display temp accordingly
      if($('input[name=conv]:checked', '#myForm').val() == "F"){
        displayTempInFahrenheit();
      } else {
        displayTempInCelsius();
      }

  };

  function displayTempInFahrenheit(){
    convertedTemp = convertKelvinToFahrenheit(localWeather.temperature);
    convertedMax  = convertKelvinToFahrenheit(localWeather.maxTemp);
    convertedMin  = convertKelvinToFahrenheit(localWeather.minTemp);
    displayTable(convertedTemp, convertedMax, convertedMin);
  }

  function displayTempInCelsius(){
    convertedTemp = convertKelvinToCelsius(localWeather.temperature);
    convertedMax  = convertKelvinToCelsius(localWeather.maxTemp);
    convertedMin  = convertKelvinToCelsius(localWeather.minTemp);
    displayTable(convertedTemp, convertedMax, convertedMin);
  }

  function displayTable(convertedTemp, convertedMax, convertedMin){
    var htmlString  = "<table width='360'>";
      htmlString += "<tr><td>Weather:&nbsp;</td><td>"       + localWeather.weather      + "</td></tr>";
      htmlString += "<tr><td>Current Temp:&nbsp;</td><td>"  + convertedTemp             + "</td></tr>";
      htmlString += "<tr><td>Minimum Temp:&nbsp;</td><td>"  + convertedMin              + "</td></tr>";
      htmlString += "<tr><td>Maximum Temp:&nbsp;</td><td>"  + convertedMax              + "</td></tr>";
      htmlString += "<tr><td>Humidity(%):&nbsp;</td><td>"   + localWeather.humidity     + "</td></tr>";
      htmlString += "<tr><td>Pressure: (mb)&nbsp;</td><td>" + localWeather.pressure     + "</td></tr>";
      htmlString += "<tr><td>Wind speed:&nbsp;</td><td>"    + localWeather.windSpeed    + "</td></tr>";
      htmlString += "<tr><td>Wind direction:&nbsp;</td><td>"+ localWeather.windDegrees  + "</td></tr>";
      htmlString += "<tr><td>Wind gust:&nbsp;</td><td>"     + localWeather.windGust     + "</td></tr>";
      htmlString  += "</table>";
      $('#weather_box').html(htmlString);
  }

  // when radio buttons are selected take action
  $('#myForm').on('change', 'input[id="C"]', function() {
        //  Celsius selected
        displayTempInCelsius();
    });

  $('#myForm').on('change', 'input[id="F"]', function() {
        //  Celsius selected
        displayTempInFahrenheit();
    });

});

function convertKelvinToFahrenheit(temp){
  return parseInt((temp - 273.15) * 1.8 +32);
}

  function convertKelvinToCelsius(temp){
    return parseInt(temp - 273.15);
}