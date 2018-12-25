var bubbles = [];
var splash = [];
var maxSize = 15;
var numBubbles = 50;

function mouseMoved() {
  var range = true;
  if (mouseX < 0 || mouseX > windowWidth) range = false;
  if (mouseY < 0 || mouseY > windowHeight) range = false;
  if (range) {
    splash.push(new Bubble(mouseX, mouseY));
  }
}

function windowResized() {
  resizeCanvas(windowWidth, 250);
}

var Bubble = function(x, y) {
  x = x || random(windowWidth);
  y = y || random(windowHeight / 4, windowHeight + maxSize * 2);
  return {
    x: x,
    y: y,
    size: random(maxSize),
    speed: random(1, 5),
    color: color(255, 255, 255, random(10, 130)),
    solid: random(10) > 8 ? true : false
  };
};

function setup() {
  var canvas = createCanvas(windowWidth, 250);
  canvas.parent("ocean");

  frameRate(15);

  // create bubbles
  for (var i = 0; i < numBubbles; i++) {
    bubbles.push(new Bubble());
  }
}

function drawBubbles(_collection, _loop) {
  for (var i = 0; i < _collection.length; i++) {
    var b = _collection[i];
    b.y -= b.speed;
    if (random(50) > 40) b.x -= b.speed;
    if (random(50) > 45) b.x += b.speed;

    noFill();
    stroke(b.color);

    if (b.solid) {
      fill(b.color);
      noStroke();
    }

    ellipse(b.x, b.y, b.size, b.size);

    if (b.y < 0) {
      if (_loop) {
        _collection[i] = new Bubble();
      } else {
        _collection.splice(i, 1); // remove it from the collection.
      }
    }
  }
}

function draw() {
  clear();
  drawBubbles(bubbles, true);
  drawBubbles(splash, false);
}
