var app = app || {};

(function ($) {
    'use strict';

    var ActorsView = Backbone.View.extend({

        el: '.actors',
        collection: app.Actors,
        actorsTemplate: _.template($('#actors-template').html()),

        events: {
            'click #actor-search-btn': 'searchActors',
            'keyup #actor-search-text': 'keyPressEventHandler'
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
            that.$el.html(that.actorsTemplate({
                actors: that.collection.models
            }));
        },

        searchActors: function() {
            var searchText = $("#actor-search-text").val();
            var that = this;
            var oldURL =  that.collection.url;
            that.collection.url = that.collection.url + "?q=" +encodeURIComponent(searchText);
            that.collection.fetch({
                success:function(){
                    that.collection.url = oldURL;
                },
                error: function (error) {
                    console.log(error.message);
                    that.collection.url = oldURL;

                }
            });
        },

        keyPressEventHandler : function(event) {
            if (event.keyCode == 13) {
                this.searchActors();
            }
        },

        get: function () {
            this.render();
        }

    });

    app.ActorsView = new ActorsView();
})(jQuery);