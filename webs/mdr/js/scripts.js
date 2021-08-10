$(document).ready(function(){

  //Inicializar typewrite
  //Si la función no existe, o algo falla, simplemente no ejecutarla:
  try{
    inicializarTypewriter();
  }
  catch(e){
    console.warn('Typewrite no fue inicializado. Se muestra texto estático en su lugar.');
    console.warn(e);
  }

  //Eventos de interacción

  $('.boton-saltar-home').click(function(){
    $('.home-typewriter-overlay').removeClass('is-visible');
    $('.texto-home').removeClass('is-hidden');
  });


  $('.bio p').click(function(){
    $(this).toggleClass('is-active');
  });

});

function inicializarTypewriter(){

  //Si la página no es el home, no hacer nada
  if(! $(body).hasClass('home')){
    return
  }

  //Volver visible el overlay
  $('.home-typewriter-overlay').addClass('is-visible');

  //Achicar contenedor de texto original, para eliminar el scroll
  $('.texto-home').addClass('is-hidden');

  //Iniciar objeto typewrite
  $('.js-typewriter')
  .on('typewriteComplete', function(){
    console.log('completo');
  })
  .typewrite({
    speed: 85,
    showCursor: false,
    blinkingCursor: false,
      actions: [
        {type: 'En el 2019 comenzamos a trabajar en un proyecto colectivo sobre las relaciones entre realidad y ficción. En el 2020 el mundo se conmovió, la pandemia logró que todo pareciera detenerse dentro y fuera de nosotros.'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'La realidad, construida sobre nuestras supuestas certezas, crujió. Nos obligó a cambiar la mirada y la perspectiva, haciéndonos percibir sus sombras más oscuras. Asumir lo real requirió un proceso de introspección y análisis profundo y la frontera con la ficción borró sus límites. El debate entre ambas, fue un lugar de tensión e incertidumbre. Al desnudo quedó nuestra vulnerabilidad: en carne viva.'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'El cuerpo, un territorio en disputa '},
        {type: '<br>'},
        {type: 'entre la necesidad del contacto con el otro y la idea de amenaza.'},
        {type: '<br>'},
        {type: 'El cuerpo un territorio sustituido por la virtualidad'},
        {type: '<br>'},
        {type: 'en la que sólo fue posible nuestra comunicación'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'El cuerpo una caja de resonancia,'},
        {type: '<br>'},
        {type: 'angustia'},
        {type: '<br>'},
        {type: 'ansiedad'},
        {type: '<br>'},
        {type: 'aburrimiento'},
        {type: '<br>'},
        {type: 'desasosiego'},
        {type: '<br>'},
        {type: 'desconcierto'},
        {type: '<br>'},
        {type: 'dolor'},
        {type: '<br>'},
        {type: 'duelo'},
        {type: '<br>'},
        {type: 'enojo'},
        {type: '<br>'},
        {type: 'fastidio'},
        {type: '<br>'},
        {type: 'furia'},
        {type: '<br>'},
        {type: 'incertidumbre'},
        {type: '<br>'},
        {type: 'miedos'},
        {type: '<br>'},
        {type: 'taquicardia'},
        {type: '<br>'},
        {type: 'temblores'},
        {type: '<br>'},
        {type: 'tedio'},
        {type: '<br>'},
        {type: 'tristeza'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'El presente que nos tocó vivir nos obligó a redefinir conceptos y rearmar discursos. Nos preguntamos ¿cómo seguir ahora? ¿Cómo darle forma a una producción artística colectiva en ese contexto?'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Fue tiempo de tomarse tiempo'},
        {type: '<br>'},
        {type: 'tiempo para reflexionar'},
        {type: '<br>'},
        {type: 'tiempo para establecer prioridades'},
        {type: '<br>'},
        {type: 'tiempo de desvelos,'},
        {type: '<br>'},
        {type: 'tiempo de noches largas'},
        {type: '<br>'},
        {type: 'y días eternos.'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Tiempo de cuarentena'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Tiempo de quedarse en casa, el que la tiene'},
        {type: '<br>'},
        {type: 'la casa que es un refugio o una cárcel, que es un remanso o una asfixia'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Tiempo de espera, larga espera'},
        {type: '<br>'},
        {type: 'el reloj ya no lo registra,'},
        {type: '<br>'},
        {type: 'lo registran las emociones'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Somos tiempo'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Fue tiempo de aceptar la interpelación a nuestro lugar de artistas, '},
        {type: '<br>'},
        {type: 'buscar un sentido en el sinsentido'},
        {type: '<br>'},
        {type: 'dar forma al puro estado de proceso'},
        {type: '<br>'},
        {type: 'dar espacio a nuevas prácticas, hilvanando el deseo en lo colectivo y'},
        {type: '<br>'},
        {type: 'arriesgándonos a ser más que la suma de las partes'},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: ''},
        {type: '<br>'},
        {type: 'Somos marca y registro, pregunta y palabra'},
      ]
  });
}
