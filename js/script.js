$(function () {
  "use strict";

  // back to top option ----------------------------------
  $('.scroll_btn').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    });
  });

  $(window).scroll(function () {

    var scorolling = $(this).scrollTop();

    if (scorolling > 400) {
      $('.scroll_btn').fadeIn();
    } else {
      $('.scroll_btn').fadeOut();
    }
  });

  $('.venobox').venobox({
    framewidth: '600px',
    frameheight: '400px',
    border: '2px',
    bgcolor: '#dddddd',
    titleattr: 'data-title',
    numeratio: true,
    infinigall: true,
    share: ['']
  });

});