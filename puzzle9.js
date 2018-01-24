function draw(direction) {
  var count = 0
  while (count < 9) {
    direction();
    setColor("red")
    count += 1
  }
}

draw(right);
draw(down);
draw(left);
draw(up);
