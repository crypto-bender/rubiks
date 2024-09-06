import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Edges from './Edges';

type Props = {
  color: string;
};

const Box = (props: Props) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      <meshStandardMaterial color={props.color} />
      <Edges color="white" />
    </mesh>
  );
};

export default Box;
