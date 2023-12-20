let stepLength = 2;
let playerPostionX;
let playerPostionY;
let hookPos;
let hookTargetPos;
let hookVelocity;
let worldX;
let worldY;
let island;
let casting = 0;

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
  line(playerPostionX,playerPostionY,hookPos.x, hookPos.y);
  playerData();
  hookData();
}
function hookData(){
  let playerPos = createVector(playerPostionX,playerPostionY);
  hookPos.add(hookVelocity);
  fill(51,51,51);
  rect(hookPos.x, hookPos.y, 10, 15);
  fill(153, 0, 0);
  rect(hookPos.x, hookPos.y-15,10,15 );
  fill(51,51,51);
  circle(mouseX, mouseY, 10);
  if(casting===1 && dist(hookPos.x, hookPos.y, hookTargetPos.x, hookTargetPos.y) < 10){
    hookVelocity=createVector(0,0);
    casting = 2;

    hookVelocity = p5.Vector.sub(playerPos, hookPos);
    hookVelocity.normalize();
    hookVelocity.mult(4);

  }
  if(casting===2 && dist(hookPos.x, hookPos.y, playerPos.x, playerPos.y) < 10){
    hookVelocity = createVector(0,0);
    casting = 0;
  }
}

function mousePressed(){
  if(casting===0){
    hookTargetPos.x = mouseX;
    hookTargetPos.y = mouseY;
    hookVelocity = p5.Vector.sub(hookTargetPos, hookPos);
    hookVelocity.normalize();
    hookVelocity.mult(4);
    casting = 1;
  } 
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