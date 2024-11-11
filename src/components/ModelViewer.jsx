// src/components/ModelViewer.jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';
function Model() {
  const { scene } = useGLTF('/models/software_developer_0923061045_preview.glb'); // Ensure correct path to the GLB file
  const modelRef = useRef();

  // Rotate the model on the Y-axis slowly
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;  // work
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2.5} />;
}

const ModelViewer = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      <Suspense fallback={null}>
        <Model />
        <OrbitControls enableZoom={false} /> 
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
