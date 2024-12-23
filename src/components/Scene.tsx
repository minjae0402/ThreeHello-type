import {  Html, OrbitControls, Stats, useProgress } from '@react-three/drei';
import { Canvas, useLoader } from '@react-three/fiber';
import React, { Suspense } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center>{progress} % loaded</Html>
}

const Scene: React.FC = () => {
  const gltf = useLoader(GLTFLoader, '/models/untitled.glb')

  return (
    <Suspense fallback={<Loader />}>
      <Canvas camera={{ position: [-0.5, 1, 2] }} shadows>
        <directionalLight
          position={[-1.3, 6.0, 4.4]}
          castShadow
          intensity={Math.PI * 1}
        />
        <primitive
          object={gltf.scene}
          position={[0, 1, 0]}
          children-0-castShadow
        />
        
        <OrbitControls target={[0, 1, 0]} />
        <axesHelper args={[5]} />
        <Stats />
      </Canvas>
    </Suspense>
  );
};

export default Scene;