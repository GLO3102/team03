var app = app || {};

(function ($) {
    'use strict';

    var AddToWatchlistView = Backbone.View.extend({

        el: '.movie-add-watchlist',
        movie: null,
        collection: new app.Watchlists(),
        addMovieToWatchlistTemplate: _.template($('#add-movie-to-watchlist-template').html()),

        events:{
            'click .':'searchMovies'
        },


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

        },

        addMovieToWatchlist: function (e){
            var that = this;
            that.resetNotification();
            var watchlistID = $(e.currentTarget).data("watchlist-id");
            var watchlist = _.find(that.collection.models, function (obj) {return obj.attributes.id === watchlistID});
            var watchlistData = new app.Watchlist();
            watchlistData.urlRoot = watchlist.urlRoot.replace(':id', that.currentWatchList.id);
            movieData.save(movie.attributes, {
                success: function (){
                    that.$el.find('#successAddMovieNotif').show();
                },
                error: function (error) {
                    that.$el.find('#errorAddMovieNotif').show();
                }
            });
            e.preventDefault();
            return false; //Permet de ne pas agir sur le collapse de l'accordion
        },

    });

    app.AddToWatchlistView = new AddToWatchlistView();
})(jQuery);
