var app = app || {};

(function ($) {
    'use strict';

    var UserProfileView = Backbone.View.extend({

        el: '.user-profile',
        currentUserTemplate: _.template($('#user-profile-template').html()),
        user: null,
        activeUser: null,
        followingId:'',
        events: {
            'click #follow-user': 'followUser',
            'click #remove-following': 'removeFollowing'
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
                    var isFollowing = false;
                    that.activeUser.attributes.following.forEach(function (follow){
                       if  (follow.email === that.user.attributes.email){
                           isFollowing = true;
                           that.followingId = follow._id;
                       }
                    });
                    that.$el.html(that.currentUserTemplate({
                        user: that.user.attributes,
                        isFollowing: isFollowing
                    }));
                }
            });
        },

        get: function (options) {
            var that = this;
            that.activeUser = new app.User({id: $.cookie('userId')});
            if (options.userId) {
                that.activeUser.fetch({
                    success: function () {
                        that.render(options.userId);
                    }
                });
            }

        },

        removeFollowing: function (event) {
            var that = this;
            var followingModel = new app.Following({id: that.followingId});
            followingModel.destroy({
                success: function (model, response) {
                    that.get({userId:that.user.attributes.id});
                },
                error: function (error) {
                    console.log("Something wrong happened!" + error);
                }
            });
        },

        followUser: function () {

        }

    });
    app.UserProfileView = new UserProfileView();

})(jQuery);
