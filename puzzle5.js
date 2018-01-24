var numberOfTiles = 0

right();
right();
while (numberOfTiles < 3) {
  numberOfTiles += 1
  if (getColor() == "blue") {
    down();
    right();
    right();
  } else {
    up();
    right();
    right();
  }
}
right();
