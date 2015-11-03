var app = app || {};

(function () {
    'use strict';

    var Actors = Backbone.Collection.extend({
        model: app.Actor,
        url: 'http://umovie.herokuapp.com/unsecure/search/actors',
        parse: function(response){
            return response;
        }
    });

    app.Actors = new Actors();

})();
