const fullScreenSketch = (sketchArgs:any) => (p:any) => {
  const protectionZone = 60;
  const colors = ['#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff'];
  let currentColor = '#333333';
  let counter = 1;

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(window.innerWidth, window.innerHeight);
    p.background('#333333');
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    const c = p.color(currentColor);
    c.setAlpha(2);
    p.fill(c);
    p.rect(0, 0, window.innerWidth, window.innerHeight);

    if (counter % 100 === 0) {
      counter = 1;
      currentColor = colors[p.int(p.random(0, colors.length))];
    }

    p.fill('#333333');
    if (
      (p.mouseX > protectionZone && p.mouseX < window.innerWidth - protectionZone)
      && (p.mouseY > protectionZone && p.mouseY < window.innerHeight - protectionZone)
    ) {
      p.ellipse(p.mouseX, p.mouseY, 10, 10);
    }

    counter += 1;
  };
};

export default fullScreenSketch;
