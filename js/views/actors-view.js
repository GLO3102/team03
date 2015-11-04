var app = app || {};

(function ($) {
    'use strict';

    var ActorsView = Backbone.View.extend({
        //tagName: 'li',

        el: '.actors',

        collection: app.Actors,
        actorsTemplate: _.template($('#actors-template').html()),

        events:{
            'click #actor-search-btn':'searchActors',
            'keyup #actor-search-text' : 'keyPressEventHandler'
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

        searchActors: function(){
            var searchText = $("#actor-search-text").val();
            app.Actors.fetch({
                data: $.param({ q: searchText,
                                limit: 20
                             }),
                success: function(data){

                }
            });
            this.render();
        },

        keyPressEventHandler : function(event){
            if(event.keyCode == 13){
                this.$("#actor-search-btn").click();
            }
        },

        get: function () {
            this.render();
        }



    });
    app.ActorsView = new ActorsView();
})(jQuery);