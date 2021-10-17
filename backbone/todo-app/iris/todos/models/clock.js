var app = app || {};
(function () {
    'use strict'
    
    app.ClockModel = Backbone.Model.extend({

        defaults: function(){
            return  {time: new Date().toLocaleTimeString()}
        }
        
      });

})()