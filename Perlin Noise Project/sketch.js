// Perlin Noise Project
// Austin Nicholson
// October 5th
//

let rectWidth = 10; //Creates the width of the rectangle
let noiseShift = 0.01; //how much the screen moves by
let rectHeightTime = 30; // the time for how long of time the screen is
let noiseShiftMove = 0; //how much the screen moves again


function setup() {
  createCanvas(windowWidth, windowHeight);
   
}


function generateTerrain(){
  let x = 0;
  rectHeightTime = noiseShiftMove; //makes the two things equal

  while (x < width){
    rectMode(CORNERS); //makes the rectangle in the corners instead of just one
    stroke(0);
    fill(0); //makes color and size
    let rectHeight = noise(rectHeightTime); //makes the height the same as the time of the height
    rectHeight = map(rectHeight, 0, 1, 1, windowHeight); //remaps the height
    rectHeightTime += noiseShift; //adds the heights time by how much its changing



    rect(x, height, x + rectWidth, height - rectHeight); //creates every rectangle
    x += rectWidth; // makes x a new rectangle the size of the width


  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW && rectWidth > 1){ //when the left arrow is pressed it zoom out
    rectWidth = rectWidth - 1;
  }
  else if(keyCode === RIGHT_ARROW){ //when the right arrow is pressed it zooms in
    rectWidth = rectWidth + 1;
  }
  background(255);
  generateTerrain(); //recreates the backbround
}


function draw() {
  background(225);
  generateTerrain();
  noiseShiftMove += 0.02; //makes the noise increase each time

}
