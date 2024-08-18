var s = function( sketch ) {
    var cnv;
    var w;
    var h;
    var xPos;
    var yPos;


    sketch.setup = function() {
        h = sketch.windowHeight;
        w = sketch.windowWidth;


        cnv = sketch.createCanvas(400,400 );
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        //cnv.parent("p5sketch")
        sketch.background(255, 0, 200);
    }


    //Fix Colors
    sketch.draw = function() {
        sketch.background(0);
        sketch.fill(0,0,255,255)
        sketch.circle(xPos,yPos,70);
        sketch.fill(100,0,100,255)
        sketch.rect(0,sketch.height-50,sketch.width,50)
    }


  };
  
  var myp5_1 = new p5(s, 'p5sketch');
  
  
  
  var s2 = function( sketch ) {
    var cnv;
    var w;
    var h;
    var xPos;
    var yPos;
    var xSpeed = 0;
    var ySpeed = 0;
    var xAcc = 0;
    var yAcc = 1;
    const max_speed = 10;


    sketch.setup = function() {
        h = sketch.windowHeight;
        w = sketch.windowWidth;


        cnv = sketch.createCanvas(400,400 );
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        //cnv.parent("p5sketch")
        sketch.background(255, 0, 200);
    }


    //Fix Colors
    sketch.draw = function() {
        sketch.background(0);
        sketch.fill(0,0,255,255)
        sketch.circle(xPos,yPos,70);
        sketch.fill(100,0,100,255)
        sketch.rect(0,sketch.height-50,sketch.width,50)
        sketch.update()
    }

    sketch.update = function() {
        xPos += xSpeed;
        yPos += ySpeed;
        xSpeed += xAcc;
        ySpeed += yAcc;
        if (xSpeed > max_speed) {
            xSpeed = 10;
        }
        if (ySpeed > max_speed) {
            ySpeed = 10;
        }
        
    }
};
  var myp5_2 = new p5(s2, 'p5sketch2');

  var s3 = function( sketch ) {
    var cnv;
    var w;
    var h;
    const rad = 70;
    var xPos;
    var yPos;
    var xSpeed = 0;
    var ySpeed = 0;
    var xAcc = 0;
    var yAcc = 1;
    const rectPosX = 0;
    var rectPosY;
    var rectWidth;
    const rectHeight = 50;
    const max_speed = 10;


    sketch.setup = function() {
        h = sketch.windowHeight;
        w = sketch.windowWidth;


        cnv = sketch.createCanvas(400,400 );
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        rectPosY = sketch.height-50;
        rectWidth = sketch.width;
        //cnv.parent("p5sketch")
        sketch.background(255, 0, 200);
    }


    //Fix Colors
    sketch.draw = function() {
        sketch.background(0);
        sketch.fill(0,0,255,255)
        sketch.circle(xPos,yPos,rad);
        sketch.fill(100,0,100,255)
        sketch.rect(rectPosX,rectPosY,rectWidth,rectHeight)
        sketch.update()
    }

    sketch.checkCollision = function() {
        if (yPos > rectPosY - rad/2) {
            ySpeed = -ySpeed;
            yPos = rectPosY -rad/2
        }
    }

    sketch.update = function() {
        xSpeed += xAcc;
        ySpeed += yAcc;
        xPos += xSpeed;
        yPos += ySpeed;
        sketch.checkCollision()

        // if (xSpeed > max_speed) {
        //     xSpeed = 10;
        // }
        // if (ySpeed > max_speed) {
        //     ySpeed = 10;
        // }
        
    }
};
  var myp5_2 = new p5(s3, 'p5sketch3');