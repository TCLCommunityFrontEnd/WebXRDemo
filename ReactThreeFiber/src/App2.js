import { Canvas } from '@react-three/fiber'
import { VRButton, XR } from '@react-three/xr'
import {  Environment,  OrbitControls } from '@react-three/drei'

const App = (
    { env = 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/2k/evening_road_01_2k.hdr' }
    ) => (
        <>
        <VRButton />
        <Canvas 
            shadows 
            camera={{ position: [0, 0, 12], fov: 30 }}
            style={{width:window.innerWidth,height:window.innerHeight}}
            >
            <XR>
                <Environment files={env} ground={{ height: 5, radius: 40, scale: 20 }} />
                <OrbitControls autoRotateSpeed={0.85} zoomSpeed={0.75} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 2.55} />
            </XR>
        </Canvas>
        </>
)

export default App