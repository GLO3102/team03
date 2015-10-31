var app = app || {};

(function () {
    'use strict';

    var Movies = Backbone.Collection.extend({
        model: app.Movie,
        url: 'http://umovie.herokuapp.com/unsecure/movies',
        parse: function (response){
         return response.result;
         }
    });

    app.Movies = new Movies();

})();
