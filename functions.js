$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  console.log(wScroll);

  if(wScroll < 305) {
    $('.logo').css({
      'transform' : 'translate(0px, ' + wScroll/2.2 + '%)'
    });
  }

  if (wScroll >= 512) {
    $('body').addClass("fix-menu");
  } else {
    $('body').removeClass("fix-menu");
  }

});
