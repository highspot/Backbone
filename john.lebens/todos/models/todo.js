var app = app || {};
(function () {
    'use strict'
    // Our basic **Todo** model has `title`, `order`, and `done` attributes.
    app.Todo = Backbone.Model.extend({

        // Default attributes for the todo item.
        defaults: function() {
            return {
            title: "empty todo...",
            order: app.Todos.nextOrder(),
            done: false,
            };
        },
    
        // Toggle the `done` state of this todo item.
        toggle: function() {
            this.save({done: !this.get("done")});
        }
    });
    
    /*
    app.Weather = Backbone.Model.extend({

        idAttribute: '_id',
        defaults: function() {
            return{
                name: '',
            }
        }
    });
    */
})()