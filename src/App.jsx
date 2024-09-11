import { Canvas } from '@react-three/fiber';
import React from 'react';
import "./style.css";
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from "three";
const App = () => {
  // let tex = useTexture("./image");
  // tex.needsUpdate = true;
  return <Canvas>
    <OrbitControls/>
    <ambientLight />
    <mesh>
      <cylinderGeometry args={[2, 2, 2, 30, 30,true]}/>
      <meshStandardMaterial   side={THREE.DoubleSide} />
      {/* <meshBasicMaterial /> */}
      </mesh>
  </Canvas>
}

export default App