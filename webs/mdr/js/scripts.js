
//DOM
$(document).ready(function(){

  //HOME
  if($('body').hasClass('home')){
    setupTypewriter();
    $('.boton-saltar-home').click(function(){endTypewriter();});
  }

  //BIOS
  $('.bio p').click(function(){$(this).toggleClass('is-active');});

});//Fin documentReady
