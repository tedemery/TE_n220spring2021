//Initial itteration variabls
var i = 0

function setup(){
  
  //Setup for the backhround and canvas. 
  createCanvas(420, 420);
  background(200, 200, 200);

  //Makes 40 circles with no interior fill, each larger than the last by 10 pixels with the first having a diameter of 5 pixels.
  while (i < 40) {
    i++;
    noFill();
    circle(210, 210, i * 10 + 5);
  }
}