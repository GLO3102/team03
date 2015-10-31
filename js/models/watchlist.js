var app = app || {};

(function () {
    'use strict';
    app.Watchlist = Backbone.Model.extend({
        defaults: {
            movies: new app.Movies(),
            owner: new app.Owner,
            id: ''
        },
        parse: function (response) {
            this.id = response.id;
            this.task = response.task;
            return response;
        }
    });
})();