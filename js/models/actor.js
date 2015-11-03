var app = app || {};

(function () {
    'use strict';
    app.Actor = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/actors',
        defaults: {
            wrapperType: '',
            artistType: '',
            artistName: '',
            artistLinkUrl: '',
            artistId: 0,
            amgArtistId: 0,
            primaryGenreName: '',
            primaryGenreId: 0,
            radioStationUrl: ''
        },
        parse: function (response) {
            this.wrapperType = response.result.wrapperType;
            this.artistType = response.result.artistType;
            this.artistName = response.artistName;
            this.artistLinkUrl = response.artistLinkUrl;
            this.artistId = response.artistId;
            this.amgArtistId = response.amgArtistId;
            this.primaryGenreName = response.primaryGenreName;
            this.primaryGenreId = response.primaryGenreId;
            this.radioStationUrl = response.radioStationUrl;
            return response;
        }

    });
})();