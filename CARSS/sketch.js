// Midnight Motorist (not)
// Austin Nicholson
// Oct 17
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let myCar;
let eastbound = [];
let westbound = {};

function setup() {
  createCanvas(windowWidth, windowHeight);
  myCar = new Vehicle(0, random(height/4, height/2+height/4));

}

function draw() {
  background(230);
  drawRoad();
  myCar.action();

}

function drawRoad(){
  let x = 0;
  rectMode(CENTER);
  fill(25);
  rect(width/2, height/2, width, height*0.55);
  fill(color(225,255, 0));
  noStroke();
  while(x < width){
    rect(x, height/2, 16, height*0.005);
    x += 32;
  }
}



class Vehicle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.type = Math.floor(random(0,2));
    this.c = color(random(0,255), random(0,255), random(0,255));
    this.d = random(0,1);
    this.xSpeed = random(1, 15);
  }

  action(){
    this.display();
    this.move();
    this.speedUp();
    this.speedUp();
    this.changeColor();
  }
  display(){
    if (this.type === 0){
      fill(this.c);
      rect(this.x, this.y, 115, 40);
    }
    else if (this.type === 1){
      fill(this.c);
      rect(this.x, this.y, 70, 40);

    }
    
  }

  move(){ //if the height is over the line then go the oppiste direction 
    this.x += this.xSpeed;
    if(this.x < 0) this.x += width;
    if (this.x > width) this.x -= width;
  }

  speedUp(){
    let up = Math.floor(random(1,100));
    if(up===1){
      if(this.xSpeed>=15){
        this.xSpeed = 15;
      }
      else{
        this.xSpeed++;
      }
    } 
  }
  speedDown(){
    let down = Math.floor(random(1,100));
    if(down===1){
      if(this.xSpeed<=1){
        this.xSpeed = 1;
      }
      else{
        this.xSpeed--;
      }
    } 
  }
  changeColor(){
    let change = Math.floor(random(1,100));
    if(change===1){
      this.c = color(random(0,255), random(0,255), random(0,255));
    }
  }
}

