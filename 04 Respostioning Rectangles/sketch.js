// Repostioning Rectangles
// Austin Nicholson
// Sept 27
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom;
let mouseOver = false;
let pickedUp = false;
let xOff, yOff

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2, y=height/2;
  rWidth = 200; rHeight = 100;

}

function updateEdgePostions(){
rLeft = x -  rWidth/2; rRight = x + rWidth/2;
rTop = y - rHeight/2; rBottom = y + rHeight/2;

}


function drawRectangle() {
  updateEdgePostions();
  print(rLeft, rRight, rTop, rBottom);

  if(mouseX > rLeft && mouseX < rRight && mouseY > rTop && mouseY < rBottom){
    mouseOver = true;
    fill(170, 190, 50);
  }
  else{
    mouseOver = false;
    fill(35, 70, 125);

  }
  if(pickedUp){
    x = mouseX + xOff;
    y = mouseY + yOff;
  }

  rect(x,y,rWidth,rHeight); 
}

function mousePressed(){
  if(mouseOver){
    pickedUp = true;
    xOff = x - mouseX;
    yOff = y - mouseY;
  }

}

function mouseReleased(){
  pickedUp = false;
}

function draw() {
  background(220);
  drawRectangle();
}
