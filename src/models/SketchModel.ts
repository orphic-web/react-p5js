type SketchModel = {
    id: string,
    title: string,
    sketch?: any,
    sketchArgs?: any,
    backgroundColor?: string,
    showHeader?: boolean,
    headerColor?: string,
    minDimensions?: {
      width: number,
      height: number,
    }
    thumbnailUrl?: string,
    fullScreen?: boolean,
  }

export default SketchModel;
