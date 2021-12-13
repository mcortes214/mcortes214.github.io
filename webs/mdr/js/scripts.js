
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
  $('.miriam-slider').slick({
    arrows: true,
    prevArrow: $('.miriam-slider-arrows .prev-arrow'),
    nextArrow: $('.miriam-slider-arrows .next-arrow'),
    dots: true,
    vertical: true,
    verticalSwiping: true,
  });

  //Galerías featherlight
  $('.galeria-featherlight').featherlightGallery();

  //Bindear el abrir la galería a los elementos con clase gallery handle
  $('.js-open-gallery-button').click( function() {
    const galleryId = $(this).data('galeria');
    if(galleryId){
      const selector = `#${galleryId} a:first`;
      $(selector).click();
    }
  });

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
