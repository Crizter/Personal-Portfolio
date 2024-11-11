// src/components/ModelViewer.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
function LaptopModel() {
  const { scene } = useGLTF('/models/laptop.glb'); // Ensure correct path to the GLB file
  const modelRef = useRef();

  // Rotate the model on the Y-axis slowly
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; 
    }
  });

  return <primitive ref={modelRef} object={scene} scale={5} />;
}

const LaptopModelViewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <Suspense fallback={null}>
      <LaptopModel/>
        <OrbitControls enableZoom={false} /> 
      </Suspense>
    </Canvas>
  );
};

export default LaptopModelViewer;
