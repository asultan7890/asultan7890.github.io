$(document).ready(function(){
  $(function() {
      $(".nav_title img")
          .mouseover(function() {
            $(".nav_title img").attr("src", "img/logo/full_logo_blue.png");

          })
          .mouseout(function() {
            if ($("nav").is(".navbar-shrink")){
              $(".nav_title img").attr("src", "img/logo/full_logo.png");
            }
            else {
              if ($("#mainNav").width() <= 992){
                $(".nav_title img").attr("src", "img/logo/full_logo.png");
              }
              else {
                $(".nav_title img").attr("src", "img/logo/full_logo_white.png");
              }
            }
          });
  });
});
