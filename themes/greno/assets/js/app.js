/*
 * Created by the Blank scaffold.
 * Should be removed.
 */

/* $(document).ready(function() {
    
  let mainNav = document.getElementById('js-menu');
  let navBarToggle = document.getElementById('js-navbar-toggle');

  navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
  });

}); */
 $(document).ready(function() {
    
  /* var controller = new ScrollMagic.Controller();
  var scena = new ScrollMagic.Scene({
    triggerElement: '#a1',
    //duration: '90%',
    triggerHook: 0.8,
    reverse: false
  })
  .setClassToggle('#a1','fade-in') // dodaj klase fade-in do el. ID=a1
  .addIndicators({
    name: 'przejscie',
    //indent: 200,
    colorTrigger: 'black',
    colorStart: '#c20d0d',
    colorEnd: 'pink'
  })
  .addTo(controller); */

  $('.art').each(function() {

    console.log(this);
    var controller = new ScrollMagic.Controller();
    var scena = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.8,
   // reverse: false
  })
  .setClassToggle(this,'fade-in') // dodaj klase fade-in do el. ID=a1
  .addIndicators({
    name: 'przejscie',
    //indent: 200,
    colorTrigger: 'black',
    colorStart: '#c20d0d',
    colorEnd: 'pink'
  })
  .addTo(controller); 
  });

});

$('.test').click(function() {
  //włącz/wyłącz klasę
 // $(this).toggleClass('active');

  $('.main-nav').toggleClass('active');
});

$('.main-nav li a').click(function(){
  $('.main-nav').toggleClass('active');
});


