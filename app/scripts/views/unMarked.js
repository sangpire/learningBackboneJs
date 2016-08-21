/*global learningBackboneJs, Backbone, JST*/

learningBackboneJs.Views = learningBackboneJs.Views || {};

(function () {
  'use strict';

  learningBackboneJs.Views.UnMarked = Backbone.View.extend({

    template: JST['app/scripts/templates/unMarked.ejs'],

    tagName: 'div',

    id: '',

    className: '',

    events: {
      'click button': '_button_clicked'
    },

    _button_clicked: function() {
      this.$counter.html(++this.count);
    },

    initialize: function () {
      this.count = 0;
    },

    render: function () {
      this.$el.html(this.template());
      this.$counter = this.$(".count");
      return this;
    }

  });

})();
