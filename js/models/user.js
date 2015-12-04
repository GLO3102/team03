/**
 * Created by Phil on 2015-12-03.
 */
var app = app || {};

(function () {
    'use strict';
    app.User = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/users',
        defaults: {
            email : '',
            name : '',
            id: null
        },
        parse: function (response) {
            return response;
        }
    });
})();