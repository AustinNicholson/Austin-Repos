// Snake Mechanics
// Austin Nicholson
// 10/11/2023
//
// Practice with Classes and Arrays (Snake)

//Global Variables
let points = []; //snake coords
let speed = 10;
let snakeLength = 100;
let snakeLocation; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  snakeLocation = new Point(width/2, height/2);
  strokeWeight(15);
  initSnake();
}

function initSnake(){
  for (let i = 0; i < snakeLength; i++){
    points.push(createPoint());

  }
}


function createPoint(){

  if(keyCode===UP_ARROW)snakeLocation.y -= speed;
  else if(keyCode===DOWN_ARROW)snakeLocation.y += speed;
  else if(keyCode===LEFT_ARROW)snakeLocation.x -= speed;
  else if(keyCode===RIGHT_ARROW)snakeLocation.x += speed;

  return new Point(snakeLocation.x, snakeLocation.y);
}




function draw() {
  background(220);
  moveandDisplay();
}

function moveandDisplay(){
  for(let i = 0; i < points.length-1; i++){
    let cur = points[i];
    let next = points[i+1];
    let alpha = map(i, 0, points.length-1, 0, 255);
    stroke(0, alpha);

    line(cur.x, cur.y, next.x, next.y);
  }



  points.splice(0,1);
  points.push(createPoint());

}


class Point{
  constructor(x,y){
    this.x = x;
    this.y = y;



  }
}
