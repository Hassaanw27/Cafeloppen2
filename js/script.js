var $booking = $('.lftbtn');
var $takeaway = $('.rgtbtn');
var $widget = $('.slideshow');

$widget.waypoint(function (direction) {
  if (direction == 'down') {
    $booking.addClass('js-lftbtn');
    $takeaway.addClass('js-rgtbtn');
    console.log('waypoint')
  }else {
    $booking.removeClass('js-lftbtn');
    $takeaway.removeClass('js-rgtbtn');
    console.log('waypoint2')
  }
},{offset:'92%'});

//ruller//

var $forårsruller = $('.forårsruller');
var $imgforårsruller = $('.imgforårsruller');

$imgforårsruller.waypoint(function (direction) {
  if (direction == 'down') {
    $forårsruller.addClass('activemenu');
    console.log('waypoint')
  }else {
    $forårsruller.addClass('activemenu');
    $forretter.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//ruller slut//

//forretter//

var $forretter = $('.forretter');
var $imgappetizer = $('.imgappetizer');

$imgappetizer.waypoint(function (direction) {
  if (direction == 'down') {
    $forretter.addClass('activemenu');
    $forårsruller.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $forretter.addClass('activemenu');
    $kokoskarry.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//forretter start//

var $kokoskarry = $('.kokoskarry');
var $imgkokoskarry = $('.imgkokoskarry');

$imgkokoskarry.waypoint(function (direction) {
  if (direction == 'down') {
    $kokoskarry.addClass('activemenu');
    $forretter.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $kokoskarry.addClass('activemenu');
    $traditionalwok.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//forretter slut//
//wok start//

var $traditionalwok = $('.traditionalwok');
var $imgtraditionalwok = $('.imgtraditionalwok');

$imgtraditionalwok.waypoint(function (direction) {
  if (direction == 'down') {
    $traditionalwok.addClass('activemenu');
    $kokoskarry.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $traditionalwok.addClass('activemenu');
    $stirfry.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//wok slut//
//stirfry start//

var $stirfry = $('.stirfry');
var $imgstirfry = $('.imgstirfry');

$imgstirfry.waypoint(function (direction) {
  if (direction == 'down') {
    $stirfry.addClass('activemenu');
    $traditionalwok.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $stirfry.addClass('activemenu');
    $smallbites.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//stirfry slut
//smallbites start//

var $smallbites = $('.smallbites');
var $imgsmallbites = $('.imgsmallbites');

$imgsmallbites.waypoint(function (direction) {
  if (direction == 'down') {
    $smallbites.addClass('activemenu');
    $stirfry.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $smallbites.addClass('activemenu');
    $desserts.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//smallbites slut//
//dessert start//

var $desserts = $('.desserts');
var $imgdesserts = $('.imgdesserts');

$imgdesserts.waypoint(function (direction) {
  if (direction == 'down') {
    $desserts.addClass('activemenu');
    $smallbites.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $desserts.addClass('activemenu');
    $vegan.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

//dessert slut//
//vegan start//

var $vegan = $('.vegan');
var $imgvegan = $('.imgvegan');

$imgvegan.waypoint(function (direction) {
  if (direction == 'down') {
    $vegan.addClass('activemenu');
    $desserts.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $vegan.addClass('activemenu');
    $drikkevarer.removeClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});

var $drikkevarer = $('.drikkevarer');
var $imgdrikkevarer = $('.imgdrikkevarer');

$imgdrikkevarer.waypoint(function (direction) {
  if (direction == 'down') {
    $drikkevarer.addClass('activemenu');
    $vegan.removeClass('activemenu');
    console.log('waypoint')
  }else {
    $drikkevarer.addClass('activemenu');
    console.log('waypoint2')
  }
},{offset:'20%'});


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
