import React, { useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Edges from './Edges';
import { ColorArray } from '../utils/CubeUtils';

type Props = {
  color: {};
};

//modify Box component to take an object of cube color mappings to dynamically render color as faces are rotated and so that unseen faces
//appear black
const Box = (props: Props) => {
  let color = props.color;
  let faces = [];
  for (let shade in color) {
    faces[shade] =
      color[shade] === null
        ? 'black'
        : ColorArray[color[shade][0]][color[shade][1]];
  }

  return (
    <mesh {...props}>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {faces.map((face, i) => {
        return (
          <meshBasicMaterial key={i} attach={`material-${i}`} color={face} />
        );
      })}
      <Edges color="black" />
    </mesh>
  );
};

export default Box;
