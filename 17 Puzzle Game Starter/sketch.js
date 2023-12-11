// Puzzle Starter
// Mr. Nicholson
// Nov 6th
//A game with puzzles


let grid =
[[], [], [], []]; //lets it to be filled with functions

const NUM_ROWS = 4; const NUM_COLS = 5; //sets the number of columuns and rows
let rectWidth = 50; let rectHeight = 50;// makes the heights and widths of the columns and rows
let col, row;



function setup() {
  createCanvas(rectWidth*NUM_COLS, rectHeight*NUM_ROWS);
  randomGrid();
}

function randomGrid(){ //makes the grid random every time the code is refreshed
  for(let i = 0; i < grid.length; i++){
    for(let s = 0; s < 5; s++){
      let number = Math.floor(random(0,2));
      if(number === 0) grid[i].push(number);
      else grid[i].push(255)
    }
  }
}

function draw() {
  col = getCurrentX(); row = getCurrentY(); 
  background(220);
  renderGrid(); //renders the grid
//   if(frameCount%1===0){
//     let rX = floor(random(NUM_COLS));
//     let rY = floor(random(NUM_ROWS));
//     grid[rY][rX] = random(255);
//   }
  // print(mouseX/rectWidth);
  //print(col, row);
  winCondition();
}

function mousePressed(){
  if (keyIsDown(SHIFT)) filp(col, row); //if the shift key is pressed when the mouse is pressed it will only click the one square instead of the surrounding ones aswell, but if shift is not held down then it is treated as normal
  else{
    filp(col, row);
  
    if(row<NUM_ROWS-1) filp(col, row+1); //flips the 
  
    if(row>0) filp(col, row-1);
  
    if(col<NUM_COLS-1) filp(col+1, row);
  
    if(col>0) filp(col-1, row);
  }




}

function winCondition(){
  let first = grid[0][0];

  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let item = grid[y][x];
      print(item);
      if(item !== first){
        return;
      }
    }     
  }
  if (first === 0){
    fill(255);
    }
  else{
    fill(0);
  }
  text("YOU WIN", 50, 25);
}
  

function filp(x,y){
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}


function getCurrentX(){
  let constrainX = constrain(mouseX, 0, width-1);
  return int(constrainX/rectWidth);
}

function getCurrentY(){
  let constrainY = constrain(mouseY, 0, height-1);
  return int(constrainY/rectHeight);
}

function renderGrid(){
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }

}