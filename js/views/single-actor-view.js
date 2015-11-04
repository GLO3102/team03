var app = app || {};

(function ($) {
    'use strict';

    var SingleActorView = Backbone.View.extend({

        el: '.single-actor',
        actor: null,
        actorMovies: null,

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
            that.actor = new app.Actor({id: actorID});
            that.actorMovies = new app.ActorMovies({id: actorID});
            console.log(that.actorMovies.id);
            that.actorMovies.url = that.actorMovies.url.replace(':id', actorID);

            //var actorPromise = that.actor.fetch();


            /*that.actor.fetch({
                success: function (data) {
                    that.$el.html(that.singleActorTemplate({
                        actor: data
                    }));
                }
            });*/


            var complete = _.invoke([this.actor, this.actorMovies], 'fetch');
            $.when.apply($, complete).done(function() {
                that.$el.html(that.singleActorTemplate({
                    actor: that.actor,
                    movies: that.actorMovies
                }));
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