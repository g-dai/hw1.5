function rect(x, y, width, height) {
  var count = 0
  while (count < x) {
		right();
    count += 1
  }
  count = 0
  while (count < y) {
    down();
    count +=1
  }
	count = 0
  while (count < width) {
    right();
    setColor("red");
    count +=1
  }
  count = 0
  while (count < height) {
    down();
    setColor("red");
    count +=1
  }
  count = 0
  while (count < width) {
    left();
    setColor("red");
    count +=1
  }
  count = 0
  while (count < height) {
    up();
    setColor("red");
    count +=1
  }
}

rect(10, 10, 15, 15);
