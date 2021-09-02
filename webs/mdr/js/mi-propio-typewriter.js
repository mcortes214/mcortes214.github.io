//VARIABLES GLOBALES, pasar a módulo

var listaDeLetras;
var delayVisibilizacionDeLetras;





function setupTypewriter(){
  //Si la visibilidad había sido prevenida, restaurar
  restoreVisibility();
  //SETUP
  // TODO: pasar a funciones y clases de estado
    //"Activar" viewport limitado
    var viewport = document.querySelector('.viewport');
    const alturaBotonesHome = document.querySelector('.botones-home').offsetHeight;
    const alturaViewport = window.innerHeight;
    console.log(alturaBotonesHome);
    console.log(alturaViewport);
    $(viewport).addClass('is-restricted');
    //Activar scroll desde abajo
    var contenedorTextoHome = document.querySelector('.texto-home');
    $(contenedorTextoHome).css({
      'position':'absolute',
      'bottom':'0',
    });
    //Crear spans para cada letra
    spanify();
    //Ocultar letras
    hideLetters();

    //intervalo: cada X tiempo, una nueva iteración de un loop? pero non blocking
    var indiceDeLetra = 0;
    delayVisibilizacionDeLetras = setInterval(function(){
      mostrarLetra(indiceDeLetra);
      indiceDeLetra++;
      if(indiceDeLetra>=listaDeLetras.length){
        clearInterval(delayVisibilizacionDeLetras);
        endTypewriter();
      }
    },35);
}


function hideLetters(){
  listaDeLetras = document.querySelectorAll('.texto-home .letter');
  //ocultar letras
  for (var letra of listaDeLetras){
    $(letra).css({'opacity':'0','height':'0'});
  }
}

function spanify(){
  var parrafosTextoHome = document.querySelectorAll('.texto-home p');
  for (var parrafo of parrafosTextoHome){
    //Reemplazar whitespaces por "⠀" (blank braille character)
    parrafo.innerHTML = parrafo.textContent.replace(/\s/g, "⠀");
    //Envolver cada letra en un span.
    parrafo.innerHTML = parrafo.textContent.replace(/\S|\s/g, "<span class='letter'>$&</span>");
  }
}

function mostrarLetra(indiceDeLetra){
  $(listaDeLetras[indiceDeLetra]).css({'opacity':'1', 'height': '1em'});
}

function preventVisibility(){
    viewport = document.querySelector('.viewport');
    $(viewport).css({'visibility':'hidden'});
}

function restoreVisibility(){
  viewport = document.querySelector('.viewport');
  $(viewport).css({'visibility':'visible'});
}

function endTypewriter(){

  //Si el intervalo todavía está corriendo, detenerlo y mostrar todas las letras
    clearInterval(delayVisibilizacionDeLetras);
    $('.texto-home .letter').css({'opacity':'1', 'height': '1em'});

  //Desactivar viewport limitado
  var viewport = document.querySelector('.viewport');
  $(viewport).removeClass('is-restricted');
  //Activar scroll desde abajo
  var contenedorTextoHome = document.querySelector('.texto-home');
  $(contenedorTextoHome).css({
    'position':'static',
  });
}
