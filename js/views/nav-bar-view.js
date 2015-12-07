var app = app || {};

(function ($) {
    'use strict';
    var NavBarView = Backbone.View.extend({

        el: '.navbar',
        navBarTemplate: _.template($('#navbar-template').html()),

        events: {
           'click #logOut': 'logOutUser'
        },

        render: function () {
            var userName = $.cookie('userName');
            this.$el.html(this.navBarTemplate({
                currentUserName: userName
            }));
        },

        logOutUser: function () {
            $.removeCookie('userToken');
            $.removeCookie('userName');
            $.removeCookie('userId');
            $.ajax({
                url: 'http://umovie.herokuapp.com/logout',
                type: 'GET'
            }).done(function (){
                window.location.href = './home.html';
            });
        }
    });

    app.NavBarView = new NavBarView();

})(jQuery);
