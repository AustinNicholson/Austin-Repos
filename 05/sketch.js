// Objects and Classes Intro
// Austin Nicholson
// Oct 02 2023
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let w = [];
const NUM_WALKERS = 300;


function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < NUM_WALKERS; i++){
    let randColor = color(random(255), random(255), random(255));
    w.push(new Walker(width/2, height/2, randColor));

  }
}

function draw() {
  for(let current of w){
    current.move();
    current.display();
  }
}

class Walker{
  constructor(x,y,c){
    this.x =x; this.y = y; this.c = c;
    this.size = 10; this.speed = 10;
  }
  move(){
    let moveChoice = Math.floor(random(0, 4));
    if(moveChoice===0)this.y -= this.speed;
    else if (moveChoice===1)this.y += this.speed;
    else if (moveChoice===2)this.x -= this.speed;
    else this.x += this.speed;
  }
  

  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }
}



