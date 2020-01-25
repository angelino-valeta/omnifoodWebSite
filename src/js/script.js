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

  

});
