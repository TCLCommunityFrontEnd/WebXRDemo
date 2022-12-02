import { VRButton, XR} from '@react-three/xr'
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader,useFrame,useThree,extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });
const CameraControls = () => {

  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function Scene() {
  const colorMap = useLoader(TextureLoader, 'pic2.jpg')
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh >
        <sphereGeometry 
          attach="geometry"
          args={[50, 60, 40]} 
          scale={[-1, 1, 1]}
        />
        <meshStandardMaterial map={colorMap}/>
      </mesh>
    </>
  )
}
function App() {
  return (
    <>
    <VRButton />
    <Canvas
      camera={{position: [0, 0, 100], fov: 45}}
      style={{width:window.innerWidth,height:window.innerHeight}}
    >
       <XR>
       <CameraControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </XR>
    </Canvas>
    </>
  )
}

export default App;

