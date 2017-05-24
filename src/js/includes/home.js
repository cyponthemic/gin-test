var $ = require('jquery');
var Barba = require('barba.js');

var home = {
    init: function() {

        if($('#barba-wrapper').lenght > 0){
          this.initBarba();
        }

    },
    initBarba: function(){
      var HideShowTransition = Barba.BaseTransition.extend({
        start: function() {
          this.newContainerLoading.then(this.finish.bind(this));
        },

        finish: function() {
          document.body.scrollTop = 0;
          this.done();
        }
      });
      var Homepage = Barba.BaseView.extend({
        namespace: 'index',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
            console.log('ready');
            $('.js-reveal').addClass('js-revealed');
        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            console.log('completed');
            $('.js-revealed').removeClass('js-reveal');
        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log('leave');
        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
            console.log('leaveCompleted');
        }
      });

      // Don't forget to init the view!
      Homepage.init();
      Barba.Pjax.start();
      Barba.Pjax.getTransition = function() {
        return HideShowTransition;
      };
    }
}

module.exports = home;
