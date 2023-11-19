import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/Island'
import Sky from '../models/Sky'

const Home = () => {
  
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

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  
  return (
    <section className="w-full h-screen relative">

      <Canvas className="w-full h-screen bg-blue" camera = {{ near:0.1 , far: 1000 }}>
        <Suspense fallback  = {<Loader />}>
          <directionalLight position={[1,1,1,]} intensity={2} />         {/* distance lighting eg. SUN  */}
          <ambientLight intensity={0.5}/>                 {/* it illuminates all the objects equally without casting shadows */}
          {/* <pointLight/>            ek point se light nikalti h but hmne phle hi directional and ambient leli h so no need */}
          {/* <spotLight/>                 same as point light ek direction m hogi but in the shape of cone therefore req angle */}
          <hemisphereLight   skyColor="#b1e1ff"  groundColor="#000000" intensity={1} />            {/* illuminates the scene with a gradient  */}
          <Sky />
          <Island 
            position = {islandPosition}
            scale = {islandScale}
            rotation = {islandRotation}
          />
        </Suspense>
      </Canvas>
      
    </section>
  )
}

export default Home
