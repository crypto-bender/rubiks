import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  color: string;
};

const Box = (props: Props) => {
  const meshRef = useRef();
  useFrame((state, delta) => (meshRef.current.rotation.x += delta));
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const edges = new THREE.EdgesGeometry(geometry);
  const lines = new THREE.LineSegments(
    edges,
    new THREE.LineBasicMaterial({ color: 'black' })
  );

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
      {/* <primitive object={lines} /> */}
      <lineSegments>
        <edgesGeometry attach="geometry">
          <boxGeometry args={[1, 1, 1]} attach="geometry" />
        </edgesGeometry>
        <lineBasicMaterial attach="material" color="white" />
      </lineSegments>
    </mesh>
  );
};

export default Box;
