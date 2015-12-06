var app = app || {};

(function ($) {
    'use strict';

    var MoviesView = Backbone.View.extend({

        el: '.movies',

        collection: app.Movies,
        moviesTemplate: _.template($('#movies-template').html()),

        events:{
            'click #movie-search-btn':'searchMovies',
            'keyup #movie-search-text' : 'keyPressEventHandler'
        },
        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            that.collection.bind("change add remove", function () {
                that.render();
            });
        },

        render: function () {
            var that = this;
            that.$el.html(that.moviesTemplate({
                movies: that.collection.models
            }));
        },

        searchMovies: function(){
            var searchText = $("#movie-search-text").val();
            var oldURL =  app.Movies.url;
            var that = this;
            app.Movies.url = app.Movies.url + "?q=" +encodeURIComponent(searchText);
            app.Movies.fetch({
                success: function(data){
                    app.Movies.url = oldURL;
                    that.render();
                },
                error: function () {
                    app.Movies.url = oldURL;
                }
            });
        },

        keyPressEventHandler : function(event){
            if(event.keyCode == 13){
                this.$("#movie-search-btn").click();
            }
        },

        get: function () {
            this.render();
        }

    });
    app.MoviesView = new MoviesView();

})(jQuery);
