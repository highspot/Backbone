var app = app || {};

(function () {
	'use strict';

	app.TodoList = Backbone.Collection.extend({
        model: app.Todo,
    
        localStorage: new Backbone.LocalStorage("backbone-storage"),
    
        done: function () {
          return this.where({ done: true });
        },
    
        remaining: function () {
          return this.where({ done: false });
        },
    
        nextOrder: function () {
          if (!this.length) return 1;
          return this.last().get("order") + 1;
        },
    
        comparator: "order",
    
       
      });
    
      app.Todos = new app.TodoList();
})();