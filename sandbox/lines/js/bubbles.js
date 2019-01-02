var bubbles = [];
var splash = [];
var maxSize = 300;
var numBubbles = 30;

var blends = [];
var blend_index = 0;

function mouseMoved() {
  var range = true;
  if (mouseX < 0 || mouseX > windowWidth) range = false;
  if (mouseY < 0 || mouseY > windowHeight) range = false;
  if (range) {
    splash.push(new Bubble(mouseX, mouseY));
  }
}

function mousePressed() {
  blend_index++;
  if (blend_index >= blends.length) {
    blend_index = 0;
  }
  console.log(blends[blend_index]);
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    blend_index--;
    if (blend_index < 0) {
      blend_index = blends.length - 1;
    }
    console.log(blends[blend_index]);
  } else if (keyCode == RIGHT_ARROW) {
    blend_index++;
    if (blend_index >= blends.length) {
      blend_index = 0;
    }
    console.log(blends[blend_index]);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var Bubble = function(x, y) {
  x = x || random(windowWidth);
  y = y || random(windowHeight / 4, windowHeight + maxSize * 2);
  return {
    x: x,
    y: y,
    size: random(maxSize),
    speed: random(1, 40),
    // color: color(255,255,255, random(10, 130) ),
    color: color(random(255), random(200), random(255), random(50)),
    // color: color(255,255,255, 255),
    // solid : (random(10) > 8 ) ? true : false
    solid: false
  };
};

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("ocean");

  frameRate(15);

  // create bubbles
  for (var i = 0; i < numBubbles; i++) {
    bubbles.push(new Bubble());
  }

  blends = [
    BLEND,
    ADD,
    DARKEST,
    LIGHTEST,
    DIFFERENCE,
    EXCLUSION,
    MULTIPLY,
    SCREEN,
    REPLACE,
    OVERLAY,
    HARD_LIGHT,
    SOFT_LIGHT,
    DODGE,
    BURN
  ];
}

function drawBubbles(_collection, _loop) {
  for (var i = 0; i < _collection.length; i++) {
    var b = _collection[i];
    b.y -= b.speed;
    if (random(50) > 45) b.x -= b.speed;
    if (random(50) > 45) b.x += b.speed;

    if (frameCount % 500 != -1) {
      // b.color = color(random(255),random(255),random(255), random(10, 130) );
    }

    noFill();
    stroke(b.color);
    strokeWeight(12);

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
  blendMode(blends[blend_index]);

  // clear();
  drawBubbles(bubbles, true);
  // drawBubbles(splash, false);
}
