// Mouse Distance
// Austin Nicholson
// Sept 20
//
// Extra for Experts:
// arrays, maths, functions, scroll wheel, colors

let colorArray = [];
let colorIndex = 0;

function createColors(){
  colorArray.push(color("red"));
  colorArray.push(color("green"));
  colorArray.push(color("blue"));

}

function mouseDistance(x1,x2,y1,y2){
  let a = Math.abs(x1 - x2);
  let b = Math.abs(y1 - y2)
  let c = Math.sqrt(a*a + b*b);
  return c;
}

function drawNodes(){
  fill(colorArray[colorIndex]);
  stroke(colorArray[colorIndex]);
  circle(width/2,height/2, 20);
  circle(mouseX, mouseY, 20);
  line(width/2, height/2, mouseX, mouseY);
  let d = mouseDistance(mouseX, width/2, mouseY, height/2)
  text(round(d,1), width/2, height * 0.6)

}

function mouseWheel(event){
  print(event.delta);
  if(event.delta < 0){
    colorIndex += 1;
    if(colorIndex > colorArray.length-1){
      colorIndex = 0;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  createColors();

}

function draw() {
  background(220);
  drawNodes();
}
