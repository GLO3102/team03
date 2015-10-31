var app = app || {};

(function () {
    'use strict';
    app.Watchlist = Backbone.Model.extend({
        defaults: {
            movies: app.Movies,
            owner: new app.Owner,
            id: ''
        },
        parse: function (response) {
            this.movies = response.movies;
            this.owner = response.owner;
            this.id = response.id;
            return response;
        }
    });
})();