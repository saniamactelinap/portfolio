import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Cylinder, Torus, Line } from "@react-three/drei";
import * as THREE from "three";

// Central Computer Model
const ComputerModel = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Gentle floating
    groupRef.current.position.y = Math.sin(time * 0.5) * 0.2;
    // Slow rotation
    groupRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Main Computer Body */}
      <Box args={[1.5, 1.2, 0.3]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          emissive="#8b5cf6"
          emissiveIntensity={0.3}
        />
      </Box>

      {/* Screen */}
      <Box args={[1.3, 0.9, 0.05]} position={[0, 0, 0.18]}>
        <meshStandardMaterial
          color="#0f0f1e"
          metalness={0.8}
          roughness={0.2}
          emissive="#a855f7"
          emissiveIntensity={0.8}
        />
      </Box>

      {/* Screen glow */}
      <Box args={[1.1, 0.7, 0.02]} position={[0, 0, 0.21]}>
        <meshStandardMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </Box>

      {/* CPU Core (glowing center) */}
      <Box args={[0.4, 0.4, 0.4]} position={[0, -0.8, 0]}>
        <meshStandardMaterial
          color="#6366f1"
          metalness={0.9}
          roughness={0.1}
          emissive="#6366f1"
          emissiveIntensity={1.5}
        />
      </Box>

      {/* Cooling fans */}
      <Torus args={[0.25, 0.05, 16, 32]} position={[-0.6, 0.3, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </Torus>
      <Torus args={[0.25, 0.05, 16, 32]} position={[0.6, 0.3, 0.2]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
        />
      </Torus>

      {/* Point lights for glow */}
      <pointLight position={[0, 0, 0.5]} intensity={3} color="#d946ef" distance={5} />
      <pointLight position={[0, -0.8, 0]} intensity={2} color="#6366f1" distance={4} />
    </group>
  );
};

// Floating Device Component
const Device = ({ position, type, color }: { position: [number, number, number]; type: string; color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Floating animation with offset based on position
    meshRef.current.position.y = position[1] + Math.sin(time * 0.8 + position[0]) * 0.3;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.1;
  });

  const getDeviceShape = () => {
    switch (type) {
      case "phone":
        return <Box args={[0.3, 0.6, 0.1]} />;
      case "tablet":
        return <Box args={[0.5, 0.7, 0.08]} />;
      case "server":
        return <Box args={[0.6, 0.8, 0.6]} />;
      case "chip":
        return <Box args={[0.4, 0.05, 0.4]} />;
      default:
        return <Box args={[0.4, 0.4, 0.4]} />;
    }
  };

  return (
    <mesh ref={meshRef} position={position}>
      {getDeviceShape()}
      <meshStandardMaterial
        color={color}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.5}
      />
    </mesh>
  );
};

// Animated Circuit Line
const CircuitLine = ({ start, end, color, delay }: { start: [number, number, number]; end: [number, number, number]; color: string; delay: number }) => {
  const pulseRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!pulseRef.current) return;
    const time = state.clock.getElapsedTime();
    
    // Pulse animation along the line
    const t = ((time * 0.5 + delay) % 1);
    pulseRef.current.position.lerpVectors(
      new THREE.Vector3(...start),
      new THREE.Vector3(...end),
      t
    );

    // Pulse scale
    const scale = Math.sin(t * Math.PI) * 0.5 + 0.5;
    pulseRef.current.scale.setScalar(scale * 0.3);
  });

  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);

  return (
    <group>
      {/* Static line */}
      <Line
        points={points}
        color={color}
        lineWidth={2}
        transparent
        opacity={0.6}
      />
      
      {/* Animated pulse sphere */}
      <Sphere ref={pulseRef} args={[0.08, 8, 8]} position={start}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
          transparent
          opacity={0.9}
        />
      </Sphere>
    </group>
  );
};

// Particle system for ambient effect
const CircuitParticles = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 150;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
      
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        positions[i3 + 1] += Math.sin(state.clock.getElapsedTime() + i) * 0.001;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#8b5cf6"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Main Scene Component
export const Scene3D = () => {
  // Device positions around the computer
  const devices = [
    { position: [-3, 1, 0] as [number, number, number], type: "phone", color: "#8b5cf6" },
    { position: [3, 0.5, 0] as [number, number, number], type: "tablet", color: "#a855f7" },
    { position: [-2.5, -1.5, 1] as [number, number, number], type: "server", color: "#6366f1" },
    { position: [2.5, -1, -1] as [number, number, number], type: "chip", color: "#7c3aed" },
    { position: [0, 2.5, -2] as [number, number, number], type: "server", color: "#9333ea" },
    { position: [-1.5, -2, -1.5] as [number, number, number], type: "chip", color: "#a855f7" },
  ];

  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        {/* Ambient lighting */}
        <ambientLight intensity={0.4} />
        
        {/* Directional lights for depth */}
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#8b5cf6" />
        <directionalLight position={[-5, -5, -5]} intensity={0.5} color="#6366f1" />
        
        {/* Spotlight for dramatic effect */}
        <spotLight
          position={[0, 8, 0]}
          angle={0.8}
          penumbra={1}
          intensity={1.5}
          color="#a855f7"
        />

        {/* Central Computer */}
        <ComputerModel />

        {/* Floating Devices */}
        {devices.map((device, index) => (
          <Device
            key={index}
            position={device.position}
            type={device.type}
            color={device.color}
          />
        ))}

        {/* Circuit Lines connecting devices to computer */}
        {devices.map((device, index) => (
          <CircuitLine
            key={`line-${index}`}
            start={[0, 0, 0]}
            end={device.position}
            color={device.color}
            delay={index * 0.2}
          />
        ))}

        {/* Ambient particles */}
        <CircuitParticles />

        {/* Additional atmospheric point lights */}
        <pointLight position={[0, 0, 0]} intensity={2} color="#d946ef" distance={8} />
        <pointLight position={[5, 3, 3]} intensity={1} color="#8b5cf6" distance={6} />
        <pointLight position={[-5, -3, -3]} intensity={1} color="#6366f1" distance={6} />
      </Canvas>
    </div>
  );
};
