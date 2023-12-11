// Farm Game Demo
// Austin Nicholson
// Nov 15th
//



let tiles = [];
let level = [
  [0,1,0,0,0],
  [1,1,0,0,0],
  [0,1,0,0,1],
  [0,1,0,0,1],
  [0,0,1,0,0]

];
const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX = 3, playerY = 4;

function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ".png"));

  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX]=2;
}

function draw() {
  renderBoard();
}

function swap(x1, y1, x2, y2){
  let temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--;
  }
  if(keyCode === DOWN_ARROW){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++;
  }
  if(keyCode === LEFT_ARROW){
    if (level[playerY][playerX - 1] === 0){
      swap(playerX, playerY, playerX - 1, playerY);
      playerX--;
    }
    else if(level[playerY][playerX-1]=== 1){
      if(playerX > 1 && level[playerY][playerX-2] === 0){
        swap(playerX-1,playerY,playerX-2, playerY);
        swap(playerX-1, playerY, playerX, playerY);
        playerX--;
      }
    }
  }
  if(keyCode === RIGHT_ARROW){
    swap(playerX, playerY, playerX + 1, playerY);
    playerY++;
  }
}

function renderBoard(){
  for(let x = 0; x < COLUMNS; x++){
    for(let y = 0; y < ROWS; y++){
      let pos = level[y][x];
      let currentImage = tiles[pos];
      image(currentImage, x*TILE_SIZE, y*TILE_SIZE);
    }
  }
}