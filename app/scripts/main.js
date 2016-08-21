/*global learning-backbone-js, $*/


window.learningBackboneJs = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function () {
    'use strict';
    console.log('Hello from Backbone!');
    var marked = new learningBackboneJs.Views.Marked({
      el: '#marked>div'
    });
    var unMarked = new learningBackboneJs.Views.UnMarked({
    });
    $("#unMarked").append(unMarked.render().el);
  }
};

$(document).ready(function () {
  'use strict';
  learningBackboneJs.init();
});
