var app = app || {};

(function () {
    'use strict';
    app.Watchlist = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/watchlists',
        defaults: {
            name : '',
            movies: new app.Movies(),
            owner: new app.Owner(),
            id: ''
        },
        parse: function (response) {
            return response;
        }
    });
})();