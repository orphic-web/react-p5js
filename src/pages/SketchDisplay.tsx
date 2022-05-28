import { Container } from '@mui/material';
import p5 from 'p5';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import sketches from '../sketches/Sketches';

const SketchDisplay: React.FC = () => {
  const { sketchId } = useParams();
  const sketchObj = sketches.find((s) => s.id === sketchId);
  const myRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    let cleanup = () => {};
    if (myRef.current && sketchObj && sketchObj.sketch) {
      // eslint-disable-next-line new-cap
      const myP5 : any = new p5(
        sketchObj.sketch(sketchObj.args),
        myRef.current,
      );
      cleanup = myP5.remove;
    }

    return cleanup;
  }, []);

  return (
    <div className="sketch-display">
      <Container>
        <h1>{`Sketch display: ${sketchId}`}</h1>
        <div style={{
          margin: 'auto',
        }}
        ref={myRef}>
        </div>
      </Container>
    </div>

  );
};

export default SketchDisplay;
