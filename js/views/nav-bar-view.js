var app = app || {};

(function ($) {
    'use strict';
    var NavBarView = Backbone.View.extend({

        el: '.navbar',
        navBarTemplate: _.template($('#navbar-template').html()),

        render: function () {
            this.$el.html(this.navBarTemplate)
        }
    });

    app.NavBarView = new NavBarView();

})(jQuery);
