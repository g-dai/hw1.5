right();
if (getColor() == "red") {
  var direction = "up"
  up();
  up();
  up();
} else {
  var direction = "down"
  down();
  down();
  down();
}

if (getColor() == "red") {
	left();
} else {
  right();
}

if (direction == "up") {
  up();
} else {
  down();
}
