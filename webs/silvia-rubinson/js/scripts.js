$('.fading-fullscreen-slider').slick({
    'arrows': false,
    'dots': false,
    'fade': true,
    'autoplay': true,
    'autoplaySpeed': 2000,
    'pauseOnFocus': false,
    'pauseOnHover': false,
});

  //Panzoom
  let panzooms = document.querySelectorAll('.js-pan-zoom');
    for(let element of panzooms){
        if(element){
            console.log(element);
            const panzoom = Panzoom(element, {
              animate:true,
              duration: 200,
              easing: 'ease-in-out',
              maxScale: 1,
              minScale: 0.125,
              startScale: 0.5,
              startX: -1,


            });
            const parent = element.parentElement;
            parent.addEventListener('wheel', panzoom.zoomWithWheel);
        }
    }
