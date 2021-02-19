/* 
Sorry for my vast ARRAY of arrays...
...
Ha...
...
Ha.

All of these arrays I feel are self explanatory. Each generate random values for the x position, y position, diameter, and the color and transparancy for the fill and the stroke on all of these circles.
*/

let x = [Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700), Math.floor(Math.random() * 700),  Math.floor(Math.random() * 700),  Math.floor(Math.random() * 700)];

let y = [Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500), Math.floor(Math.random() * 500),  Math.floor(Math.random() * 500),  Math.floor(Math.random() * 500)];

let strokeR = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let strokeG = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let strokeB = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let strokeTransparency = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let fillR = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let fillG = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let fillB = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255)];

let fillTransparency = [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255),  Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)];

let diam = [Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225), Math.floor(Math.random() * 225)];


function setup() {

// Sets the scene with a nice neutral grey on a suitably sized canvas.
  createCanvas(700, 500);
  background(127.5);

// Runs a loop where each random value is cycled in. I added a floor to the diameter of 10 pixels.
  for(let i = 0; i < x.length; i++) {

    stroke(strokeR[i], strokeG[i], strokeB[i], strokeTransparency[i]);
    fill(fillR[i], fillG[i], fillB[i], fillTransparency[i]);

    circle(x[i], y[i], 10 + diam[i]);
  }
}