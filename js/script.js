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

$(document).ready(function() {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
    })
    $(this).addClass('active');

    var target = this.hash,
      menu = target;
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - 200
    }, 500, 'swing', function() {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
    });
  });
});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('#categories a').each(function() {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 210 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
      $('#categories a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}








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
