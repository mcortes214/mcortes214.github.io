$('.fading-fullscreen-slider').slick({
    'arrows': false,
    'dots': false,
    'fade': true,
    'autoplay': true,
    'autoplaySpeed': 5000,
    'pauseOnFocus': false,
    'pauseOnHover': false,
});

//height equalizing rows

Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
    console.log('images finished loading');
    resizeImages();
});


function resizeImages(){
    const heightEqualizingRows = document.querySelectorAll('.cft-js-height-equalizing-row');

    for (let row of heightEqualizingRows){
        const images = row.querySelectorAll('img');
        let sumOfWidths = 0;
        for(let image of images){
                image.style.height = '1000px';
                sumOfWidths += image.clientWidth;
        }
        let paddings = 20*(images.length - 1);
        console.log(paddings);
        let shrinkingRatio = (row.clientWidth - paddings) / sumOfWidths;
        for(let image of images){
            image.style.height = image.clientHeight * shrinkingRatio + 'px';
            //El ancho se reescala solo
        }
    }
}
