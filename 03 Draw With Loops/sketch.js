// Drawing Loops
// Austin Nicholson
// September 25th
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let numSegments = 255;
let segmentHeight;
const GRID_SPACING = 30;

function setup() {
  createCanvas(windowWidth, windowHeight);
  segmentHeight = height/numSegments;
}

function draw() {
  //noLoop();
  gradient();
  drawGrid();
}

function drawGrid(){
  for (let x = 0; x < width; x = x + GRID_SPACING){
    for(let y = 0; y < height; y = y + GRID_SPACING){
      //fill(0);
      //circle(x,y,10);

      noCursor();
      line(mouseX, mouseY, x, y);

      if(dist(x,y,mouseX, mouseY) < 50) {
        fill(255,0,0);
      }
      else {
        fill(0);
      }

    }
  }

}

function gradient(){
  noStroke();
  for(let i = 0; i < numSegments; i++){
    let y = i * segmentHeight;
    let fillValue = map(y,0,height,0,255);
    fill(fillValue, 25, 0);
    rect(0,y,width, segmentHeight);
  }
stroke(0);
}

