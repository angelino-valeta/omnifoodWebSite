$(document).ready(function(){

  /* For the sticky navigation*/

  $('.js--section-features').waypoints(function(direction){
    if (direction == "down") {
      $('nav').addClass('sticky');
    }else {
      $('nav').removeClass('stucky');
    }
  }, {
    offset: '60px;'
  });

  /* Scroll on buttons */
  $('.js--scroll-to-plans').click(function(){
      $('html, body').animate({scrolltop: $('.js--section-plans').offset()
      .top}, 1000);
  });
  $('.js--scroll-to-start').click(function(){
    $('html, body').animate({scrolltop: $('.js-section-features').offset()
    .top}, 1000);
  });

});
