import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create random points for "data centers"
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 40; i++) {
      const phi = Math.acos(-1 + (2 * i) / 40);
      const theta = Math.sqrt(40 * Math.PI) * phi;
      p.push(new THREE.Vector3().setFromSphericalCoords(1.05, phi, theta));
    }
    return p;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshStandardMaterial 
          color="#0f172a" 
          wireframe 
          transparent 
          opacity={0.3} 
        />
      </Sphere>
      
      {/* Data Center Points */}
      {points.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#10b981" />
          <pointLight color="#10b981" intensity={0.5} distance={0.5} />
        </mesh>
      ))}

      {/* Arcs/Connections */}
      <group rotation={[0, 0, 0]}>
        {points.slice(0, 10).map((pos, i) => (
          <line key={i}>
            <bufferGeometry attach="geometry">
              <float32BufferAttribute
                attach="attributes-position"
                args={[new Float32Array([0, 0, 0, pos.x, pos.y, pos.z]), 3]}
              />
            </bufferGeometry>
            <lineBasicMaterial attach="material" color="#06b6d4" transparent opacity={0.2} />
          </line>
        ))}
      </group>
    </group>
  );
};

export const InfrastructureGlobe = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Globe />
        </Float>
      </Canvas>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950 via-transparent to-slate-950" />
    </div>
  );
};
