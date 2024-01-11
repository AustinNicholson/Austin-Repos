// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  pirateNorth();
  pirateSouth();
}



function pirateNorth(){
  fill(102, 51, 0);
  rect(200, 200, 150, 150);
  fill(51, 51, 51);
  rect(250, 300, 50, 100);
  fill(255, 204, 153);
  circle(275, 260, 45);
}

function pirateSouth(){
  fill(102, 51, 0);
  rect(600, 200, 150, 150);
  fill(51, 51, 51);
  rect(650, 150, 50, 100);
  fill(255, 204, 153);
  circle(675, 280, 45);
}

function gameOver()


