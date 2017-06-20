// Load ScrollMagic
let ScrollMagic = require('scrollmagic');

// Load plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

var homeScroll  = {
  init: function() {

    var controller = new ScrollMagic.Controller(
      // {container: "#container"}
    );
    this.block(controller);
    this.headings(controller);
    this.introBlock(controller);
    this.carouselFrame(controller);
  },

  block: function(controller){
    var blockTween = new TweenMax.fromTo('#hero-image', 1.5, {x: 0, y:0}, {x: '0%', y: '-30%'});
    var blockScene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 'onLeave',
        duration: 400
    })
    .addIndicators()
    .setTween(blockTween)
    .addTo(controller);
  },
  headings: function(controller){
    var textTween = new TweenMax.fromTo('#hero-title', 1, {x: '0', y:0}, {x: '-50%', y: '-60'});
    var subtextTween = new TweenMax.fromTo('#hero-subtitle', 3, {x: '30%', y:0}, {x: '-120%', y: '0'}  );
    var textScene = new ScrollMagic.Scene({
        triggerElement: '#hero-trigger',
        triggerHook: 'onLeave',
        duration: 350
    })
    .setTween(textTween)
    .addTo(controller)
    .on("leave", function (event) {
      if(event.state !== 'BEFORE') $("#hero-title").hide();
    })
    .on("enter", function (event) {
      $("#hero-title").show();
    });
    var subtextScene = new ScrollMagic.Scene({
        triggerElement: '#hero-trigger',
        triggerHook: 'onLeave',
        duration: 500
    })
    .setTween(subtextTween)
    .addTo(controller);
  },
  introBlock: function(controller){
    var heightIntro = $('#intro-block').height();
    var introBlockTween = new TweenMax
                          .fromTo('#intro-block', 1.5,
                                    {
                                      x: 0, y:0 , marginBottom : 0
                                    },
                                    {
                                      x: '0%', y: '-100%', marginBottom : -heightIntro+'px'
                                    });
    var introBlock = new ScrollMagic.Scene({
        triggerElement: '#intro-block-trigger',
        triggerHook: 1,
        duration: 400
    })
    .setTween(introBlockTween)
    //.addIndicators()
    .addTo(controller);
  },
  carouselFrame: function(controller){
    var common = {
      'triggerHook' : '.75',
      'height' : $('#scroll-carousel-frame-1').height()
    };

    var animation = new TweenMax
                          .fromTo('#scroll-carousel-frame-1', 1.5,
                                    {
                                      opacity: 0
                                    },
                                    {
                                      opacity: 1
                                    });
    var scene = new ScrollMagic.Scene({
        triggerElement: '#scroll-carousel-frame-1',
        triggerHook: common.triggerHook,
        duration: common.height/2
    })
    .setTween(animation)
    //.addIndicators()
    .addTo(controller);

    var animation2 = new TweenMax
                          .fromTo('#scroll-carousel-frame-2', 1.5,
                                    {
                                      opacity: 0
                                    },
                                    {
                                      opacity: 1
                                    });
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scroll-carousel-frame-2',
        offset: common.height/2,
        triggerHook: common.triggerHook,
        duration: common.height/2
    })
    .setTween(animation2)
    .addTo(controller);

    var animation3 = new TweenMax
                     .fromTo('#scroll-carousel-frame-3', 1.5,
                              {
                                opacity: 0
                              },
                              {
                                opacity: 1
                              });
    var scene2 = new ScrollMagic.Scene({
        triggerElement: '#scroll-carousel-frame-3',
        offset: common.height,
        triggerHook: common.triggerHook,
        duration: common.height/2
    })
    .setTween(animation3)
    .addTo(controller);
  }
}
module.exports = homeScroll;
