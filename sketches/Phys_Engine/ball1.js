var cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(400, 400);
  cnv.parent("p5Container")
  centerCanvas();
  background(255, 0, 200);
}

function windowResized() {
  centerCanvas();
}
//Fix Colors
function draw() {
    background(0);
    fill(0,0,255,255)
    circle(width/2,height/4,70);
    fill(100,0,100,255)
    rect(0,height-50,width,50)
}