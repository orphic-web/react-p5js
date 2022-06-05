import Particle from './Particle';

const ExampleSketch = (sketchArgs:any) => (p:any) => {
  let yoff = 0.0;
  const numParticles = 200;
  const particles = [] as Particle[];
  let count = 0;
  let yIncrementSlider: any;
  let trailAlpha: any;

  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(sketchArgs.width, sketchArgs.height);
    p.background(0);
    p.noStroke();

    yIncrementSlider = p.createSlider(0.001, 0.01, 0.008, 0.001);
    yIncrementSlider.position(sketchArgs.width - 150, sketchArgs.height - 100);
    trailAlpha = p.createSlider(0, 100, 30, 1);
    trailAlpha.position(sketchArgs.width - 150, sketchArgs.height - 50);
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.fill(0, trailAlpha.value());
    p.rect(0, 0, sketchArgs.width, sketchArgs.height);

    const n = p.noise(yoff) * sketchArgs.height;

    yoff += yIncrementSlider.value();

    if (count < numParticles) {
      count += 1;
      particles.push(new Particle(
        p,
        {
          x: sketchArgs.width / 1.2,
          y: n,
        },
      ));
    }

    p.fill(200);

    particles.forEach((particle : Particle) => {
      p.ellipse(particle.position.x, particle.position.y, 12, 12);
      if (particle.needsReset) {
        particle.reset(
          {
            x: sketchArgs.width / 1.2,
            y: n,
          },
        );
      } else {
        particle.updatePos();
      }
    });
  };
};

export default ExampleSketch;
