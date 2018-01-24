function draw() {
  count = 0
  while (count < 20) {
    setColor("red")
    down();
    count += 1
  }
  right();
  right();
  right();
  right();
  up();
  count = 0
  while (count < 20) {
    setColor("red")
    up();
    count += 1
  }
  right();
  right();
  right();
  right();
}

draw();
draw();
draw();
draw();
draw();
