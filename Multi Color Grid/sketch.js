// Multi Color Grid
// Austin Nicholson
// October 3rd
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x, y; //Global Varuiables
let gridSpacing = 30;


function setup() {
  createCanvas(windowWidth, windowHeight);
  document.addEventListener("contextmenu", event => event.preventDefault()); //Right Click Disabler
  drawGrid(); //Draws Grid For First Time
}

function drawGrid(){ 
  for (let x = 0; x < width; x = x + gridSpacing){ //Draws Squares in X and Y direction by gridSpacing
    for(let y = 0; y < height; y = y + gridSpacing){
      square(x, y, gridSpacing);
      fill(random(0, 255), random(0,255), random(0, 255)); //Makes Random Square and Random Color
      

    }
  }
}  


function mousePressed() {
  if(mouseButton===LEFT){ //When Left Mouse Clicked Grid Spacing Gets - by 5
    gridSpacing = gridSpacing - 5;
  }

  else if(mouseButton===RIGHT){
    gridSpacing = gridSpacing + 5; //Same as Left Except + 5
  }
  drawGrid(); //Redraws Grid

}



 
function draw() {
  if(keyIsPressed===true){ //When Key Pressed resets Board
    drawGrid();
  }


}
