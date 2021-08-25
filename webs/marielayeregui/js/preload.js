console.log('preload.js');
window.onload = preload();

var overlay;
var target;

function preload(){

  //Max-width 100vh en body, overflow hidden
  target = document.querySelector('.js-preloader-target');
  target.style.maxWidth = '100vh';
  target.style.overflow = 'hidden';
  overlay = document.querySelector('#js-preloader-overlay');

  window.setTimeout(function(){
    overlay.style.opacity = '0';
    overlay.style.pointerEvents = 'none';
    target.style.maxWidth = 'fit-content';
    target.style.overflow = 'auto';

  },2000);

}
