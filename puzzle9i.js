function draw(direction, n) {
  var count = 0
  while (count < n) {
    direction();
    setColor("red")
    count += 1
  }
}

function steps(direction, n) {
	var count = 0
  while (count < n) {
    direction();
  count += 1
  }
}
    

draw(right,30);
draw(down,10);
draw(left,30);
draw(up,10);

steps(right,35);

draw(right,10);
draw(down,10);
draw(left,10);
draw(up,10);

steps(right,15);

draw(right,2);
draw(down,5);
draw(left,2);
draw(up,5);

steps(right,5);

draw(right,1);
draw(down,1);
draw(left,1);
draw(up,1);
