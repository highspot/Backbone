var app = app || {};
(function () {
    'use strict'
    app.ClockView = Backbone.View.extend({
        el: $("#clock"),
  
        template: _.template($('#clock-template').html()),
  
        initialize: function(){
          this.model.on(
            "change",
            function () {
              this.render();
            },
            this
          );
        },
        render: function () {
          this.$el.html(this.template(this.model.attributes));
          return this;
        },
  
      })

})(jQuery)