var app = app || {};

(function () {
    'use strict';

    var UMovieRouter = Backbone.Router.extend({
        routes: {
            '': 'home',
            'watchlists': 'watchlists',
            'watchlist/:id/movies': 'watchlistMovies',
            'watchlist/:id/addMovies': 'watchlistAddMovies',
            'movie': 'movies',
            'movie/:id': 'singleMovie',
            'actors': 'actors',
            'actors/:id': 'singleActor'
        }
    });

    function clearViews() {
        $(".actors").empty();
        $(".single-actor").empty();
        $(".watchlist").empty();
        $(".watchlist-movies").empty();
        $(".watchlist-add-movie").empty();
        $(".movies").empty();
        $(".single-movie").empty();
    }

    app.UMovieRouter = new UMovieRouter();

    app.UMovieRouter.on('route:home', function () {
        app.NavBarView.render();
    });
    app.UMovieRouter.on('route:watchlists', function () {
        clearViews();
        app.WatchlistView.get();
    });
    app.UMovieRouter.on('route:actors', function () {
        clearViews();
        app.ActorsView.get();
    });
    app.UMovieRouter.on('route:singleActor', function (actorID) {
        clearViews();
        app.SingleActorView.get({actorID : actorID});
    });
    app.UMovieRouter.on('route:watchlistMovies', function (watchlistID) {
        clearViews();
        app.WatchlistMoviesView.get({watchlistID: watchlistID});
    });

    app.UMovieRouter.on('route:watchlistAddMovies', function (watchlistID) {
        clearViews();
        app.AddMovieView.render(watchlistID);
    });

    app.UMovieRouter.on('route:singleMovie', function (movieID) {
        clearViews();
        app.SingleMovieView.get({movieID : movieID});
    });

    app.UMovieRouter.on('route:movies', function () {
        clearViews();
        app.MoviesView.get();
    });

    Backbone.history.start();
})();