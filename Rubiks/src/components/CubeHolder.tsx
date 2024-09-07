import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Box from './Box';
import { CubeMapping } from '../utils/CubeUtils';

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

const cubeColors = ['red', 'orange', 'yellow', 'green', 'blue', 'white'];
const CubeHolder = (props: Props) => {
  const [hovered, setHover] = useState(false);
  const meshRef = useRef();
  // if (hovered) {
  //   useFrame((state, delta) => (meshRef.current.rotation.x = ));
  //   useFrame((state, delta) => (meshRef.current.rotation.y = delta));
  // } else {
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  useFrame((state, delta) => (meshRef.current.rotation.y += delta));
  // }

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <group>
        {cubePositions.map((cubit, i) => {
          return (
            <Box key={i} color={CubeMapping[i]} position={cubePositions[i]} />
          );
        })}
      </group>
    </mesh>
  );
};

export default CubeHolder;
