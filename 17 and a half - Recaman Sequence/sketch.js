// Recaman Sequnence
// Austin Nicholson
// Nov 14th
//

// let cX = 0;
let sequence = [];
let stepAmount = 1;
let currentValue = 0;

let largest = 0; let scaleAmount = 0;
let arcList = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(255);
  noFill();
}

function addToSequence(){
  let backwards = currentValue - stepAmount;
  if(backwards > 0 && !sequence.includes(backwards)){
    arcList.push(new rArc(currentValue, backwards, sequence.length%2));

    sequence.push(backwards);
    currentValue = backwards;
    stepAmount++;
  }
 else{
  let forwards = currentValue + stepAmount;

    arcList.push(new rArc(currentValue, forwards, sequence.length%2));
    sequence.push(forwards);
    currentValue = forwards;
    stepAmount++;
    if(currentValue > largest) largest = currentValue;
 }
}

function draw() {
  background(0);
  translate(0,height/2);
  addToSequence();
  scaleAmount = lerp(scaleAmount,width/largest, 0.05);
  scale(scaleAmount);

  renderArcs();
}

function renderArcs(){
  for(let r of arcList){
    r.display();
  }
}

class rArc{
  constructor(start, end, direction){
    this.start = start; this.end = end;
    this.direction = direction;
  }
  display(){
    let diameter = abs(this.start - this.end);
    let x = (this.start + this.end) /2;
    strokeWeight(0.5);
    if(this.direction===0){
      arc(x,0,diameter, diameter, 0, PI);
    }
    else{
      arc(x,0,diameter,diameter,PI,0);
    }
  }
}