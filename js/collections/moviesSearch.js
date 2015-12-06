var app = app || {};

(function () {
    'use strict';

    var MoviesSearch = Backbone.Collection.extend({
        model: app.WatchlistMovie,
        url: 'http://localhost:3000/search/movies',
        parse: function(response){
            return response.results;
        }
    });

    app.MoviesSearch = new MoviesSearch();

})();
