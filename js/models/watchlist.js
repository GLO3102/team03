var app = app || {};

(function () {
    'use strict';
    app.Watchlist = Backbone.Model.extend({
        defaults: {
            name : '',
            movies: app.Movies,
            owner: app.Owner,
            id: ''
        },
        parse: function (response) {
            this.name = response.name;
            this.movies = response.movies;
            this.owner = response.owner;
            this.id = response.id;
            return response;
        }
    });
})();