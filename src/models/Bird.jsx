import { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import birdScene from "../assets/3d/bird.glb"
import { useFrame } from '@react-three/fiber';

const Bird = ( { isRotating } ) => {

    const birdRef = useRef();
    const {scene, animations} = useGLTF(birdScene);
    const { actions } = useAnimations(animations, birdRef);

    useEffect(()=>{
      actions['Take 001'].play();
    },[])

    useFrame(({clock, camera})=>{
      //Update the Y position in Sin Wave form as then it appears to be the motion of a bird
      birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2  //Keeps track of the total time that the clock has been running

      //For making the bird Rotate after going out from camera
    
      // if(birdRef.current.position.x>camera.position.x+10)
      // birdRef.current.rotation.y+=Math.PI;
      // else if(birdRef.current.position.x<camera.position.x-5)
      // birdRef.current.rotation.y=0;

      if(birdRef.current.rotation.y===0)
      {
        birdRef.current.position.x+=0.01;
        birdRef.current.position.z-=0.01;
      }
      else
      {
        birdRef.current.position.x-=0.01;
        birdRef.current.position.z+=0.01;
      }
    })

  return (
<mesh ref={birdRef} position={[-5, 2,1]} scale={[0.003, 0.003, 0.003]}>
    <primitive object={scene}/>
</mesh>
  )
}

export default Bird
