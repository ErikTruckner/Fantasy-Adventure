import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import FantasyBook from './modelComponents/FantasyBook'

function App() {
  return (
    <>
      <Canvas camera={{ fov: 75, near: 1, far: 1000, position: [7, 15, 60] }}>
        <color attach='background' args={['black']} />
        <OrbitControls />
        <ambientLight />
        <FantasyBook />
      </Canvas>
    </>
  )
}

export default App
