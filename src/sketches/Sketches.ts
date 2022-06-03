import ExampleSketchConf from './ExampleSketch/ExampleSketchConf';

type Sketches = {
  id: string,
  title: string,
  sketch?: any,
  sketchArgs?: any,
  isResponsive?: boolean,
  backgroundColor?: string,
  showHeader?: boolean,
  headerColor?: string,
  minDimensions?: {
    width: number,
    height: number,
  }
  thumbnailUrl?: string,

}

const sketches : Sketches[] = [
  {
    title: 'Example Sketch',
    id: 'other-sketch',
  },
  {
    title: 'Example Sketch',
    id: 'other-sketch',
  },
  {
    title: 'Example Sketch',
    id: 'other-sketch',
  },
  ExampleSketchConf,
  ExampleSketchConf,
  ExampleSketchConf,
  ExampleSketchConf,
  ExampleSketchConf,
];

export default sketches;
