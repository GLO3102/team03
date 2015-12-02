var app = app || {};

(function ($) {
    'use strict';
    var LoginView = Backbone.View.extend({

        el: '.login',
        loginTemplate: _.template($('#login-template').html()),

        events: {
            'click #login': 'login'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.loginTemplate)
        },

        login: function () {
            console.log('working login!');
        }
    });

    app.LoginView = new LoginView();

})(jQuery);
