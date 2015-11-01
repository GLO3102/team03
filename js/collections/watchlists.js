var app = app || {};

(function () {
    'use strict';

    var Watchlists = Backbone.Collection.extend({
        model: app.Watchlist,
        url: 'http://umovie.herokuapp.com/unsecure/watchlists',
        byUser: function (userMail){
            filteredCollection = this.filter(function(watchList){
                return watchList.owner.email === userMail;
            });
            return new Watchlists(filteredCollection);
        }
    });

    app.Watchlists = new Watchlists();

})();
