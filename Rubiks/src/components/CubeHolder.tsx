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

// let cubesObject = {};
// for (let i = 0; i < 27; i++) {
//   cubesObject[i] =
// }
const CubeHolder = (props: Props) => {
  const meshRef = useRef();
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <group>
        {cubePositions.map((cubit, i) => {
          return <Box color="blue" position={cubePositions[i]} />;
        })}
      </group>
    </mesh>
  );
};

export default CubeHolder;
