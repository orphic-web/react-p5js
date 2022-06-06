import SketchModel from '../../models/SketchModel';
import Tags from '../../models/Tags';
import fullScreenSketch from './fullScreenSketch';

const fullScreenSketchConf : SketchModel = {
  id: 'fullScreenSketch',
  sketch: fullScreenSketch,
  showHeader: false,
  title: 'Full screen sketch',
  fullScreen: true,
  tags: [Tags.FULLSCREEN],
};

export default fullScreenSketchConf;
