var app = app || {};

(function () {
    'use strict';

    app.ActorMovies = Backbone.Collection.extend({
        url: 'http://umovie.herokuapp.com/unsecure/actors/:id/movies',
        model: app.Movie,
        parse : function (response){
            return response.results;
        }
    });

})();
