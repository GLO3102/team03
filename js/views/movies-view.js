var app = app || {};

(function ($) {
    'use strict';

    var MoviesView = Backbone.View.extend({

        el: '.movies',

        awesomplete: null,
        collection: app.Movies,
        moviesTemplate: _.template($('#movies-template').html()),

        events:{
            'click #movie-search-btn':'searchMovies',
            'keyup #movie-search-text' : 'keyPressEventHandler'
        },
        initialize: function () {
            _.bindAll(this, 'render');
            var input = document.getElementById("movie-search-text");
            this.awesomplete = new Awesomplete(input);
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

            else
            {
                var searchText = $("#movie-search-text").val();
                if(searchText.length > 3) {
                    var oldURL = app.Movies.url;
                    var that = this;
                    app.Movies.url = app.Movies.url + "?q=" + encodeURIComponent(searchText);
                    app.Movies.fetch({
                        success: function () {
                            that.updateAutoCompleteData()
                        },
                        error: function () {
                        }
                    });

                    app.Movies.url = oldURL;
                }
            }
        },

        updateAutoCompleteData : function()
        {
            var namesArray = new Array();

            for(var i=0; i< app.Movies.length; i++)
            {
                namesArray.push(app.Movies.models[i].attributes.trackName);
            }

            this.awesomplete.list = namesArray;

        },

        get: function () {
            this.render();
        }

    });
    app.MoviesView = new MoviesView();

})(jQuery);
