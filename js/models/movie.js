(function () {
    'use strict';
    app.Movie = Backbone.Model.extend({
        urlRoot: 'http://umovie.herokuapp.com/unsecure/watchlists/:id/movies',
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
        parse: function (response) {

            /*this.wrapperType = response.wrapperType;
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
            this.radioStationUrl = response.radioStationUrl*/
            return response;
        }
    });
})();
