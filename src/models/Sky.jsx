import React from 'react'
import { useGLTF } from '@react-three/drei'

import skyScene from "../assets/3d/sky.glb"
const Sky = () => {
    const sky = useGLTF(skyScene);
  return (
    // <div></div>  agr ye hota mesh ki jgah toh island hi gayab ho jata bcz mesh is geometry material
    <mesh>        { /*this uses something known as PRIMITIVE ELEMENT NOTE:- Island is not a primitive element as it is made up of no. of meshes but our sky is primitive that means we can simply consume our 3D model */}
      
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky
