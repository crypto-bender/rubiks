import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import Box from './Box';
import { CubeMapping, generateCubePositions } from '../utils/CubeUtils';

type Props = {
  box: any;
};

const CubeHolder = (props: Props) => {
  const [hovered, setHover] = useState(false);
  const [cubePositions, setCubePositions] = useState(generateCubePositions());
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!hovered) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  const handlePointerOverCube = (e) => {
    setHover(true);
  };

  const handlePointerOutCube = (e) => {
    setHover(false);
  };

  return (
    <mesh
      {...props}
      ref={meshRef}
      onPointerOver={handlePointerOverCube}
      onPointerOut={handlePointerOutCube}
    >
      <group>
        {cubePositions.map((cubit, i) => {
          return (
            <Box
              key={i}
              color={CubeMapping[i]}
              position={cubePositions[i]}
              cubeIn={handlePointerOverCube}
              cubeOut={handlePointerOutCube}
            />
          );
        })}
      </group>
    </mesh>
  );
};

export default CubeHolder;
