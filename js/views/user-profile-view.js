var app = app || {};

(function ($) {
    'use strict';

    var UserProfileView = Backbone.View.extend({

        el: '.user-profile',
        currentUserTemplate: _.template($('#user-profile-template').html()),
        user: null,
        events: {
            'click #follow-user': 'followUser'
        },

        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            if (that.user) {
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
                    that.$el.html(that.currentUserTemplate({
                        user: that.user.attributes
                    }));
                }
            });
        },

        get: function (options) {
            var that = this;

            if (options.userId) {
                that.render(options.userId);
            }

        },

        followUser: function () {

        }

    });
    app.UserProfileView = new UserProfileView();

})(jQuery);
