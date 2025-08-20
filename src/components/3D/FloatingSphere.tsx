import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const FloatingSphere = ({ position = [0, 0, 0] }: { position?: [number, number, number] }) => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.4;
      meshRef.current.position.y = position[1] + Math.cos(state.clock.elapsedTime * 1.5) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshStandardMaterial color="#06b6d4" transparent opacity={0.7} />
    </mesh>
  );
};

export default FloatingSphere;