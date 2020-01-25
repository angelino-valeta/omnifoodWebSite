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

  /* Navigation scroll */
  $(function(){
    $('a[href*=#]:not([href=#])').click(function(){
      if(location.pathname.replace(/^\//,'') == this.pathn.replace(/^\//, '') && location.hostname == this.hostname){
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1)
      + ']');
      if(target.length){
        $('html, body').animate({
        scrolltop: target.offset().top
        }, 1000);
        return false;
        }
      }
    });
  });

});
