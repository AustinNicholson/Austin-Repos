// 3D Basics + CSS centering
// Mr. Nicholson
// November 23rd
//

let angle = 5;

function setup() {
  createCanvas(400, 400, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  rotateY(frameCount);
  angle = map(mouseX,0,width,-120,120);
  for(let i =0; i < 360; i += 0.25){
    push();
    rotateY(i);
    boxes(30);
    pop();
  }



}

function boxes(size){
  if(size > 3){
    rotateZ(angle);
    translate(size*1.5, 0);
    box(size);

    boxes(size*0.8);

  }
}