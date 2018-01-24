function repeat(direction, n) {
  var count = 0
  while (count < n) {
    direction();
    count += 1
  }
}

repeat(down,8);
right();
right();
repeat(up,7);
right();
right();
repeat(down,7);
right();
right();
repeat(up,7);
right();
right();
repeat(down,7);
right();
