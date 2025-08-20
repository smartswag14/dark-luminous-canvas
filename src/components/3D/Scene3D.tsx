import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import FloatingCube from './FloatingCube';
import FloatingSphere from './FloatingSphere';

interface Scene3DProps {
  className?: string;
  enableControls?: boolean;
}

const Scene3D = ({ className = '', enableControls = false }: Scene3DProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <FloatingCube position={[-2, 0, 0]} />
        <FloatingSphere position={[2, 0, 0]} />
        
        <Environment preset="night" />
        {enableControls && <OrbitControls enableZoom={false} />}
      </Canvas>
    </div>
  );
};

export default Scene3D;