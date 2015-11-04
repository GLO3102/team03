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
            'click .add-movie': 'addMovieToWatchlist'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            this.render();
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
            that.$el.html(that.addMovieTemplate);
        },

        addMovieToWatchlist: function (){
           console.log('Voilà !');
        }
    });

    app.AddMovieView = new AddMovieView();
})(jQuery);