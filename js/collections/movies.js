var app = app || {};

(function () {
    'use strict';

    app.Movies = Backbone.Collection.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/watchlists/:id/movies',
        model: app.Movie,
        parse : function (response){
            return response;
        }
    });

})();
