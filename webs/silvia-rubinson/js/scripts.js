$('.fading-fullscreen-slider').slick({
    'arrows': false,
    'dots': false,
    'fade': true,
    'autoplay': true,
    'autoplaySpeed': 5000,
    'pauseOnFocus': false,
    'pauseOnHover': false,
});

//Equal height for images
let equalRows = new EqualHeightRows('.js-equal-height-row');


//Panzoom

const pannedElements = document.querySelectorAll('.js-panning');

for (let element of pannedElements){
    const panzoom = Panzoom(element,{
        disableZoom: true,
        canvas: true
    });
}