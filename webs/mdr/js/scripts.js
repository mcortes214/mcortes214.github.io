
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
    vertical: true,
    verticalSwiping: true,
  });

  //Galerías featherlight
  $('.galeria-featherlight').featherlightGallery();

  //Panzoom
  const element = document.getElementById('panzoom')
  if(element){
    const panzoom = Panzoom(element, {
      disableZoom: true,
    });
  }


  //Coleccion pandemica - gifs

  $('.gif-coleccion-pandemica').on('mouseenter',function(){
    let previousImageUrl = $(this).attr('src');
    console.log(previousImageUrl);
    let urlgif = $(this).data('url-gif');
    console.log(urlgif);
    $(this).attr('src',urlgif);
    let gifTimeout = window.setTimeout(function(){
      $(this).attr('src',previousImageUrl);
    }, 1000);
  });

});//Fin documentReady
