var app = app || {};

(function () {
    'use strict';
    app.Following = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/follow',
        defaults: {
            "id": null,
            "name": "",
            "email": ""
        },
        parse: function (response) {

            return response;
        }
    });
})();