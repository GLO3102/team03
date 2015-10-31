var app = app || {};

(function () {
    'use strict';
    app.Owner = Backbone.Model.extend({
        defaults: {
            email: '',
            name: '',
            id: ''
        },
        parse: function (response) {
            this.email = response.email;
            this.name = response.name;
            this.id = response.id;
            return response;
        }
    });
})();
