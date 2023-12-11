// Vector Basics
// Austin Nicholson
// Nov 1st, 2023
//
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  movers.push(new Mover(mouseX, mouseY));
  background(220);
  for( let i=0; i < movers.length; i++){
    
    m.move();
    m.display();

  }
}

function mousePressed(){
  movers.push(new Mover(mouseX, mouseY));
}

class Mover{
  constructor(x, y){
    this.pos = createVector(x,y);
    this.c = color(50, 50, random(150, 255), 150);
    this.vel = createVector(random (-3, 3), random(-2, -5));
    this.gravity = createVector(0, 0.1);
    this.alive = true;
    this.lifetime = random(60, 120);

  }

  move(){
    this.vel.add(this.gravity);
    this.pos.add(this.vel);
    this.lifetime--;
    if(this.lifetime>0)this.alive = false;

  }
  display(){
    fill(this.c);
    noStroke();
    push();
    translate(this.x, this.y);
    circle(this.pos.x, this.pos.y, 20);
    pop();
  }

}