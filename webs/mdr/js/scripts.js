
//DOM
$(document).ready(function(){

  //HOME
  if($('body').hasClass('home')){
    setupTypewriter();
    $('.boton-saltar-home').click(function(){endTypewriter();});
  }

  //BIOS
  $('.bio p').click(function(){$(this).toggleClass('is-active');});

  //Slick Sliders
  $('.slider').slick({
    arrows: false,
    dots: true,
    vertical: true
  });

  //Panzoom
  const element = document.getElementById('panzoom')
  const panzoom = Panzoom(element, {
    disableZoom: true,
  });



});//Fin documentReady
