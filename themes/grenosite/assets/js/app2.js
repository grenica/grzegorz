$(document).ready(function() {
    
    var controller = new ScrollMagic.Controller();

    var timeline = new TimelineMax();
    var tween1 = new TweenMax.to("#nagl",.6,{opacity:1, scale: 1});
    //var tween2 = new TweenMax.to("#footer",.5,{opacity:1});
    var tween3 = new TweenMax.to("#lista",.5,{opacity:1});

    // build tween
      // var timeline = new TimelineMax()
      // .to("#nagl",1,{opacity:1, scale: 1})
      // .to("#footer",1,{opacity:1});
     timeline.add(tween2).add(tween1);

    var sitescene = new ScrollMagic.Scene({
      triggerElement: "#test1",
     // triggerElement: "#sec1",
      triggerHook: 0.02,
      duration: 500,
    })
    //.setTween(timeline)
    .setTween(tween1)
    .setPin("#test1")
    // .setTween("#nagl", 1, {opacity: 1 })
    // .on("progress", function (event) {
    //   console.log("Scene progress changed to " + event.progress);
    // })
    .addIndicators({name: "moje menu"})
    .addTo(controller);

    var sitescene2 = new ScrollMagic.Scene({
      triggerElement: "#test1",
     // triggerElement: ".container",
      triggerHook: 0.02,
     // duration: "100%",
    })
    .setTween(tween2)
    .addIndicators({
      name: "moje menu 2",
      indent: 200,
     })
    .addTo(controller);

    //
    var sitescene3 = new ScrollMagic.Scene({
      triggerElement: "#test1",
      //triggerElement: ".container",
      triggerHook: 0.02,
    //  duration: "100%",
    })
    .setTween(tween3)
    .addIndicators({
      // name: "moje menu 3",
       indent: 340,
     })
    .addTo(controller);

    // var scena1 = new ScrollMagic.Scene({
    //   triggerElement: "#sec1",
    //    triggerHook: 0.3,
    //    duration: 600,
    // })
    // .setClassToggle("#a1", "active") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
    // .addTo(controller);
    

    // var scena2 = new ScrollMagic.Scene({
    //   triggerElement: "#sec2",
    //   triggerHook: 0.7,
    //   duration: '100%',
    // })
    // .setClassToggle("#a2", "active") // add class toggle
		// .addIndicators() // add indicators (requires plugin)
		// .addTo(controller);


  //   var scenapin1 = new ScrollMagic.Scene({
  //     triggerElement: '#main',
  //      duration:'50%',
  //      triggerHook: 0,
  //   })
  //   .setPin("#sec_header",{pushFollowers: false })
  //   //.setClassToggle('#sec_header','index') 
  //  // .setClassToggle('#sec_body','index') 
  //   .addIndicators()
  //   .addTo(controller);

    // var scena = new ScrollMagic.Scene({
    //   triggerElement: '#sec_body',
    //   duration: '200',
    //   triggerHook: 0.6,
    //  // reverse: false
    // })
    // .setClassToggle('#sec_body','showme') // dodaj klase fade-in do el. ID=a1
    // .addIndicators({
    //   name: 'przejscie',
    //   // indent: 200,
    //   //  colorTrigger: 'black',
    //   //  colorStart: '#c20d0d',
    //     colorEnd: 'black'
    // })
    // .addTo(controller); 
  
  
  });