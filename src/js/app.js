var $ = require('jquery');
var Barba = require('barba.js');
//var angular = require('angular');
var home = require('./includes/home');
var homeScroll = require('./includes/homeScroll');
var main = {

    init: function() {
        home.init();
        homeScroll.init();
    }

}

$(document).ready( main.init );
