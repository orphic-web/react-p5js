import p5 from 'p5';

const TestSketch = (sketchArgs:any) => (p:any) => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(sketchArgs.width, sketchArgs.height);
    p.strokeWeight(2);
    p.stroke('#393232');
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(220);
    p.ellipse(50, 50, 80, 80);
  };

  // eslint-disable-next-line no-param-reassign
  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

export default TestSketch;
