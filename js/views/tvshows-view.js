var app = app || {};

(function ($) {
    'use strict';

    var TvShowsView = Backbone.View.extend({

        el: '.tvshows',
        collection: app.TvShows,
        tvShowsTemplate: _.template($('#tvshows-template').html()),
        events: {
            'click #tvshow-search-btn': 'searchTvShows',
            'keyup #tvshow-search-text': 'keyPressEventHandler'
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
            that.$el.html(that.tvShowsTemplate({
                tvshows: that.collection.models.sort(function (a, b) {
                    var x = a.get('collectionName').toLowerCase();
                    var y = b.get('collectionName').toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                })
            }));
        },

        searchTvShows: function() {
            var searchText = $("#tvshow-search-text").val();
            app.TvShows.fetch({
                data: $.param({
                    q: searchText
                })
            });
            this.render();
        },

        keyPressEventHandler: function (event) {
            if (event.keyCode == 13) {
                this.$('#tvshow-search-btn').click();
            }
        },

        get: function () {
            this.render();
        }
    });

    app.TvShowsView = new TvShowsView();
})(jQuery);