var s = function( sketch ) {
    var cnv;
    var w;
    var h;
    var xPos;
    var yPos;
    var scaleF;
    sketch.windowResized = function() { 
        w_n = window.innerWidth
        sketch.resizeCanvas(w_n/2.5,w_n/2.5)
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        sketch.drawElements()
    }

    sketch.setup = function() {
        h = window.innerHeight;
        w = window.innerWidth;
        
        sketch.cnv = sketch.createCanvas((w/2.5),w/2.5 );
        scaleF = 200/w
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        //sketch.cnv.parent("p5sketch")
    }

    sketch.drawElements = function() {
        sketch.background(0);
        
        if (window.innerWidth > 900) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,70);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-50,sketch.width,50)
        } else if (window.innerWidth > 500) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,50)
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-30,sketch.width,50)
        }   
        else {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,30);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-10,sketch.width,50)
        }
        
        
    }


    //Fix Colors
    sketch.draw = function() {
        sketch.drawElements();
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
    const max_speed = 20;
    let butt;
    sketch.windowResized = function() { 
        w_n = window.innerWidth
        sketch.resizeCanvas(w_n/2.5,w_n/2.5)
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        sketch.drawElements()
    }
    sketch.setup = function() {
        h = window.innerHeight;
        w = window.innerWidth;
        
        sketch.cnv = sketch.createCanvas((w/2.5),w/2.5 );
        scaleF = 200/w
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        //cnv.parent("p5sketch2")
        sketch.background(255, 0, 200);
    }
    sketch.drawElements = function() {
        sketch.background(0);
        
        if (window.innerWidth > 900) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,70);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-50,sketch.width,50)
        } else if (window.innerWidth > 500) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,50)
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-30,sketch.width,50)
        }   
        else {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,30);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-10,sketch.width,50)
        }
        
        
    }

    //Fix Colors
    sketch.draw = function() {
        sketch.drawElements()
        sketch.update()
    }
    sketch.reset = function() {
        xSpeed = 0;
        ySpeed = 0;
        xPos = sketch.width/2;
        yPos = sketch.height/4;

    }
    sketch.update = function() {
        xSpeed += xAcc;
        ySpeed += yAcc;
        xPos += xSpeed;
        yPos += ySpeed;

        if (xSpeed > max_speed) {
            xSpeed = 20;
        }
        if (ySpeed > max_speed) {
            ySpeed = 20;
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

    sketch.windowResized = function() { 
        w_n = window.innerWidth
        sketch.resizeCanvas(w_n/2.5,w_n/2.5)
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        sketch.drawElements()
    }
    sketch.setup = function() {
        h = window.innerHeight;
        w = window.innerWidth;
        
        sketch.cnv = sketch.createCanvas((w/2.5),w/2.5 );
        scaleF = 200/w
        xPos = sketch.width/2;
        yPos = sketch.height/4;
        rectPosY = sketch.height-50;
        rectWidth = sketch.width;
        //cnv.parent("p5sketch")
        sketch.background(255, 0, 200);
    }
    sketch.drawElements = function() {
        sketch.background(0);
        
        if (window.innerWidth > 900) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,70);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-50,sketch.width,50)
        } else if (window.innerWidth > 500) {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,50)
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-30,sketch.width,50)
        }   
        else {
            sketch.fill(0,0,255,255)
            sketch.circle(xPos,yPos,30);
            sketch.fill(100,0,100,255)
            sketch.rect(0,sketch.height-10,sketch.width,50)
        }
        
        
    }

    //Fix Colors
    sketch.draw = function() {
        sketch.drawElements()
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
  var myp5_3 = new p5(s3, 'p5sketch3');