let maxSize = 100;
let Bubble = function(x, y, p) {
  x = x || p.random(p.windowWidth / 2);
  y = y || p.random(p.windowHeight / 4, p.windowHeight + maxSize * 2);
  return {
    x: x,
    y: y,
    size: p.random(maxSize),
    speed: p.random(1, 20),
    // color: p.color(255,255,255, p.random(10, 130) ),
    // color: p.color(p.random(255), p.random(200), p.random(255), p.random(50)),
    color: p.color(255, 255, 255, 255),
    solid: p.random(10) > 8 ? true : false
    // solid: false
  };
};

const cycle = (s, n = 4) => {
  s++;
  if (s >= n) s = 0;
  return s;
};

export default function sketch(p) {
  let ready = false;
  let bubbles = [];
  let splash = [];
  let numBubbles = 10;
  let wind = 0;
  let tick = 0;
  // let blends = [];
  // let blend_index = 0;

  p.mouseMoved = () => {
    if (!ready) return;
    let range = true;
    if (p.mouseX < 0 || p.mouseX > p.windowWidth / 2) range = false;
    if (p.mouseY < 0 || p.mouseY > p.windowHeight) range = false;
    if (range) {
      splash.push(new Bubble(p.mouseX, p.mouseY, p));
    }
  };

  p.mousePressed = () => {
    wind = cycle(wind, 4);
    // blend_index++;
    // if (blend_index >= blends.length) {
    //   blend_index = 0;
    // }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth / 2, p.windowHeight);
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth / 2, p.windowHeight);
    p.frameRate(15);
    // create bubbles
    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(new Bubble(null, null, p));
    }
    ready = true;
    // blends = [
    //   p.BLEND,
    //   p.ADD,
    //   p.DARKEST,
    //   p.LIGHTEST,
    //   p.DIFFERENCE,
    //   p.EXCLUSION,
    //   p.MULTIPLY,
    //   p.SCREEN,
    //   p.REPLACE,
    //   p.OVERLAY,
    //   p.HARD_LIGHT,
    //   p.SOFT_LIGHT,
    //   p.DODGE,
    //   p.BURN
    // ];
  };

  function drawBubbles(_collection, _loop) {
    for (let i = 0; i < _collection.length; i++) {
      let b = _collection[i];
      switch (wind) {
        case 1:
          b.x += b.speed;
          break;
        case 2:
          b.y += b.speed;
          break;
        case 3:
          b.x -= b.speed;
          break;
        default:
          b.y -= b.speed;
      }

      // x axis jitter
      if (wind == 0 || wind == 2) {
        if (p.random(50) > 45) b.x -= b.speed;
        if (p.random(50) > 45) b.x += b.speed;
      } else {
        // y axis jitter
        if (p.random(50) > 45) b.y -= b.speed;
        if (p.random(50) > 45) b.y += b.speed;
      }

      if (tick % 40 == 0) {
        b.color = p.color(
          p.random(255),
          p.random(255),
          p.random(255),
          p.random(10, 130)
        );
      }

      if (Math.random() * 200 > 190) {
        b.color = p.color(255, 255, 255, 255);
      }

      p.noFill();
      p.stroke(b.color);
      p.strokeWeight(b.size / 8);

      if (b.solid) {
        p.fill(b.color);
        p.noStroke();
      }

      p.ellipse(b.x, b.y, b.size, b.size);

      if (b.y < 0) {
        if (_loop) {
          _collection[i] = new Bubble(null, null, p);
        } else {
          _collection.splice(i, 1); // remove it from the collection.
        }
      }
    }
  }

  p.draw = () => {
    // p.blendMode(blends[blend_index]);
    tick++;
    if (tick % 100 == 0) {
      wind = cycle(wind, 4);
    }
    p.clear();
    drawBubbles(bubbles, true);
    drawBubbles(splash, false);
  };
}
