var app = app || {};

(function ($) {
    'use strict';
    var LoginView = Backbone.View.extend({

        el: '.login',
        loginTemplate: _.template($('#login-template').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.loginTemplate)
        }
    });

    app.LoginView = new LoginView();

})(jQuery);
