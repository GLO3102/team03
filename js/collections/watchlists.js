var app = app || {};

(function () {
    'use strict';

    var Watchlists = Backbone.Collection.extend({
        model: app.Watchlist,
        url: 'http://umovie.herokuapp.com/unsecure/watchlists',
    });

    app.Watchlists = new Watchlists();

})();
