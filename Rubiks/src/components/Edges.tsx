import React from 'react';
import * as THREE from 'three';
import { LineBasicMaterial } from 'three';

type Props = {
  color: string;
};

const Edges = (props: Props) => {
  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const edges = new THREE.EdgesGeometry(geometry);

  return (
    <lineSegments geometry={edges}>
      <lineBasicMaterial attach="material" color={props.color} />
    </lineSegments>
  );
};

export default Edges;
