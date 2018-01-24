//Run each program separately

//I: 4 rectangles

/*function draw(direction, n) {
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
draw(up,1);*/

//II: rect function
/*function rect(x, y, width, height) {
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

rect(10, 10, 15, 15);*/

//III: rect filled in
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
  xcount = 0
  ycount = 0
  while (xcount < width) {
    right();
    setColor("red");
  }
}
