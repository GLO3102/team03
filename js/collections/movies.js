var app = app || {};

(function () {
    'use strict';

    var Movies = Backbone.Collection.extend({
        model: app.Movie
    });

    app.Movies = new Movies();

})();
