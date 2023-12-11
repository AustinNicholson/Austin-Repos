// Objects Demo 2
// Austin Nicholson
// October 13th *TOOT* *TOOT* HAPPY BIRTHDAY DUMBASS
//
let points = [];
let reach = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let p of points){
    p.move();
    p.display();
    p.connectPoints(points);
  }
}

function mouseClicked(){
  points.push(new MovingPoint(mouseX, mouseY));
}

class MovingPoint{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.s = 20;
    this.c = color(random(0, 255), random(0, 255), random(0, 255));
    this.xTime = random(10);
    this.yTime = random(10);
    this. timeShift = 0.01;
    this.maxSpeed = 5;
  }

  display(){
    fill(this.c);
    noStroke();
    let d = dist(mouseX, mouseY, this.x, this.y);
    if(d < reach){
      this.s = map(d, 0, reach, 60, 20);
      this.s = map(d, 0, reach, 60, 20);
    }
    else{
      this.s = 20;
    }
    circle(this.x, this.y, this.s);
  }

  connectPoints(pointArray){
    stroke(this.c);
    for(let p of pointArray){
      if(p !== this){
        let d = dist(this.x, this.y, p.getx(), p.gety());
        if(d < reach){
          line(this.x, this.y, p.getx(), p.gety());
        }

      }

    }
  }
  getx(){return this.x}
  gety(){return this.y}

  move(){
    let xSpeed = noise(this.xTime);
    xSpeed = map(xSpeed,0,1,-this.maxSpeed, this.maxSpeed);
    this.xTime += this.timeShift;
    this.x += xSpeed;

    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
  }
}

