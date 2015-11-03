var app = app || {};

(function () {
    'use strict';
    app.Watchlist = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/watchlists',
        defaults: {
            name : '',
            movies: new app.Movies(),
            owner: new app.Owner(),
            id: ''
        },
        parse: function (response) {
            response.movies = new app.Movies(response.movies);
            if(response.movies.models.length > 0){
                for(var i = 0; i < response.movies.models.length; i++){
                    response.movies.models[i].id = response.movies.models[i].attributes.trackId.toString();
                    response.movies.models[i].urlRoot = response.movies.models[i].urlRoot.replace(':id', response.id);
                }
            }
            return response;
        }
    });
})();