// Balloon Tree
// Austin Nicholson
// Nov 30th
//


let scale = 15;
let x2, y2;


function setup() {
  createCanvas(500, 500);
  background(255);

}
function draw() {
  randomSeed(50);
  background(255);
  drawTree(width/2, height*0.9, 90, 6);
}
function drawLine( x1, y1, x2, y2, depth) {
//draw a line segment connecting (x1,y1) to (x2,y2)
  strokeWeight(depth*1.2);
  line(x1, y1, x2, y2);

}
function drawLeaf(x2, y2, depth){
  strokeWeight(1);
  fill(random(255), random(255), random(255));
  circle(x2, y2, random(3, 20)*depth);

}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale); //calculate endpoints of current branch
    let y2 = y1 - (sin(radians(angle))*depth*scale); //using trig ratios. Get shorter based on depth
    drawLine(x1, y1, x2, y2, depth);
    if(depth < 5) drawLeaf(x2, y2, depth);
    let offset = map(mouseX, 0, width, 0, 20);
    drawTree(x2, y2, angle-offset, depth-1);
    drawTree(x2, y2, angle+offset, depth-1);
    drawTree(x2, y2, angle, depth-1);
  }
}