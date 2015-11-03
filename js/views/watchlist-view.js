var app = app || {};

(function ($) {
    'use strict';

    var WatchlistView = Backbone.View.extend({

        el: '.watchlist',

        collection: app.Watchlists,
        watchlistTemplate: _.template($('#watchlist-template').html()),

        events: {
            'click #create-watchlist': 'addWatchlist'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            that.collection.bind("change add remove", function () {
                that.get();
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
                success: function (data) {
                    that.render();
                }
            });
        },

        addWatchlist: function (){
            if($('#watchlist-create-name').val().trim()===''){
                alert("Please enter a name for your new Watchlist")
            }
            else{
                this.collection.fetch({
                    type: 'POST',
                    data: JSON.stringify({name: $('#watchlist-create-name').val()}),
                    contentType: 'application/json'
                })
            }
        }
    });
    app.WatchlistView = new WatchlistView();
})(jQuery);