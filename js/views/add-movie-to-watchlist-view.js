var app = app || {};

(function ($) {
    'use strict';

    var AddToWatchlistView = Backbone.View.extend({

        el: '.movie-add-watchlist',
        movie: null,
        addMovieTemplate: _.template($('#add-movie-to-watchlist-template').html()),


        render: function () {
            this.$el.html(this.addMovieTemplate({
                watchlist: this.currentWatchList.attributes,
                movies: this.movies
            }));
        },

        keyPressEventHandler : function(event){
            if(event.keyCode == 13){
                this.searchMovie();
            }
        }

    });

    app.AddToWatchlistView = new AddToWatchlistView();
})(jQuery);
