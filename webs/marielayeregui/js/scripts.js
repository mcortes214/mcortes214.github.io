$(document).ready(function(){

/*

COMPONENTE SCROLL



Al scrollear,
Agregar un estado "is-scrolled" al BRANDING y al MAIN MENU

Branding:
Va a tener un fade a padding-top? de 50vh, y una opacidad de 0.

Nav:
El item de inicio va a tener un fade a opacidad 1,
Y el botón de toggle va a tener un fade a op 1, y va a bajar de arriba? reemplaza a branding

Estilizar toggle:
Dejarlo donde está en el código, darle un estilo absoluto igual que a branding.

*/

  //Chequear si JS anda
  //Y si funciona, ocultar botón de portada en el menu. (preparar para funciona)
  $('#js-item-menu-portada').addClass('is-scrollable')
  $('.branding').addClass('is-scrollable')

  $('.toggle-menu').click(function(){
    $('.navegacion-principal').toggleClass('is-closed');
  });

  window.addEventListener('scroll',function(e){
    if(window.scrollY > 0){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  });

});

function setScroll(scrolled){
  if(scrolled){
    //Calcular la altura del link de portada
    var el = document.getElementById('js-item-menu-portada');
    var paddingBranding = el.getBoundingClientRect().top + 'px';
    //Cambiar estados
    $('.branding').css({'--padding':paddingBranding});
    $('.branding').addClass('is-scrolled');
    $('.navegacion-principal').addClass('is-scrolled');
    //Cerrar, siempre
    $('.navegacion-principal').addClass('is-closed');
  }
  else{
    //Resetear estados
    $('.branding').removeClass('is-scrolled');
    $('.navegacion-principal').removeClass('is-scrolled');
    //Abrir, siempre
    $('.navegacion-principal').removeClass('is-closed');
  }
}
