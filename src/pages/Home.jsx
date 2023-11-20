import { useState , Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'
import Plane from '../models/Plane'
import Bird from '../models/Bird'

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = ()=>{
      let screenScale = null;
      let screenPosition = [0, -6.5, -43];
      let rotation = [0.1, 4.7, 0];

      if(window.innerWidth<768){
        screenScale = [0.9, 0.9, 0.9];
      }else{
        screenScale = [1, 1, 1];
      }

      return [screenScale, screenPosition, rotation];
    }

    const adjustPlaneForScreenSize = ()=>{
      let screenScale, screenPosition;

      if(window.innerWidth<768){
        screenScale = [1.5, 1.5, 1.5];
        screenPosition = [0, -1.5,0];
      }else{
        screenScale = [1, 1, 1];
        screenPosition = [0, -4,-4];
      }

      return [screenScale, screenPosition];
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    const [planeScale, planePosition] = adjustPlaneForScreenSize();

  return (
    <section className="w-full h-screen relative">

      <Canvas className={`w-full h-screen bg-blue ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`} camera = {{ near:0.1 , far: 1000 }}>
        <Suspense fallback  = {<Loader />}>
          <directionalLight position={[1,1,1,]} intensity={2} />         {/* distance lighting eg. SUN  */}
          <ambientLight intensity={0.5}/>                 {/* it illuminates all the objects equally without casting shadows */}
          {/* <pointLight/>            ek point se light nikalti h but hmne phle hi directional and ambient leli h so no need */}
          {/* <spotLight/>                 same as point light ek direction m hogi but in the shape of cone therefore req angle */}
          <hemisphereLight   skyColor="#b1e1ff"  groundColor="#000000" intensity={1} />            {/* illuminates the scene with a gradient  */}
          <Bird
          isRotating = {isRotating}
          />
          <Sky 
            isRotating = {isRotating}
          />
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
            isRotating ={isRotating}
            setIsRotating = {setIsRotating}
            setCurrentStage = {setCurrentStage}
          />
          <Plane
          planePosition = {planePosition}
          planeScale = {planeScale}
          rotation = {[0, 20, 0]}
          isRotating = {isRotating}
          />
        </Suspense>
      </Canvas>
      
    </section>
  )
}

export default Home
