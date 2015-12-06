var app = app || {};

(function ($) {
    'use strict';

    var UserSearchView = Backbone.View.extend({

        el: '.user-actions',

        collection: app.Users,
        userId:'',
        userSearchTemplate: _.template($('#user-search-template').html()),

        events:{
            'click #user-search-btn' : 'searchUsers',
            'keyup #user-search-text' : 'keyPressEventHandler'
        },
        initialize: function () {
            _.bindAll(this, 'render');
            var that = this;
            that.collection.bind("change add remove", function () {
                that.render();
            });
        },

        render: function (userId) {
            var that = this;
            that.$el.html(that.userSearchTemplate({
                users: that.collection.models,
                userId: userId
            }));
        },

        searchUsers: function(){
            var searchText = $("#user-search-text").val();
            var encodedSearch =encodeURI(searchText);
            var that=this;
            app.Users.fetch({
                data: $.param({ q: encodedSearch}),
                success: function(data){
                    that.render(that.userId);
                }
            });
        },

        keyPressEventHandler : function(event){
            if(event.keyCode == 13){
                this.$("#user-search-btn").click();
            }
        },

        get: function (options) {
            var that = this;

            if (options.userId) {
                that.userId = options.userId;
                that.render(options.userId);
            }options
        }

    });
    app.UserSearchView = new UserSearchView();

})(jQuery);
