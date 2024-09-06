import React, { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';

type Props = {
  box: any;
  cube: any;
};

const CanvasContainer = (props: Props) => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      {props.cube}
    </Canvas>
  );
};

export default CanvasContainer;
