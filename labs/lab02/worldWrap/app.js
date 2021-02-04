function setup() {
  createCanvas(800, 600);
}
//Variable for the position of the circle
let posX = 0;

function draw() {
//Moves the circle 5 pixels right whenever it is not at the edge of the screen and clears previous renderings
  if (posX < 800) {
    posX = posX + 5;
    clear();
  }
//Resets the circle when it reaches the canvas edge
  else {
    posX = 0;
    clear();
  }

  circle (posX, 300, 100);
}