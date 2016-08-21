/*global LearningBackboneJs, Backbone, JST*/

learningBackboneJs.Views = learningBackboneJs.Views || {};

(function () {
  'use strict';

  learningBackboneJs.Views.Marked = Backbone.View.extend({

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
      this.$counter = this.$(".count");
    },

    render: function () {
      console.log("marked render.");
      return this;
    }

  });

})();
