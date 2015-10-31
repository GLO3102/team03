var app = app || {};

(function ($) {
    'use strict';

    var WatchlistView= Backbone.View.extend({

        el: '.watchlist',

        collection: app.Watchlists,
        watchlistTemplate: _.template($('#watchlist-template').html()),

        events: {
            'click #showWatchlists' : 'get'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            that.collection.bind("change add remove", function () {
                that.render();
            });
        },

        render: function () {
            var that = this;
            that.$el.html(that.watchlistTemplate({
                watchlists: that.collection
            }));
        },
        get: function () {
            var that = this;
            that.collection.fetch({
               success: function(data){
                   that.collection = data.models;
                   that.render();
               }
            });
        }



    });
    app.WatchlistView = new WatchlistView();
})(jQuery);