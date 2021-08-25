class Scrollspy {
  constructor(target, options){
    this.targetElement = document.querySelector(target);
    this.sectionIds = Object.values(options.sections);
    this.sectionNames = Object.keys(options.sections);
    this.sectionRanges = [];
    for(var sectionId of this.sectionIds){
      const sectionElement = document.querySelector(sectionId);
      const sectionScrollTop = sectionElement.offsetTop;
      this.sectionRanges.push(sectionScrollTop);
    }
    this.updateTarget = options.updateTarget;

    //Event binding
    // const targetElement = this.targetElement;
    // const sectionRanges = this.sectionRanges;
    // const sectionNames = this.sectionNames;

    window.addEventListener('scroll',this.updateTarget.bind(this));
  }



}

class Navigation {
  constructor(options){
      //Ocultar botón de portada en el menu. (preparar para funcionar)
      $('#js-item-menu-portada').addClass('is-scrollable')
      $('.branding').addClass('is-scrollable')

      this.setState(options.initialState);
    }

  //Apertura
  toggleClosed(){
    $('.navegacion-principal').toggleClass('is-closed');
  }

  setState(state){
    if(state==="compressed"){
      //Calcular la altura del link de portada
      var el = document.getElementById('js-item-menu-portada');
      var paddingBranding = el.getBoundingClientRect().top + 'px';
      //Cambiar estados
      $('.branding').css({'--padding':paddingBranding, 'pointer-events':'none'});
      $('.branding').addClass('is-scrolled');
      $('.navegacion-principal').addClass('is-scrolled');
      $('.titulo-seccion-actual').removeClass('is-hidden');
      //Cerrar al inicio, siempre
      $('.navegacion-principal').addClass('is-closed');
    }
    if(state==="expanded"){
      //Resetear estados
      $('.branding').removeClass('is-scrolled');
      $('.navegacion-principal').removeClass('is-scrolled');
      $('.titulo-seccion-actual').addClass('is-hidden');
      //Abrir, siempre
      $('.navegacion-principal').removeClass('is-closed');
    }
  }

  setVisibility(visibility){
    if(visibility === "visible"){
      $('.navegacion-principal').addClass('is-closed');
      $('.navegacion-principal').removeClass('is-invisible');
    }
    if(visibility === "hidden"){
      $('.navegacion-principal').addClass('is-closed');
      $('.navegacion-principal').addClass('is-invisible');
    }
  }
}




var menu;

$(document).ready(function(){


/*
INICIALIZAR PRELOADER
*/





var estadoInicialMenu;
if($('body').hasClass('home')){
  estadoInicialMenu = "expanded";
}
else{
  estadoInicialMenu = "compressed";
}

menu = new Navigation({
  initialState: estadoInicialMenu
});




//Para todas las páginas
$('.toggle-menu').click(function(){
  menu.toggleClosed();
});
//En todas las páginas, tener el menú sin extender

//Si estamos en el home,
if($('body').hasClass('home')){

  //Script para isMobile cargado en el head
  if (! isMobile.any){
    var backgroundVideo = document.createElement('video');
    backgroundVideo.classList.add('video-bg-portada');
    backgroundVideo.setAttribute('muted', 'muted');
    backgroundVideo.setAttribute('preload', 'auto');
    backgroundVideo.setAttribute('autoplay', 'autoplay');
    backgroundVideo.setAttribute('loop', 'loop');
    backgroundVideo.setAttribute('src', 'video/portada.mp4');
    var portada = document.querySelector('.js-portada');
    portada.appendChild(backgroundVideo);
    portada.style.backgroundImage = 'none';
  }

  //Habilitar scrollspy de home
  var scrollspy = new Scrollspy('#js-titulo-seccion-actual', {
    sections: {
      'Obras'     : '#obras',
      'Bio'       : '#bio',
      'Statement' : '#statement',
      'Académico' : '#academico',
      'Novedades' : '#novedades',
      'Contacto'  : '#contacto'
    },
    updateTarget  : function(){
                      var sectionIndex = 0;
                      while(this.sectionRanges[sectionIndex] < window.scrollY+window.innerHeight/2){
                        sectionIndex++;
                      }
                      //usa indexOf para identificar el nombre de sección
                      if(this.sectionNames[sectionIndex-1]){
                        //Modificar nombre
                        this.targetElement.innerHTML = this.sectionNames[sectionIndex-1];
                      }
                    }
  });



  //Y chequear scroll para definir estado del menu
  window.addEventListener('scroll',function(e){
      if(window.scrollY > 0){
        menu.setState("compressed");
      }
      else{
        menu.setState("expanded");
      }
  });
}

else if($('body').hasClass('obra')){
  //Evento para ocultar menú principal
  window.addEventListener('scroll',function(e){
    const galeriaDeFotos = document.getElementById('galeria-obra');
    const cambioDeSeccion = galeriaDeFotos.offsetTop;
    if(window.scrollY+window.innerHeight/2 > cambioDeSeccion){
      menu.setVisibility('hidden');
      $('.navegacion-galeria').removeClass('is-hidden');
    }
    else{
      menu.setVisibility('visible');
      $('.navegacion-galeria').addClass('is-hidden');
    }
  });


  //Habilitar scrollspy de galería

  scrollspyGaleria = new Scrollspy('#js-navegacion-galeria', {
      sections: {
        'linkFoto1'    : '#foto1',
        'linkFoto2'    : '#foto2',
        'linkFoto3'    : '#foto3',
        'linkFoto4'    : '#foto4',
        'linkFoto5'    : '#foto5',
        'linkFoto6'    : '#foto6',
        'linkFoto7'    : '#foto7',
        'linkFoto8'    : '#foto8',
        'linkFoto9'    : '#foto9',
        'linkFoto10'    : '#foto10',
        'linkFoto11'    : '#foto11',
        'linkFoto12'    : '#foto12',
        'linkFoto13'    : '#foto13',
      },
      updateTarget  : function(){
                        var sectionIndex = 0;
                        while(this.sectionRanges[sectionIndex] < window.scrollY+window.innerHeight/2){
                          sectionIndex++;
                        }
                        //Elegir selector de la lista
                        //Si existe el índice
                        if(this.sectionNames[sectionIndex-1]){
                          //Modificar nombre
                          var id = this.sectionNames[sectionIndex-1];
                          var itemActivo = document.getElementById(id);
                          //Resetear clases
                          $('.navegacion-galeria a').removeClass('active');
                          //Agregar clase al nuevo item activo
                          $(itemActivo).addClass('active');
                        }
                      }
    });
}


});

var scrollspyGaleria;
