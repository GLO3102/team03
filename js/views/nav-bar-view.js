var app = app || {};

(function ($) {
    'use strict';
    var NavBarView = Backbone.View.extend({

        el: '.navbar',
        navBarTemplate: _.template($('#navbar-template').html()),

        render: function () {
            var userName = $.cookie('userName');
            this.$el.html(this.navBarTemplate({
                currentUserName: userName
            }));
        }
    });

    app.NavBarView = new NavBarView();

})(jQuery);
