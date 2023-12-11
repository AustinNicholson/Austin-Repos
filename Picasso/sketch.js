// Picasso
// Austin Nicholson
// Oct 26th
//
let lastX;
let lastY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawLines();
  
}

function draw() {
}

function drawLines(){
  let lastY = height;
  let lastX = randomGaussian(width/2, width/4);
  for(let i = 0; i < 99; i++){
    let newY = lastY - 5*i;
    let newX = randomGaussian(width/2, width/8);
    if(newY <= 0){
      newY = height;
    }
    line(lastX, lastY, newX, newY);
    lastY = newY;
    lastX = newX;
    
  }
}
