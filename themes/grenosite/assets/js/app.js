$(document).ready(function() {
    
    var controller = new ScrollMagic.Controller();
    var tween1 = new TweenMax.to("#header",.6,{opacity:1, scale: 1});
    var tween_info = new TweenMax.to("#info1",1,{opacity:0, scale: .6 });
    var tween_footer = new TweenMax.to("#footer",.5,{opacity:1});
  
    var sitescene = new ScrollMagic.Scene({
      triggerElement: "#info",
      triggerHook: 0.33,
      duration: 200,
    })
    .setTween(tween1)
    // .addIndicators({
    //  name: "#info"
    // })
    .addTo(controller);

    //w #info h1 (#info1)
  var sitescene2 = new ScrollMagic.Scene({
    triggerElement: "#info",
    triggerHook: 0.33,
    duration: 200,
  })
  .setTween(tween_info)
  // .addIndicators({
  //   name: "info1",
  //  indent: 200,
  //  })
  .addTo(controller);

   //stopka
   var sitescene3 = new ScrollMagic.Scene({
    triggerElement: "#info",
    //triggerElement: ".container",
    triggerHook: 0.33,
  //  duration: "100%",
  })
  .setTween(tween_footer)
  // .addIndicators({
  //   name: "moje menu 3",
  //   indent: 340,
  //  })
  .addTo(controller);

  // sekcja2
  var timeline2 = new TimelineMax()
  .to("#h1",.5,{css:{opacity:1, color: "#326a97",transform: "translateX(0)" }})
  //.to("#h1::after",1,{css:{width: "10%"}});

  var sitescene4 = new ScrollMagic.Scene({
    triggerElement: "#h1",
    triggerHook: 0.65,
    //duration:100,
  })
  //.setClassToggle("#h1", "fade")
  .setTween(timeline2)
  // .addIndicators({
  //   name: "h1"
  // })
  .addTo(controller);

  }); //koniec document
  