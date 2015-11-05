var app = app || {};

(function ($) {
    'use strict';

    var MovieView = Backbone.View.extend({

        el: '.movie',
        movie: null,
        movieTemplate: _.template($('#movie-template').html()),

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if(that.movie){
                that.movie.bind("change", function () {
                    that.render(that.movie.trackId);
                });
            }
        },

        render: function (movieID) {
            var that = this;
            that.movie = new app.Movie({id: movieID});
            that.movie.fetch({
                success: function (data) {
                    console.log(data);
                    that.$el.html(that.movieTemplate({
                        movie: data.attributes.results[0]
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
    app.MovieView = new MovieView();

})(jQuery);
