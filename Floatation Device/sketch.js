let stepLength= 20;
let playerPostionX;
let playerPostionY;
let worldX;
let worldY;
let island;


function setup() {
  createCanvas(windowWidth, windowHeight);
  playerPostionX = width/2;
  playerPostionY = height/2;
  worldX = width/2;
  worldY = height/2;

  island = loadImage("assets/images.png");
}

function draw() {
  background(220);
  playerData();
  islandCreation();

}

function islandCreation(){
  image(island, worldX-200, worldY, 200, 200);
}

function playerData(){
  fill(255, 204, 153);
  circle(playerPostionX, playerPostionY, 65);
}

function keyPressed(){
  if(keyCode===65) playerPostionX -= stepLength;
  else if(keyCode===68) playerPostionX += stepLength;
  else if(keyCode===83) playerPostionY += stepLength;
  else if(keyCode===87) playerPostionY -= stepLength;
  
}