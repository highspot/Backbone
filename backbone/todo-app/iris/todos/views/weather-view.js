var app = app || {};

(function () {
    'use strict'
    app.WeatherView = Backbone.View.extend({
        el: $("#weather"),
  
        template: _.template($('#weather-template').html()),
  
        render: function () {
          this.$el.html(this.template(this.model.attributes));
          return this;
        },
  
      })

})(jQuery)