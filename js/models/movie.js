var app = app || {};

(function () {
    'use strict';
    app.Movie = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/movies',
        defaults: {
            "wrapperType": '',
            "kind": '',
            "trackId": null,
            "artistName": '',
            "trackName": '',
            "trackCensoredName": '',
            "trackViewUrl": '',
            "previewUrl": '',
            "artworkUrl30": '',
            "artworkUrl60": '',
            "artworkUrl100": '',
            "collectionPrice": 0,
            "trackPrice": 0,
            "trackRentalPrice": 0,
            "collectionHdPrice": 0,
            "trackHdPrice": 0,
            "trackHdRentalPrice": 0,
            "releaseDate": '',
            "collectionExplicitness": '',
            "trackExplicitness": '',
            "trackTimeMillis": 0,
            "country": '',
            "currency": '',
            "primaryGenreName": '',
            "contentAdvisoryRating": '',
            "longDescription": '',
            "radioStationUrl": ''
        },
        parse: function (response, options) {
            if (options.collection) {
                this.wrapperType = response.wrapperType;
                this.kind = response.kind;
                this.trackId = response.trackId;
                this.artistName = response.artistName;
                this.trackName = response.trackName;
                this.trackCensoredName = response.trackCensoredName;
                this.trackViewUrl = response.trackViewUrl;
                this.previewUrl = response.previewUrl;
                this.artworkUrl30 = response.artworkUrl30;
                this.artworkUrl60 = response.artworkUrl60;
                this.artworkUrl100 = response.artworkUrl100;
                this.collectionPrice = response.collectionPrice;
                this.trackPrice = response.trackPrice;
                this.trackRentalPrice = response.trackRentalPrice;
                this.collectionHdPrice = response.collectionHdPrice;
                this.trackHdPrice = response.trackHdPrice;
                this.trackHdRentalPrice = response.trackHdRentalPrice;
                this.releaseDate = response.releaseDate;
                this.collectionExplicitness = response.collectionExplicitness;
                this.trackExplicitness = response.trackExplicitness;
                this.trackTimeMillis = response.trackTimeMillis;
                this.country = response.country;
                this.currency = response.currency;
                this.primaryGenreName = response.primaryGenreName;
                this.contentAdvisoryRating = response.contentAdvisoryRating;
                this.longDescription = response.longDescription;
                this.radioStationUrl = response.radioStationUrl;

                return response;

            }

            else {
                this.wrapperType = response.results[0].wrapperType;
                this.kind = response.results[0].kind;
                this.trackId = response.results[0].trackId;
                this.artistName = response.results[0].artistName;
                this.trackName = response.results[0].trackName;
                this.trackCensoredName = response.results[0].trackCensoredName;
                this.trackViewUrl = response.results[0].trackViewUrl;
                this.previewUrl = response.results[0].previewUrl;
                this.artworkUrl30 = response.results[0].artworkUrl30;
                this.artworkUrl60 = response.results[0].artworkUrl60;
                this.artworkUrl100 = response.results[0].artworkUrl100;
                this.collectionPrice = response.results[0].collectionPrice;
                this.trackPrice = response.results[0].trackPrice;
                this.trackRentalPrice = response.results[0].trackRentalPrice;
                this.collectionHdPrice = response.results[0].collectionHdPrice;
                this.trackHdPrice = response.results[0].trackHdPrice;
                this.trackHdRentalPrice = response.results[0].trackHdRentalPrice;
                this.releaseDate = response.results[0].releaseDate;
                this.collectionExplicitness = response.results[0].collectionExplicitness;
                this.trackExplicitness = response.results[0].trackExplicitness;
                this.trackTimeMillis = response.results[0].trackTimeMillis;
                this.country = response.results[0].country;
                this.currency = response.results[0].currency;
                this.primaryGenreName = response.results[0].primaryGenreName;
                this.contentAdvisoryRating = response.results[0].contentAdvisoryRating;
                this.longDescription = response.results[0].longDescription;
                this.radioStationUrl = response.results[0].radioStationUrl
                return this;
            }
        }

    });
})();
