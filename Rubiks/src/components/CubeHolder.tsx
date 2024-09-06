import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Box from './Box';

type Props = {
  box: any;
};

let cubePositions = [];
for (let z = 1; z >= -1; z--) {
  for (let y = -1; y <= 1; y++) {
    for (let x = 1; x >= -1; x--) {
      cubePositions.push([x, y, z]);
    }
  }
}

const CubeHolder = (props: Props) => {
  const meshRef = useRef();
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <Box color="blue" position={[0, 0, 0]} />
    </mesh>
  );
};

export default CubeHolder;
