var app = app || {};

(function () {
    'use strict';

    app.TvShowEpisodes = Backbone.Collection.extend({
        url: 'http://localhost:3000/tvshows/season/:id/episodes',
        model: app.TvShowEpisode,
        parse : function (response){
            return response.results;
        }
    });

})();
