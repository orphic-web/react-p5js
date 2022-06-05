# create sketch dir
mkdir src/sketches/$1

# create sketch component
echo "import p5 from 'p5';
const $1 = (sketchArgs:any) => (p:any) => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
  };

  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
  };
};

export default $1;" > src/sketches/$1/$1.ts

# create sketch config file
echo "import $1 from './$1';

export default {
  id: '$1',
  sketch: $1,
  sketchArgs: {
  },
  isResponsive: false,
  showHeader: true,
  title: '$1',
};" > src/sketches/$1/$1Conf.ts
