import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Edges from './Edges';
import { ColorArray } from '../utils/CubeUtils';

type Props = {
  color: {};
  cubeIn: any;
  cubeOut: any;
};

const Box = (props: Props) => {
  const [highlight, setHighlight] = useState(false);

  let color = props.color;
  let faces = [];
  for (let shade in color) {
    faces[shade] =
      color[shade] === null
        ? 'black'
        : ColorArray[color[shade][0]][color[shade][1]];
  }

  const handlePointerOver = (e) => {
    e.stopPropagation();
    props.cubeIn();
    setHighlight(true);
  };

  const handlePointerOut = (e) => {
    props.cubeOut();
    setHighlight(false);
  };
  return (
    <mesh
      {...props}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {faces.map((face, i) => {
        return (
          <meshBasicMaterial
            key={i}
            attach={`material-${i}`}
            color={highlight ? 'purple' : face}
          />
        );
      })}
    </mesh>
  );
};

export default Box;
