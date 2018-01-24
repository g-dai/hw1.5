function getAndSet() {
	var currentColour = getColor();
  down();
  setColor(currentColour);
  right();
  right();
}

down();
down();
down();
down();
right();
getAndSet();
right();
up();
getAndSet();
up();
