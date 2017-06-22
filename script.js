var mn = $(".main-nav");
var mh = $('.main-header');

$(window).scroll(function() {
  if($(this).scrollTop() > 80) {
    mn.addClass("stickyNav");   
     }
  else {
    mn.removeClass("stickyNav");
     }
})

$(window).scroll(function() {
  if($(this).scrollTop() > 42) {
    mh.addClass("hiding");
  }
  else {
    mh.removeClass("hiding");
  }
  
})