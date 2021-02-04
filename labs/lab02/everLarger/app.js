function setup() {
  createCanvas(300, 300);
}

//Variable for the diameter of the circle
let diam = 1;

function draw() {

//Grows the circle 1 pixel right whenever it is smaller than 200 pixels
  if (diam < 200) {
    diam = diam + 1;
    clear();
  }
//Resets the circle when it reaches a diameter of 200 pixels
  else {
    diam = 1;
    clear();
  }

  circle (150, 150, diam);
}