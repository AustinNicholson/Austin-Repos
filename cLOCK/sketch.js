// cLOCK
// Austin Nicholson 
// October 223rd
//



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawClock();

}

function drawClock(){
  strokeWeight(3);
  circle(width/2, height/2, 500);
  line(width/2,height/2-180, width/2, height/2-230);
  for(let i = 0; i < 12; i++){
    translate(width/2, height/2);
    strokeWeight(5);
    rotate(radians(30));
    line(width/2,height/2, width/2, height/2);
    
  }
}
