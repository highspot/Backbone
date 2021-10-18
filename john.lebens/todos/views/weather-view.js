var app = app || {};
(function () {
    'use strict'
    // The DOM element for a todo item...
    app.Weather = Backbone.View.extend({
        
        template: _.template($('weather-template').html()),

        initialize: function () {
            this.collection.fetch({
                context: this,
                success: this.render,
                error: this.onError
            });
        },

        // Remember that "render" should be idempotent
        render: function() {
            this.$el.empty();
            this.addAll();

            // Always return "this" inside render to chain calls.
            return this;
        },

        addAll: function() {
            this.collection.each(this.addOne, this);
        },

        addOne: function(model) {
            this.$el.append(this.templte(model.toJSON()));
        },

        onError: function(collection, response, options) {
            console.log("error");
        },
    
      });

})(jQuery)