//Noisy Numbers
// Austin Nicholson
// October 4th
//simple animation
//noisy() and random()
//Global Variables

let SegL = 10;
let bally = 200; let ySpeed; 
let radiusTime = 10; let yspeedTime = 10;
let greyValueTime = 0; let noiseShift = 0.02;



function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15); 
}


function segmentL(){
  strokeWeight(15);
 
 
  let x = 0;

  while (x < width){
    
    //option 1: random()
    let greyValue = random(0,255);
    // option 2: noise()
    greyValue = noise(greyValueTime);
    greyValue = map(greyValue, 0, 1, 0, 255);
    greyValueTime += noiseShift;
    stroke(greyValue);
    line(x, height/2, x + SegL, height/2);
    x += SegL;
    
  }

}

function rectOnLine(){
  //option 1: random()
  let radius = random(2,70);
  //option 2: noise()
  radius = noise(radiusTime);
  radius = map(radius, 0, 1, 2, 70);
  radiusTime +=  noiseShift;


  rectMode(CORNERS);
  strokeWeight(2);
  stroke(0);

  rect(width*0.1,height/2,width*0.5,height*0.25, radius);

}

function moveBall(){
  //option 1: random()
  ySpeed = random(-20, 20);
  //option 2: noise()
  ySpeed = noise(yspeedTime);
  ySpeed = map(ySpeed, 0, 1, -20, 20);
  yspeedTime += noiseShift;

  bally += ySpeed;
  circle(width*0.7, bally, 30);

}

function draw() {
  background(220);
  segmentL();
  rectOnLine();
  moveBall();
}
