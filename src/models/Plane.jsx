import React from 'react'
import { useGLTF } from '@react-three/drei'

import planeScene from "../assets/3d/plane.glb";
const Plane = ({isRotating, ...props}) => {
    const {scene, animations} = useGLTF(planeScene);
  return (
<mesh {...props}>     {/* ...props means spreaded props we spread them to simply pass them in mesh */}
    <primitive object={scene}/>
</mesh>
  )
}

export default Plane
