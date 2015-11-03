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
            var that = this;
            var movieID = $(e.currentTarget).data("movie-id");
            var movieModel = new app.Movie({id: movieID});
            movieModel.urlRoot = movieModel.urlRoot.replace(':id', this.watchlist.id);
            movieModel.destroy({
                success: function (model, response){
                    that.watchlist = new app.Watchlist(response);
                    that.refreshWatchList();
                },
                error: function (error){
                    console.log("Something wrong happened!" + error);
                }
            });
        },

         refreshWatchList: function (){
             this.$el.html(this.watchlistMoviesTemplate({
                 watchlist: this.watchlist.attributes,
                 movies: this.watchlist.attributes.movies.models
             }));
         },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if (that.watchlist) {
                that.watchlist.bind("change", function () {
                    that.render(that.watchlist.id);
                });
            }
        },

        render: function (watchlistID) {
            var that = this;
            that.watchlist = new app.Watchlist({id: watchlistID});
            that.watchlist.fetch({
                success: function (data) {
                    that.$el.html(that.watchlistMoviesTemplate({
                        watchlist: data.attributes,
                        movies: data.attributes.movies.models
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