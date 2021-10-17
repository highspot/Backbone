var app = app || {};
(function () {
    'use strict'
     app.Todo = Backbone.Model.extend({
        defaults: function () {
          return {
            title: "Test todo",
            order: app.Todos.nextOrder(),
            done: false,
            // timeToComplete: this.setTimer(86400),
          };
        },
    
        toggle: function () {
          this.save({ done: !this.get("done") });
        },

        // setTimer: function (duration, display) {
        //     var timer = duration, hours, minutes, seconds;
        //     setInterval(function(){hours = parseInt((timer /3600)%24, 10)
        //       minutes = parseInt((timer / 60)%60, 10)
        //       seconds = parseInt(timer % 60, 10);
      
        //         hours = hours < 10 ? "0" + hours : hours;
        //       minutes = minutes < 10 ? "0" + minutes : minutes;
        //       seconds = seconds < 10 ? "0" + seconds : seconds;
      
        //       $('#timer').text(hours +"hours "+minutes  + " minutes remaining");
        //     	--timer;
      
        //     }, 1000)
        //     // const endDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
        //     // const currentDate = new Date();
        //     // const total = Date.parse(endDate) - Date.parse(currentDate);
        //     // const seconds = Math.floor((total / 1000) % 60);
        //     // const minutes = Math.floor((total / 1000 / 60) % 60);
        //     // const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        //     // const days = Math.floor(total / (1000 * 60 * 60 * 24));
        //     // setInterval(function() {return `${days}: ${hours}: ${minutes} day remaining`}, 3000)
        //     // return `${days}: ${hours}: ${minutes} day remaining`;
        //   },
      });
})();