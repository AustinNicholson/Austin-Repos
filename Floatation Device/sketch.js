let stepLength = 2;
let playerPostionX;
let playerPostionY;
let worldX;
let worldY;
let island;
let newGrid = [];
let grid = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,1,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
];

let raftOriginR = 16;
let NUM_ROWS = 18;
let NUM_COLS = 32;
let squareSize = 60;
let raft;
let gridColoumn;
let gridRow;
let oneKey = false;

function preload(){
  raft = loadImage("assets/33770b1f8b51af8.png");
}


function setup() {
  createCanvas(squareSize*NUM_COLS, squareSize*NUM_ROWS);
  playerPostionX = width/2;
  playerPostionY = height/2;
  worldX = width/2;
  worldY = height/2;

  island = loadImage("assets/images.png");
}

function draw() {
  background(220);

 
  controls();
  gridColoumn = mouseGridX();
  gridRow = mouseGridY();
  print(gridColoumn, gridRow);
  renderGrid();
  raftSelectGreen();
  islandCreation();
  playerData();


}

function handData(){
}

function islandCreation(){
  image(island, worldX-400, worldY, 200, 200);
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

function renderGrid(){
  for(let x = 0;  x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      strokeWeight(0);
      let currentTile = grid[y][x];
      if (currentTile===1){
        image(raft, x*squareSize, y*squareSize, 60, 60);
      }
      else if(currentTile===0 || currentTile===2){
        rect(x*squareSize, y*squareSize, squareSize, squareSize);

      }
    }
  }
}

function mouseGridX(){
  let constraintX = constrain(mouseX, 0, width);
  return int(constraintX/squareSize);
}

function mouseGridY(){
  let constraintY = constrain(mouseY, 0, height);
  return int(constraintY/squareSize);
}

function keyPressed(){
  if(key==="1"){
    if(oneKey===false){
      oneKey = true;
    }
    else{
      oneKey = false;
    }
  }
}

function raftSelectGreen(){
  if(oneKey===true){
    for(let x = 0;  x < NUM_COLS; x++){
      for(let y = 0; y < 1; y++){
        fill(0,100,255);
        if(grid[y][x]===1){//at raft             
          if(grid[y+1][x]===0){
            
            fill(0,255,100,100);
            rect(x*squareSize, (y+1)*squareSize, squareSize, squareSize);         
          } 
          if(grid[y-1][x]===0){
            fill(0,255,100,100);
            rect(x*squareSize, (y-1)*squareSize, squareSize, squareSize);          
          }
          if(grid[y][x+1]===0){
            if(x > raftOriginR+4){
              fill(255,0,0,100);
            }
            else{
            fill(0,255,100,100);}            
            rect((x+1)*squareSize, y*squareSize, squareSize, squareSize);
          }
          if(grid[y][x-1]===0){
            fill(0,255,100,100);
            rect((x-1)*squareSize, y*squareSize, squareSize, squareSize);
          }   
        }
      }
    }
  }
  else if(oneKey===false){
    for(let x = 0;  x < NUM_COLS; x++){
      for(let y = 0; y < NUM_ROWS; y++){
        if (grid[y][x]===0){
          fill(0,100,255);
          rect(x*squareSize, y*squareSize, squareSize, squareSize);
        }
      }
    }  
  }
}

function mousePressed(){
  if(oneKey===true){
    if(grid[gridRow][gridColoumn]===0 && ( grid[gridRow+1][gridColoumn] || grid[gridRow-1][gridColoumn] || grid[gridRow][gridColoumn+1] || grid[gridRow][gridColoumn-1]) ===1){
      grid[gridRow][gridColoumn] = 1;
      image(raft, gridColoumn*squareSize, gridRow*squareSize, 60,60);
    }
  }
}
