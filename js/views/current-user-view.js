var app = app || {};

(function ($) {
    'use strict';

    var CurrentUserView = Backbone.View.extend({

        el: '.current-user',

        currentUserTemplate: _.template($('#current-user-template').html()),
        user: null,
        events: {
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if(that.user){
                that.user.bind("change", function () {
                    that.render(that.user.id);
                });
            }
        },

        render: function (userId) {
            var that = this;
            that.user = new app.User({id: userId});
            that.user.fetch({
                success: function () {
                    console.log(that.user.email);
                    that.$el.html(that.currentUserTemplate({
                        user: that.user
                    }));
                }
            });

        },

        get: function (options) {
            var that = this;
            if (options.userId) {
                that.render(options.userId);
            }

        }



    });
    app.CurrentUserView = new CurrentUserView();

})(jQuery);
