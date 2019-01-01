const isMobile = s => s < 630;
const jitter = () => Math.floor((Math.random() * 255) % 255) - 50;

export default function sketch(p) {
  let rotation = 0;
  let tick = 0;
  let thick = 0;
  let delta = 1;
  let pause = false;
  let up = true;

  p.setup = () => {
    // pause = isMobile(p.windowWidth) ? true : false;
    p.createCanvas(p.windowWidth / 4, p.windowHeight / 4, p.WEBGL);
  };

  // p.windowResized = () => {
  //   const w = p.windowWidth
  //   pause = isMobile(w) ? true : false;
  //   p.resizeCanvas(pause ? w : w/2, p.windowHeight);
  // }

  p.myCustomRedrawAccordingToNewPropsHandler = props => {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = function() {
    if (pause) return;

    delta++;
    if (tick >= 255) {
      up = false;
      thick = 127;
    }
    if (tick <= 0) {
      up = true;
    }

    if (up) {
      tick++;
    } else {
      tick--;
    }

    // p.colorMode(p.RGB);
    // p.background('rgba(243, 241, 236, 60)')
    // p.colorMode(p.HSB);
    p.noFill();
    p.stroke(p.color(tick, tick / 2, delta / 3, 140));
    p.strokeWeight(thick++);
    p.push();
    p.rotateY((rotation += 0.00001));
    p.rotateX((rotation += 0.001));
    p.box(0 + delta / 4);
    p.pop();
  };
}
