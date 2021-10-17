var app = app || {};

(function () {
	'use strict';

    app.CurrentWeatherView = Backbone.View.extend({
        template: _.template($("#current-weather").html()),
    
        initialize: function () {
          var weatherAttributes = this.model.attributes;
          this.$el.html(this.template(this.model.attributes));
          return this;
        },
    
        render: function () {
          var weatherAttributes = this.model.attributes;
          this.$el.html(this.template(this.model.attributes));
          return this;
        },
      });
})();