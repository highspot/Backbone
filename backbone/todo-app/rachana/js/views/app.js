var app = app || {};

(function ($) {
  "use strict";

  app.AppView = Backbone.View.extend({
    el: $("#todoapp"),

    statsTemplate: _.template($("#stats-template").html()),

    events: {
      "keypress #new-todo": "createOnEnter",
      "click #clear-completed": "clearCompleted",
      "click #toggle-all": "toggleAllComplete",
    },

    initialize: function () {
      this.input = this.$("#new-todo");
      this.allCheckbox = this.$("#toggle-all")[0];

      this.listenTo(app.Todos, "add", this.addOne);
      this.listenTo(app.Todos, "reset", this.addAll);
      this.listenTo(app.Todos, "all", this.render);

      this.footer = this.$("footer");
      this.main = $("#main");
      this.defaultTodo = $("#no-todo");
      this.suggestion = $("#suggestion");
      app.Todos.fetch();

      var currentWeather = new app.CurrentWeatherModel();
      currentWeather.fetch().done(function () {
        var view = new app.CurrentWeatherView({
          el: "#weather",
          model: currentWeather,
        });
        
        view.render();
      });
    },

    render: function () {
      var done = app.Todos.done().length;
      var remaining = app.Todos.remaining().length;

      if (app.Todos.length) {
        this.main.show();
        this.footer.show();
        this.defaultTodo.hide();
        this.footer.html(
          this.statsTemplate({ done: done, remaining: remaining })
        );
      } else {
        this.defaultTodo.show();
        this.main.hide();
        this.footer.hide();
      }
      this.allCheckbox.checked = !remaining;
      //set time
      var setTime = Backbone.View.extend({
        initialize: function () {
          this.model.on(
            "change",
            function () {
              this.render();
            },
            this
          );
        },
        render: function () {
          this.$el.html(this.model.get("text"));
        },
      });
      var clockmodel = new Backbone.Model({
        text: new Date().toLocaleTimeString(),
      });
      var clockview = new setTime({
        model: clockmodel,
        el: document.getElementById("current-time"),
      });
      clockview.render();

      setInterval(function () {
        clockmodel.set({ text: new Date().toLocaleTimeString() });
      }, 1000);
    },

    addOne: function (todo) {
      var view = new app.TodoView({ model: todo });
      this.$("#todo-list").append(view.render().el);
    },

    addAll: function () {
      app.Todos.each(this.addOne, this);
    },

    createOnEnter: function (e) {
      if (e.keyCode != 13) return;
      if (!this.input.val()) return;

      app.Todos.create({ title: this.input.val() });
      this.input.val("");
    },

    clearCompleted: function () {
      _.invoke(app.Todos.done(), "destroy");
      return false;
    },

    toggleAllComplete: function () {
      var done = this.allCheckbox.checked;
      app.Todos.each(function (todo) {
        todo.save({ done: done });
      });
    },
  });
})(jQuery);