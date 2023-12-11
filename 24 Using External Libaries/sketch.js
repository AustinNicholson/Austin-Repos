// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let scribble;
let rW = 150; let rH = 80;
function setup() {
  createCanvas(windowWidth, windowHeight);
  scribble = new Scribble();
  strokeWeight(10);
}

function draw() {
  background(220);
  rect(width/2, height/2, rW, rH);
  if(collideRectCircle(width/2, height/2, rW, rH, mouseX, mouseY, 120)){
    
  }
  scribble.scribbleEllipse(mouseX, mouseY, 120, 120);
}
