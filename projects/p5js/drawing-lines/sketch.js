/*
 * @name Continous Lines
 * @description Click and drag the mouse to draw a line.
 */
function setup() {
  createCanvas(1000, 1000);
  background(200);
}



function draw() {
  stroke(255, 0, 0);
  strokeWeight(15);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
