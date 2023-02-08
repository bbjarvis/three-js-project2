import CADWindow from './CADWindow'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Model } from './Avatar'

function App() {
  return <CADWindow></CADWindow>
}

export default App
