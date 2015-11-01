var app = app || {};

(function () {
    'use strict';

    var UMovieRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'watchlists': 'watchlists',
            'watchlist/:id/movies': 'watchlistMovies'
        }
    });

    app.UMovieRouter = new UMovieRouter();

    app.UMovieRouter.on('route:home', function () {
        app.NavBarView.render();
    });
    app.UMovieRouter.on('route:watchlists', function () {
        app.WatchlistView.get();
    });

    app.UMovieRouter.on('route:watchlistMovies', function (watchlistID) {
        app.WatchlistMoviesView.get({watchlistID : watchlistID});
    });

    Backbone.history.start();
})();