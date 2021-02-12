function setup() {
    
    //Sets up the color for the squares and the canvas size.
    createCanvas(400, 400);
    fill('red');
    noStroke();

    // Sets up a loop where the x variable, which will be used for the x position in the squares, itterates til it reaches 4.
    for (var x = 0; x < 4; x++) {

      // Sets up a loop where the y variable, which will be used for the y position in the squares, itterates til it reaches the amount x has.
      for (var y = 0; y <= x; y++) {

        //Creates squares at the bottom hence the 300 - x, and 300 - y and builds them up and out
        rect(300 - x * 52, 300 - y * 52, 50, 50);
      }
    }  
  }