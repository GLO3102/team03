var app = app || {};

(function ($) {
    'use strict';

    var WatchlistView = Backbone.View.extend({

        el: '.watchlist',

        collection: app.Watchlists,
        watchlistTemplate: _.template($('#watchlist-template').html()),

        events: {
            'click #create-watchlist': 'addWatchlist',
            'click .delete-watchlist': 'removeWatchlist'
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
                watchlists: that.collection.models
            }));
        },

        get: function (data) {
            var that = this;
           that.collection.fetch({
                success: function (data) {
                    that.render();
                }
            });
        },

        addWatchlist: function (){
            var that = this;
            if($('#watchlist-create-name').val().trim()===''){
                alert("Please enter a name for your new Watchlist")
            }
            else{
                that.collection.fetch({
                    type: 'POST',
                    data: JSON.stringify({name: $('#watchlist-create-name').val()}),
                    contentType: 'application/json',
                    success: function () {
                        that.get();
                    }
                })
            }
        },
        removeWatchlist: function (event){
            var that = this;
            that.collection.fetch({
                type: 'DELETE',
                url: 'http://umovie.herokuapp.com/unsecure/watchlists/'+ $(event.currentTarget).data("watchlist-id"),
                success: function () {
                    that.get();
                }
            })
        }
    });
    app.WatchlistView = new WatchlistView();
})(jQuery);