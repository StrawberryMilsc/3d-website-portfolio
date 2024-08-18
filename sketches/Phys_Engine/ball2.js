var s = function( sketch ) {
    var cnv;
    var w;
    var h;
    sketch.centerCanvas = function() {
        ogar = w/h
        ar = sketch.windowWidth/sketch.windowHeight
        sketch.resizeCanvas(400*(ar/ogar),400*ar/ogar);
        
        
    }

    sketch.setup = function() {
        h = sketch.windowHeight;
        w = sketch.windowWidth;
    cnv = sketch.createCanvas(400,400 );
    cnv.parent("p5sketch")
    sketch.centerCanvas();
    sketch.background(255, 0, 200);
    }

    sketch.windowResized = function() {
        sketch.centerCanvas();
    }
    //Fix Colors
    sketch.draw = function() {
        sketch.background(0);
        sketch.fill(0,0,255,255)
        sketch.circle(sketch.width/2,sketch.height/4,70);
        sketch.fill(100,0,100,255)
        sketch.rect(0,sketch.height-50,sketch.width,50)
    }
    // var x = 100; 
    // var y = 100;
  
    // sketch.setup = function() {
    //   sketch.createCanvas(200, 200);
    //       sketch.createP("paragraph");
    // };
  
    // sketch.draw = function() {
    //   sketch.background(0);
    //   sketch.fill(255);
    //   sketch.rect(x,y,50,50);
    //       x--;
    // };
  };
  
  var myp5_1 = new p5(s, 'p5sketch');
  
  
  
//   var s2 = function( sketch ) {
  
//     var x = 100; 
//     var y = 100;
  
//     sketch.setup = function() {
//       sketch.createCanvas(200, 200);
//           sketch.createP("paragraph");
//     };
  
//     sketch.draw = function() {
//       sketch.background(0);
//       sketch.fill(0,255,0);
//       sketch.rect(x,y,50,50);
//           x++;
//     };
//   };
  
//   var myp5_2 = new p5(s2, 'p5sketch2');