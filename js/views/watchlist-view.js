var app = app || {};

(function ($) {
    'use strict';

    var WatchlistView = Backbone.View.extend({

        el: '.watchlist',

        collection: new app.Watchlists(),
        watchlistTemplate: _.template($('#watchlist-template').html()),

        events: {
            'click #create-watchlist': 'addWatchlist',
            'keypress .edit-watchlist-name': 'updateWatchlistOnEnter',
            'click .delete-watchlist': 'removeWatchlist'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            this.input = "";
            that.collection.bind("change add remove", function () {
                that.render();
            });
        },

        render: function () {
            var that = this;
            that.$el.html(that.watchlistTemplate({
                watchlists: that.collection.models
            }));
        },

        get: function () {
            var that = this;
            that.collection.fetch({
                success: function () {
                    that.render();
                }
            });
        },

        addWatchlist: function () {
            var that = this;
            if ($('#watchlist-create-name').val().trim() === '') {
                alert("Please enter a name for your new Watchlist")
            }
            else {
                var watchlistModel = new app.Watchlist({name: $('#watchlist-create-name').val()});
                watchlistModel.save().complete(function () {
                    that.get();
                });
            }
        },

        removeWatchlist: function (event) {
            var that = this;
            var watchlistID = $(event.currentTarget).data("watchlist-id");
            var watchlistModel = new app.Watchlist({id: watchlistID});
            watchlistModel.destroy({
                success: function (model, response) {
                    that.get();
                },
                error: function (error) {
                    console.log("Something wrong happened!" + error);
                }
            });
        },

        updateWatchlistOnEnter: function (event) {
            var that = this;
            $('.edit-watchlist-name').bind('input', function () {
                that.input = $(this).val()
            });
            if (event.keyCode == 13) {
                if (that.input.trim() === '') {
                    alert("Please enter a name for the updated Watchlist")
                }
                else {

                    var watchlistID = $(event.currentTarget).data("watchlist-id");
                    var watchlistModel = that.collection.get(watchlistID);
                    watchlistModel.set({name: that.input});
                    watchlistModel.save().complete(function () {
                        that.get();
                    });
                }
            }
        }
    });

    app.WatchlistView = new WatchlistView();
})(jQuery);