var app = app || {};

(function ($) {
    'use strict';

    var Login = function (email, password) {
        this.email = email;
        this.password = password;
    };

    var LoginView = Backbone.View.extend({

        el: '.login',
        loginTemplate: _.template($('#login-template').html()),
        notificationsElement: '.loginNotifications',
        notificationsTemplate: _.template($('#notification-template').html()),
        errors: [],

        events: {
            'click #login': 'login'
        },

        render: function () {
            this.$el.html(this.loginTemplate);
        },

        renderNotifications: function () {
            var that = this;
            var notifications = $(this.notificationsElement);
            notifications.hide();
            notifications.html(this.notificationsTemplate({
                errors: that.errors
            }));

            if (this.errors.length > 0) {
                notifications.fadeIn();
            } else {
                notifications.fadeOut();
            }
        },

        login: function () {
            var that = this;
            var email = $('#userEmail').val();
            var password = $('#password').val();

            if(this.formIsValid(email, password)){
                $.ajax({
                    url: 'http://umovie.herokuapp.com/login',
                    type: 'POST',
                    data: new Login(email, password),
                    contentType: 'application/x-www-form-urlencoded'
                }).done(function (data){
                    $.cookie('userToken', data.token);
                    $.cookie('userName', data.name);
                    $.cookie('userId',data.id);
                    window.location.href = './index.html';
                }).fail(function (jqXHR, textStatus){
                    that.errors.push('Invalid user email or password');
                    that.renderNotifications();
                });
            }else{
                this.renderNotifications();
            }
        },

        formIsValid: function (email, password){
            var that = this;
            that.errors = [];
            if(email === "" || password === ""){
                that.errors.push('Please fill every field');
                return false;
            }
            return true;
        }

    });

    app.LoginView = new LoginView();

})(jQuery);
