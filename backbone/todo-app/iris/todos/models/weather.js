var app = app || {};
(function () {
    'use strict'
    app.WeatherModel = Backbone.Model.extend({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=seattle&appid=844831b947d70414bc5f12ef9cc1b4e8&units=imperial',
        
        parse: function(response){
          const data = {
            currentTemp: response.main.temp,
            maxTemp: response.main.temp_max,
            minTemp: response.main.temp_min,
            humidity: response.main.humidity,
            pressure: response.main.pressure,
            wind: response.wind.speed
          }
          return data
        }
      });
})()