// Constellation Art
// Austin Nicholson
// October 31th

let lastX; //creates varuables for each seprate constellation 
let lastY;
let newX;
let newY;


function setup() {
  createCanvas(2000, 2000);
  background(0); //creates a black background
  drawConstellation(); //calls the drawing of constellation
}

function drawConstellation(){
  for (let i = 0; i < 5; i++){ //it says for it makes a new constellation each time this is rerun
    stroke(random(50, 255), random(50,255), random(50,255)); //makes a random color
    lastX = random(0, width); // makes where the starting point will be
    lastY = random(0, height);
    circle(lastX, lastY, random(1, 10)); // places a dot
  
    strokeWeight(random(5, 10)); //how thick the lines are
    for (let j = 0; j < Math.floor(random(2, 5)); j++){ //how many lines there are
      drawLinesAndDots();
    }
  }                                        
}

function drawLinesAndDots(){ //creates lines and dots
  newX = random(0, width); //finds x value
  newY = random(0, height); //finds y value
  line(lastX, lastY, newX, newY); //uses the old X varuable and Y varuable to make a new constallation or new line
  circle(newX, newY, 10); //new dot
  lastX = newX; //Makes the new x the last x to make it connect
  lastY = newY; //Same as x
}
