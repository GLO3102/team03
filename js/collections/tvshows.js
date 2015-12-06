var app = app || {};

(function () {
    'use strict';

    var TvShows = Backbone.Collection.extend({
        model: app.TvShow,
        url: 'http://localhost:3000/search/tvshows/seasons',
        parse: function (response) {
            return response.results;
        }
    });

    app.TvShows = new TvShows();
})();
