var app = app || {};

(function ($) {
    'use strict';

    var SingleActorView = Backbone.View.extend({

        el: '.single-actor',
        actor: null,

        singleActorTemplate: _.template($('#single-actor-template').html()),

        events: {
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if(that.actor){
                that.actor.bind("change", function () {
                    that.render(that.actor.artistId);
                });
            }
        },

        render: function (actorID) {
            var that = this;
            var number = parseInt(actorID);
            that.actor = new app.Actor({artistId: number});
            console.log(that.actor.artistId);
            that.actor.fetch({
                success: function (data) {
                    that.$el.html(that.singleActorTemplate({
                        actor: data
                    }));
                }
            });
        },
        get: function (options) {
            var that = this;
            if (options.actorID) {
                that.render(options.actorID);
            }

        }

    });
    app.SingleActorView = new SingleActorView();

})(jQuery);