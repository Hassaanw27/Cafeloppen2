var $booking = $('.lftbtn');
var $takeaway = $('.rgtbtn');
var $widget = $('.slideshow');

$widget.waypoint(function(direction) {
  if (direction == 'down') {
    $booking.addClass('js-lftbtn');
    $takeaway.addClass('js-rgtbtn');
    console.log('waypoint')
  } else {
    $booking.removeClass('js-lftbtn');
    $takeaway.removeClass('js-rgtbtn');
    console.log('waypoint2')
  }
}, {
  offset: '92%'
});

//ruller//


var $forårsruller = $('.forårsruller');
var $imgforårsruller = $('.imgforårsruller');


$imgforårsruller.waypoint(function(direction) {
  if (direction === 'up') {
    $forårsruller.addClass('activemenu');
    $forretter.removeClass('activemenu');
    console.log('waypointssssss')
  }
}, {
  offset: '-10%'
});


//ruller slut//

//forretter//




var $forretter = $('.forretter');
var $imgappetizer = $('.imgappetizer');

$imgappetizer.waypoint(function(direction) {
  if (direction === 'down') {
    $forretter.addClass('activemenu');
    $forårsruller.removeClass('activemenu');
    console.log('waypoint3')
  }
}, {
  offset: '50%'
});

$imgappetizer.waypoint(function(direction) {
  if (direction === 'up') {
    $forretter.addClass('activemenu');
    $kokoskarry.removeClass('activemenu');
    console.log('waypoint4asdasd')
  }
}, {
  offset: '-10%'
});

//forretter start//




var $kokoskarry = $('.kokoskarry');
var $imgkokoskarry = $('.imgkokoskarry');

$imgkokoskarry.waypoint(function(direction) {
  if (direction === 'down') {
    $kokoskarry.addClass('activemenu');
    $forretter.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgkokoskarry.waypoint(function(direction) {
  if (direction === 'up') {
    $kokoskarry.addClass('activemenu');
    $traditionalwok.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '-10%'
});


//forretter slut//
//wok start//




var $traditionalwok = $('.traditionalwok');
var $imgtraditionalwok = $('.imgtraditionalwok');

$imgtraditionalwok.waypoint(function(direction) {
  if (direction === 'down') {
    $traditionalwok.addClass('activemenu');
    $kokoskarry.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgtraditionalwok.waypoint(function(direction) {
  if (direction === 'up') {
    $traditionalwok.addClass('activemenu');
    $stirfry.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '-10%'
});

//wok slut//
//stirfry start//




var $stirfry = $('.stirfry');
var $imgstirfry = $('.imgstirfry');

$imgstirfry.waypoint(function(direction) {
  if (direction === 'down') {
    $stirfry.addClass('activemenu');
    $traditionalwok.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgstirfry.waypoint(function(direction) {
  if (direction === 'up') {
    $stirfry.addClass('activemenu');
    $smallbites.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '-10%'
});

//stirfry slut
//smallbites start//


var $smallbites = $('.smallbites');
var $imgsmallbites = $('.imgsmallbites');

$imgsmallbites.waypoint(function(direction) {
  if (direction === 'down') {
    $smallbites.addClass('activemenu');
    $stirfry.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgsmallbites.waypoint(function(direction) {
  if (direction === 'up') {
    $smallbites.addClass('activemenu');
    $desserts.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '-10%'
});

//smallbites slut//
//dessert start//


var $desserts = $('.desserts');
var $imgdesserts = $('.imgdesserts');

$imgdesserts.waypoint(function(direction) {
  if (direction === 'down') {
    $desserts.addClass('activemenu');
    $smallbites.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgdesserts.waypoint(function(direction) {
  if (direction === 'up') {
    $desserts.addClass('activemenu');
    $vegan.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '10%'
});

//dessert slut//
//vegan start//




var $vegan = $('.vegan');
var $imgvegan = $('.imgvegan');

$imgvegan.waypoint(function(direction) {
  if (direction === 'down') {
    $vegan.addClass('activemenu');
    $desserts.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgvegan.waypoint(function(direction) {
  if (direction === 'up') {
    $vegan.addClass('activemenu');
    $drikkevarer.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '50%'
});



var $drikkevarer = $('.drikkevarer');
var $imgdrikkevarer = $('.imgdrikkevarer');

$imgdrikkevarer.waypoint(function(direction) {
  if (direction === 'down') {
    $drikkevarer.addClass('activemenu');
    $vegan.removeClass('activemenu');
    console.log('waypoint5')
  }
}, {
  offset: '50%'
});

$imgdrikkevarer.waypoint(function(direction) {
  if (direction === 'up') {
    $vegan.addClass('activemenu');
    $drikkevarer.removeClass('activemenu');
    console.log('adsadasdad')
  }
}, {
  offset: '100%'
});



$(document).ready(function() {
  $(".forretter").click(function() {
    $("body,html").animate({
      scrollTop: $("#2").offset().top
    }, 800);
  });
});








// $("#navtoggle").change(function () {
//  if ($(this).is(":checked")) {
//    $(".navbg").addClass("red");
//  } else {
//    $(".navbg").removeClass("red");
//  }
//});

//$(window).scroll(function() {

//    if ($(this).scrollTop()>-1)
//     {
//    $(".navbg").addClass("red");
//     }
//    else
//     {
//    $(".navbg").removeClass("red");
//     }
// });
