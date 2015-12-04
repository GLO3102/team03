var app = app || {};

(function () {
    'use strict';

    app.Users = Backbone.Collection.extend({
        model: app.User,
        url: 'http://umovie.herokuapp.com/users'
    });

})();
