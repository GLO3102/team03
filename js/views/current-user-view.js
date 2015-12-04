var app = app || {};

(function ($) {
    'use strict';

    var CurrentUserView = Backbone.View.extend({

        el: '.current-user',
        collection : new app.Watchlists(),
        currentUserTemplate: _.template($('#current-user-template').html()),
        user: null,
        events: {
            'click #follow-user': 'followUser'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if(that.user){
                that.user.bind("change", function () {
                    that.render(that.user.id);
                });
            }
        },

        render: function (userId,globalWatchlists) {
            var that = this;
            that.user = new app.User({id: userId});
            that.user.fetch({
                success: function () {
                    that.$el.html(that.currentUserTemplate({
                        user: that.user.attributes,
                        watchlists: getWatchlistByUserId(that.user.attributes.id,globalWatchlists)
                    }));
                }
            });
            var getWatchlistByUserId = function (id,globalWatchlists){
                var userWatchlist= [];
                globalWatchlists.forEach(function(watchlist){
                    if (watchlist.attributes.owner.id === id){
                        userWatchlist.push(watchlist);
                    }
                });
                return userWatchlist;
            }
        },

        get: function (options) {
            var that = this;
            that.collection.fetch({
                success: function () {
                    if (options.userId) {
                        that.render(options.userId, that.collection.models);
                    }
                }
            });
        },

        followUser: function() {

        }

    });
    app.CurrentUserView = new CurrentUserView();

})(jQuery);
