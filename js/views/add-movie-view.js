var app = app || {};

(function ($) {
    'use strict';

    var AddMovieView = Backbone.View.extend({

        el: '.watchlist-add-movie',
        currentWatchList: {},
        movieToAdd: {},
        movies: {},
        addMovieTemplate: _.template($('#add-movie-template').html()),

        events: {
            'click .accordion-movie-add': 'addMovieToWatchlist',
            'click #movie-search-btn' : 'searchMovie'
        },

        render: function (watchlistID) {
            var that = this;
            that.currentWatchList = new app.Watchlist({id: watchlistID});
            that.currentWatchList.fetch({
                success: function (data) {
                    that.$el.html(that.addMovieTemplate({
                        watchlist: data.attributes
                    }));
                }
            });
        },

        searchMovie: function () {
            var searchText = $("#movie-search-text").val();

        },

        addMovieToWatchlist: function (e){
            e.preventDefault();
           console.log('Voilà !');
            return false;
        }
    });

    app.AddMovieView = new AddMovieView();
})(jQuery);