let stepLength = 2;
let playerPostionX;
let playerPostionY;
let hookPos;
let hookTargetPos;
let hookVelocity;
let worldX;
let worldY;
let island;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerPostionX = width/2;
  playerPostionY = height/2;
  worldX = width/2;
  worldY = height/2;
  hookPos = createVector(playerPostionX, playerPostionY);
  hookTargetPos= createVector(playerPostionX, playerPostionY);
  hookVelocity = createVector(0,0);
}

function draw() {
  background(220);
  controls();
  playerData();
  
  hookData();
}
function hookData(){
  hookPos.add(hookVelocity);
  fill(51,51,51);
  rect(hookPos.x, hookPos.y, 10, 15);
  circle(mouseX, mouseY, 10);

}

function mousePressed(){
  hookTargetPos.x = mouseX;
  hookTargetPos.y = mouseY;
  hookVelocity = p5.Vector.sub(hookTargetPos, hookPos);
  hookVelocity.normalize();
  hookVelocity.mult(3);
}

function playerData(){
  fill(255, 204, 153);
  strokeWeight(2);
  circle(playerPostionX, playerPostionY, 45);
  
}

function controls(){
  if(keyIsDown(65)) worldX += stepLength;
  else if(keyIsDown(68)) worldX -= stepLength;
  else if(keyIsDown(83)) worldY -= stepLength;
  else if(keyIsDown(87)) worldY += stepLength;
  
}