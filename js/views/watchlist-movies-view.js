var app = app || {};

(function ($) {
    'use strict';

    var WatchlistMoviesView = Backbone.View.extend({

        el: '.watchlist-movies',
        watchlist: null,

        watchlistMoviesTemplate: _.template($('#watchlist-movies-template').html()),

        events: {
            "click #movieRemove": "removeMovie"
        },

        removeMovie: function (e) {
            var movieID = $(e.currentTarget).data("movie-id");
            var movieModel = this.watchlist.movies.get(movieID);
            movieModel.destroy();
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if(that.watchlist){
                that.watchlist.bind("change", function () {
                    that.render(that.watchlist.id);
                });
            }
        },

        render: function (watchlistID) {
            var that = this;
            that.watchlist = new app.Watchlist({id: watchlistID});
            console.log(that.watchlist.id);
            that.watchlist.fetch({
                success: function (data) {
                    that.$el.html(that.watchlistMoviesTemplate({
                        watchlist: data
                    }));
                }
            });
        },
        get: function (options) {
            var that = this;
            if (options.watchlistID) {
                that.render(options.watchlistID);
            }

        }


    });
    app.WatchlistMoviesView = new WatchlistMoviesView();

})(jQuery);