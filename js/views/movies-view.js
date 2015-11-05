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
            app.Movies.fetch({
                data: $.param({ q: searchText,
                    limit: 20
                }),
                success: function(data){

                }
            });
            this.render();
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
