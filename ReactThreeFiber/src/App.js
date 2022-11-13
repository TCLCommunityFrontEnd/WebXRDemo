// import { Suspense } from 'react'
import { VRButton, XR, Controllers, Hands } from '@react-three/xr'
// import { Canvas,useLoader } from '@react-three/fiber'
// import { TextureLoader } from 'three/src/loaders/TextureLoader'


// function App() {
//   const imgMap = useLoader(TextureLoader, 'pic2.jpg')
//   return (
//     <>
//       <VRButton />
//       <Canvas 
//         // camera={{position: [0, 0, 100], fov: 45, near: 0.1, far: 1000}} 
//         style={{width:window.innerWidth,height:window.innerHeight}}>
//         <XR>
//           <Controllers />
//           <Hands />
//           <Suspense fallback={null}>
//           <mesh>
//             {/* <sphereGeometry 
//               args={[20,60,40]}
//               // args={[500, 60, 40]} 
//               scale={[1, 1, 1]}
//             /> */}
//              <sphereGeometry args={[1, 32, 32]} />
//             <meshStandardMaterial 
//               map={imgMap} 
//               // color={'blue'}
//             />
//           </mesh>
//           </Suspense>
//         </XR>
//       </Canvas>
//     </>
//   )
// }
import React, { Suspense, useRef } from "react";
import { Canvas, useLoader,useFrame,useThree,extend } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
extend({ OrbitControls });
const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
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
        {/* <Suspense fallback={null}> */}
          <Scene />
        {/* </Suspense> */}
      </XR>
    </Canvas>
    </>
  )
}

export default App;
