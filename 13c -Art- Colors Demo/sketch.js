// Colors Demo
// Austin Nicholson
// Oct 25th
//
let rectWidth = 50;
let rectHeight = 10;
let colors = ["#FE4365", "#FC9D9A", "#F9CDAD", "#C8C8A9", "#83AF9B"]; //    "#"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1); //RGB
  drawHSB(width*0.4); //HSB
  drawCustom(width*0.7); //CUSTOM
}


function drawRGB(x){
  colorMode(RGB); //Defaults To 255
  for(let y=0; y<height; y+= rectHeight){
    fill(random(0,255), random(0,255), random(0,255));
    rect(x,y, rectWidth, rectHeight);
  }
}

function drawHSB(x){
  colorMode(HSB); //Default to 0-360
  for(let y=0; y<height; y+= rectHeight){
    
    fill(y%360, 360, 360);
    rect(x, y, rectWidth, rectHeight);
  }
}

function drawCustom(x){
  colorMode(RGB);
  let index = 0;
  for(let y=0; y<height; y+= rectHeight){
    fill(colors[index%5]);

    fill(colors[Math.floor(random(colors.length))]);
    index++;
    rect(x,y, rectWidth, rectHeight);
    
  }

}