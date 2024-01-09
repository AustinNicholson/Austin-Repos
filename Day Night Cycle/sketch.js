// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let start = Date.now();
let oceanColors = [];//(51, 153, 255), (255, 153, 102), (0, 51, 204)];


function setup() {

  createCanvas(windowWidth, windowHeight);
  oceanColors.push(color(51, 153, 255));
  oceanColors.push(color(255, 153, 102));
  oceanColors.push(color(0, 51, 204));

}

function draw(){
  dayandNight();
}


function dayandNight(){
  background(oceanColors[0]);


}