//Blanks for the mouseX ann mouseY data. will make a trail of 10
let positionX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
let positionY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background(100);

//Makes so the X and Y data of the mouse position is logged, and pushes out old values from the arrays.
  positionX.push(mouseX);
  positionX.shift();
  positionY.push(mouseY);
  positionY.shift();

  for(let i = 0; i < positionX.length; i++) {

// I added some fancy flair to my trail makes it more transparent further down the trail.
    stroke(0, i * 25)
    fill(255, i * 25)

// Will draw the circle for the last 10 positions of the mouse from both the X and Y positions.
    circle( positionX[i], positionY[i],30);
  }
}