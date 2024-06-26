/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: nimzu (https://sketchfab.com/nimzuk)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907
Title: Fox's islands
*/

import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

import islandScene from '../assets/3d/island.glb';
import { a } from "@react-spring/three";

const Island = ({isRotating, setIsRotating, setCurrentStage,  ...props})=> {
  const islandRef = useRef();

  const { gl, viewport } = useThree();       // to get access to the 3D viewport
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);     // to get the last mouse position
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.95;

  const handlePointerDown = (e) => {
    e.stopPropagation();    //to make mouse click only do the fun that are in this fun and wont' touch any other thing on the screen 
    e.preventDefault();     // to prevent page reload etc.
    setIsRotating(true);

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;  // to know whether it is a phone toush or mouse click
    lastX.current = clientX;

  }
  const handlePointerUp = (e) => {
    e.stopPropagation();    
    e.preventDefault();   
    setIsRotating(false);
  }

  
  const handlePointerMove = (e) => {
    e.stopPropagation();    
    e.preventDefault();    

    const isMouse = e.type.startsWith("mouse");
    if (isRotating && (isMouse || e.touches)) {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const delta = (clientX - lastX.current) / viewport.width;
    // defference b/w last position and current 
  
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;  // as the island is circular
  
      lastX.current = clientX;
  
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft") {
      if (!isRotating) setIsRotating(true);

      rotationSpeed.current = 0.0125;
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if (event.key === "ArrowRight") {
      if (!isRotating) setIsRotating(true);

      rotationSpeed.current = -0.0125;
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  };

  // Handle keyup events
  const handleKeyUp = (event) => {
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      setIsRotating(false);
    }
  };

  // In oreder to put every thing(function) in action we use a hook useFrame
  useFrame(()=>{
    if(!isRotating){
      rotationSpeed.current *= dampingFactor;

      if(Math.abs(rotationSpeed.current) < 0.001)
      rotationSpeed.current =0;

      islandRef.current.rotation.y += rotationSpeed.current;
    }
    else{
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
        ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

      // Set the current stage based on the island's orientation
      switch (true) {
        case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
          setCurrentStage(4);
          break;
        case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
          setCurrentStage(3);
          break;
        case normalizedRotation >= 2.9 && normalizedRotation <= 3.1:
          setCurrentStage(2);
          break;
        case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
          setCurrentStage(1);
          break;
        default:
          setCurrentStage(null);
      }
    }
  })

  useEffect(() => {
    const canvas = gl.domElement;
  
    canvas.addEventListener("touchstart", handlePointerDown);
    canvas.addEventListener("touchend", handlePointerUp);
    canvas.addEventListener("touchmove", handlePointerMove);
  
    canvas.addEventListener("mousedown", handlePointerDown);
    canvas.addEventListener("mouseup", handlePointerUp);
    canvas.addEventListener("mousemove", handlePointerMove);
  
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);
  
    return () => {
      canvas.removeEventListener("touchstart", handlePointerDown);
      canvas.removeEventListener("touchend", handlePointerUp);
      canvas.removeEventListener("touchmove", handlePointerMove);
  
      canvas.removeEventListener("mousedown", handlePointerDown);
      canvas.removeEventListener("mouseup", handlePointerUp);
      canvas.removeEventListener("mousemove", handlePointerMove);
  
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove, handleKeyDown, handleKeyUp]);
  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandRef} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}   
export default Island