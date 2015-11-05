var app = app || {};

(function () {
    'use strict';

    var Movies = Backbone.Collection.extend({
        model: app.Movie,
        url: 'http://umovie.herokuapp.com/unsecure/search/movies',
        parse: function (response){
            return response.results;
        }
    });

    app.Movies = new Movies();

})();
