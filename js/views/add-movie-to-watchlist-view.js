var app = app || {};

(function ($) {
    'use strict';

    var AddToWatchlistView = Backbone.View.extend({

        el: '.movie-add-watchlist',
        movie: null,
        collection: new app.Watchlists(),
        addMovieToWatchlistTemplate: _.template($('#add-movie-to-watchlist-template').html()),


        render: function (movieID) {
            var that = this;
            that.movie = new app.Movie({id: movieID});
            var complete = _.invoke([that.movie], 'fetch');
            that.collection.fetch({
                success: function () {
                    that.$el.html(that.addMovieToWatchlistTemplate({
                        watchlists: that.collection.models,
                        movie: that.movie
                    }));
                }
            });
        },

        get: function (options) {
            var that = this;
            if (options.movieID) {
                that.render(options.movieID);
            }

        }

    });

    app.AddToWatchlistView = new AddToWatchlistView();
})(jQuery);
