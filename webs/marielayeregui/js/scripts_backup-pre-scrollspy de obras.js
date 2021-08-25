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

    // //test
    // console.log(this.sectionIds);
    // console.log(this.sectionNames);
    // console.log(this.sectionRanges);



    //Event binding
    const targetElement = this.targetElement;
    const sectionRanges = this.sectionRanges;
    const sectionNames = this.sectionNames;
    window.addEventListener('scroll',function(e){
      console.log(window.scrollY);
      var sectionIndex = 0;
      while(sectionRanges[sectionIndex] < window.scrollY){
        sectionIndex++;
      }
      console.log(sectionIndex);
      //usa indexOf para identificar el nombre de sección
      if(sectionNames[sectionIndex-1]){
        //Modificar nombre
        targetElement.innerHTML = sectionNames[sectionIndex-1];
      }
    });

  }
}

class Navigation {
  constructor(options){
      //Ocultar botón de portada en el menu. (preparar para funcionar)
      $('#js-item-menu-portada').addClass('is-scrollable')
      $('.branding').addClass('is-scrollable')

      this.setState(options.initialState);
    }


  toggleClosed(){
    $('.navegacion-principal').toggleClass('is-closed');
  }

  setState(state){
    if(state==="compressed"){
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
    if(state==="expanded"){
      //Resetear estados
      $('.branding').removeClass('is-scrolled');
      $('.navegacion-principal').removeClass('is-scrolled');
      //Abrir, siempre
      $('.navegacion-principal').removeClass('is-closed');
    }
  }
}




var menu;

$(document).ready(function(){

/*
INICIALIZAR SCROLLSPY
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

  //Habilitar scrollspy
  var scrollspy = new Scrollspy('#js-titulo-seccion-actual', {
    sections: {
      'Obras'     : '#obras',
      'Bio'      : '#bio',
      'Statement' : '#statement',
      'Académico' : '#academico',
      'Novedades' : '#novedades',
      'Contacto'  : '#contacto'
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


});
