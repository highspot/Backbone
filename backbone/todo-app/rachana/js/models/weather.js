var app = app || {};
(function () {
    'use strict'
    
     app.CurrentWeatherModel = Backbone.Model.extend({

        initialize: function () {
          this.url =
            "http://api.openweathermap.org/data/2.5/weather?lat=47.608013&lon=-122.335167&units=imperial&appid=e0e31fecb53d51f5aa959eee6bc014f1";
        },
    
        parse: function (data) {
          var weatherData = {
            temp: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            visibility: data.visibility,
            wind: {
              speed: data.wind.speed,
            }
          };
    
          return weatherData;
        },
      });
})()