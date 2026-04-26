"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Float, Text, ContactShadows, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial color="#ffffff" wireframe />
        </mesh>
      </Float>

      <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 1, -2]}>
          <torusGeometry args={[0.8, 0.2, 16, 100]} />
          <meshStandardMaterial color="#8b5cf6" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
        <mesh position={[3, -1, -1]}>
          <icosahedronGeometry args={[1, 0]} />
          <meshStandardMaterial color="#3b82f6" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      <Text
        position={[0, -2.5, 0]}
        fontSize={0.4}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        Interactive Space
      </Text>

      <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={20} blur={2} far={4.5} />
      <Environment preset="city" />
      <OrbitControls makeDefault autoRotate autoRotateSpeed={0.5} enableZoom={true} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function Exhibition() {
  return (
    <div className="w-full h-screen fixed inset-0 bg-black pt-20">
      <div className="absolute top-24 left-6 md:left-12 z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl font-bold text-white mb-2">The Exhibition Room</h1>
          <p className="text-muted-foreground text-sm max-w-xs">
            Drag to rotate. A lightweight React Three Fiber demonstration showcasing 3D integration within Next.js.
          </p>
        </motion.div>
      </div>

      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
