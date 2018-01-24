function rect(x, y, width, height) {
  var count = 0
  while (count < x) {
		right();
    count += 1
  }
  count = 0
  while (count < y) {
    down();
    count +=1;
  }
  xcount = 0
  ycount = 0
  while (ycount < height) {
    while (xcount < width){
      setColor("red");
      right();
      xcount +=1
    }
    ycount += 1
    xcount = 0
      if (ycount < height){
        down();
        left();
        while (xcount < width){
          setColor("red");
          left();
          xcount += 1
        }
        down();
        right();
        ycount += 1
        xcount = 0
      }
  }
}

rect(2, 2, 5, 3)
