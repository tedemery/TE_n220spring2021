function setup() {
  createCanvas(400, 300);
}

//Variable to be used in the fill() attribute.
var c = 'blue';

function draw() {
//Sets the color to blue on the left, red on the right
  if (mouseX > 200) {
    c = 'red';
  }
  else {
    c = 'blue'
  }
//Variable in the attribute so the color can change
  fill(c);
//Draws the circle and has it follow the mouse
  circle (mouseX, mouseY, 30);
}

//Clears the canvas whenever the mouse moves to avoid the cluttered stacks
function mouseMoved() {
  clear();
}