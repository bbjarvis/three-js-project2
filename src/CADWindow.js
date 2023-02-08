import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { Model } from './Avatar'
// why are there two windows? one is the window of the browser, the other is the window of the CAD program
// the CAD program is a 3D model of a house, and the user can move around the house and look at it from different angles
// the user can also change the color of the walls, the roof, the floor, etc.
// the user can also change the size of the house
// the user can also change the shape of the house
// the user can also change the location of the house
// the user can also change the orientation of the house
// the user can also change the materials of the house
// the user can also change the lighting of the house
// the user can also change the textures of the house
// the user can also change the furniture of the house
// the user can also change the appliances of the house
// the user can also change the decorations of the house
// the user can also change the landscaping of the house

// why is my CAD window so small? it should be the size of the browser window

const CADWindow = () => {
  const mount = useRef(null) // this is the window of the browser

  const [scene, setScene] = useState(null) // this is the window of the CAD program

  const [camera, setCamera] = useState(null) // this is the camera of the CAD program

  const [renderer, setRenderer] = useState(null) // this is the renderer of the CAD program

  const [cube, setCube] = useState(null) // this is the cube of the CAD program
  // the cube is the 3D model of the house

  useEffect(() => {
    let width = mount.current.clientWidth // this is the width of the browser window
    let height = mount.current.clientHeight // this is the height of the browser window
    let scene = new THREE.Scene() // this is the scene of the CAD program
    let camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000) // this is the camera of the CAD program
    let renderer = new THREE.WebGLRenderer() // this is the renderer of the CAD program
    renderer.setSize(width, height) // this is the size of the CAD program window
    mount.current.appendChild(renderer.domElement)
    let geometry = new THREE.BoxGeometry(1, 1, 1)
    let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    let cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    camera.position.z = 5
    const renderScene = () => {
      requestAnimationFrame(renderScene)
      cube.rotation.x += 0.01
      cube.rotation.y += 0.01
      renderer.render(scene, camera)
    }
    renderScene()
    setScene(scene)
    setCamera(camera)
    setRenderer(renderer)
    setCube(cube)
    // console.log('scene', scene)
  }, [])

  return (
    <div
      style={{
        width: mount.current.clientWidth,
        height: mount.current.clientHeight,
      }} // this is the size of the browser window
      ref={mount} // this is the window of the browser
    ></div>
  )
}

export default CADWindow
