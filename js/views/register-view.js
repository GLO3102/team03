var app = app || {};

(function ($) {
    'use strict';
    var RegisterView = Backbone.View.extend({

        el: '.register',
        registerTemplate: _.template($('#register-template').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.registerTemplate)
        }
    });

    app.RegisterView = new RegisterView();

})(jQuery);
