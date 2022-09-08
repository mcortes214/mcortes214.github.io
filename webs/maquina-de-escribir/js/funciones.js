
const font = new FontFace('typewriter', 'url(/fonts/bohemian.ttf)');
let TW;

font.load().then(() => {
  console.log('font loaded');
  console.log(font);
  TW = new Typewriter({
    element: document.querySelector('#hoja'),
    backgroundImageUrl: 'img/fondo.jpg',
    fontSize: 40,
    color: '#431',
    lineHeightOffset: 20,
    fontFamily: 'typewriter',
  });
});
