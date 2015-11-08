var app = app || {};

(function ($) {
    'use strict';

    var TvShowView = Backbone.View.extend({

        el: '.tvshow',
        tvshow: null,
        episodes: null,
        tvShowTemplate: _.template($('#tvshow-template').html()),

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if (that.tvshow) {
                that.tvshow.bind("change", function () {
                    that.render(that.tvshow.collectionId);
                });
            }
        },

        render: function (tvShowID) {
            var that = this;
            that.tvshow = new app.TvShow({id: tvShowID});
            that.episodes = new app.TvShowEpisodes();
            that.episodes.url = that.episodes.url.replace(':id', tvShowID);

            var fetchShow = _.invoke([this.tvshow, this.episodes], 'fetch');
            $.when.apply($, fetchShow).done(function () {
                var renderWithYoutubeVideo = function (youtubeID) {
                    that.$el.html(that.tvShowTemplate({
                        tvshow: that.tvshow.toJSON(),
                        youtubeID: youtubeID,
                        episodes: that.episodes.models.sort(function (a, b) {
                            return a.get('trackNumber') - b.get('trackNumber');
                        })
                    }));
                };

                youtubeSearch(that.tvshow.get('collectionName') + ' trailer', renderWithYoutubeVideo);
            });
        },

        get: function (options) {
            var that = this;
            if (options.tvShowID) {
                that.render(options.tvShowID);
            }
        }
    });

    app.TvShowView = new TvShowView();
})(jQuery);