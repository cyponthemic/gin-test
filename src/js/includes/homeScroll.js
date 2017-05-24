// Load ScrollMagic
let ScrollMagic = require('scrollmagic');

// Load plugins
require('scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap');
require('scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators');

var homeScroll  = {
  init: function() {
    console.log('scroll yo');
    var controller = new ScrollMagic.Controller({container: "#container"});
    var blockTween = new TweenMax.fromTo('#block', 1.5,
    {x: 0, y:0},
    {x: '-50%', y: '10%'}
    );
    var textTween = new TweenMax.fromTo('#text', 1.5,
    {x: 0, y:0},
    {x: '50%', y: '10%'}
    );
    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 'onLeave',
        duration: 500
    })
    .setPin('#block')
    .setTween(blockTween)
    .addIndicators()
    .addTo(controller);

    var containerScene = new ScrollMagic.Scene({
        triggerElement: '#trigger',
        triggerHook: 'onLeave',
        duration: 500
    })
    .setPin('#title')
    .setTween(textTween)
    .addIndicators()
    .addTo(controller);
  }
}
module.exports = homeScroll;
