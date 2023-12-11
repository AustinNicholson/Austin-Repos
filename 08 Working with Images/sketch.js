// Working With Images
// Austin Nicholson
// 10/10/2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let lionL, lionR;
let facingLeft = true;
let pinImages = [];
let pinIndex = 0;

function preload(){
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");
  for(let i=0; i<9; i++){
    pinImages.push(loadImage("assets/pin-0"+i+".png"));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {
  background(220);
  drawLion();
  drawPin();
}

function drawPin(){
  image(pinImages[pinIndex], width/2, height/2);
  
  if (frameCount % 2 === 0){
    pinIndex++;
    if (pinIndex > 8) pinIndex = 0;
  }
  


}

function drawLion(){
  if(movedX < 0){
    facingLeft = true;
  }
  else if(movedX > 0){
    facingLeft = false;
  }

  if(facingLeft){
    image(lionL, mouseX, mouseY, 200, 50);
  }
  else{
    image(lionR, mouseX, mouseY, 50, 200);
  }
}
