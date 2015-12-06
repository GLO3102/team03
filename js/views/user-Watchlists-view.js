var app = app || {};

(function ($) {
    'use strict';

    var UserWatchlistView = Backbone.View.extend({

        el: '.user-actions',
        userId:'',
        collection: new app.Watchlists(),
        currentUserTemplate: _.template($('#user-watchlist-template').html()),
        events: {},

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            that.collection.bind("change", function () {
                that.render( that.userId,that.collection);
            });

        },

        render: function (userId, globalWatchlists) {
            var that = this;
            var userWatchlist = [];
            globalWatchlists.forEach(function (watchlist) {
                if (watchlist.attributes.owner.id === userId) {
                    userWatchlist.push(watchlist);
                }
            });
            that.$el.html(that.currentUserTemplate({
                userId: userId,
                watchlists: userWatchlist
            }));


        },

        get: function (options) {
            var that = this;
            that.collection.fetch({
                success: function () {
                    if (options.userId) {
                        that.userId= options.userID;
                        that.render(options.userId, that.collection.models);
                    }
                }
            });
        },

        followUser: function () {

        }

    });
    app.UserWatchlistView = new UserWatchlistView();

})(jQuery);
