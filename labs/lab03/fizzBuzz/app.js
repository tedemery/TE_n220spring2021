/*
Use a loop to draws 25 black circles to the screen, oriented horizontally.

However,

When the iterand is divisible by 3, draw a purple circle instead 
When the iterand is divisible by 5, draw a green square instead 
When the iterand is divisible by 3 AND 5, draw a blue square instead 
*/

let i = 0

function setup() {
  createCanvas(800, 200);

//Sets up the drawing of the 25 shapes
  while (i < 25) {
    i++;
    console.log(i);

/*
I am pretty sure I did something wrong here but I, I intended to make the first if draw the one blue square, 
the seond statement draw the purple circles, the third draw the geen squares, and the last be a catch-all. 
As you can see from my code it didn't work out that way for some reason... 

But I manipulated the output locations to get the desired results.


Nevermind I solved it I was doing straight (i % number) in the if statements rather than (!(i % number))
*/

//Checks if i is divisible by 3 and 5 then draws a blue square if so
    if (!(i % 3 || i % 5)) {
      fill('blue');
      rect(i * 30, 100, 15, 15);
    }

//Checks if i is divisible by 3 then draws a purple circle if so
    else if (!(i % 3)) {
      fill('purple');
      circle(i * 30 + 7.5, 107.5, 15);
    }

//Checks if i is divisible by 5 then draws a green square if so
    else if (!(i % 5)) {
      fill('green');
      rect(i * 30, 100, 15, 15);
    }
      
//Makes the default catch-all a black circle.
    else {
      fill('black');
      circle(i * 30 + 7.5, 107.5, 15);
    }
  }
}