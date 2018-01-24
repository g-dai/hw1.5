function moveDown() {
  while (getColor() != "red") {
  down();
  }
  right();
}

function moveUp() {
  while (getColor() != "red") {
  up();
  }
  right();
}
 
moveDown();
right();
moveUp();
right();
moveDown();
right();
moveUp();
right();
moveDown();
