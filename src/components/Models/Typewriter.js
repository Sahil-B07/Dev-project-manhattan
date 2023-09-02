import React from "react";
import { useFrame } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";

import Scene from "../Canvas";
import TypewriterShade from "../../../public/Shadow";

const Typewriter = ({isMobile}) => {
  return (
    <Scene
      height={"55vh"}
      width={"45vw"}
      smHeight={"30vh"}
      smWidth={"60vw"}
      color={"white"}
      camPos={[6, 5, 6]}
      target={[0, 1.5, 0]}
      fov={55}
      DlightPos={[6, 5, 0]}
      Dintensity={2}
      SpColor={"orange"}
      SpIntensity={50}
      SpLightPos={[2, 10, 0]}
      SpDistance={14}
      ambIntensity={1}
    >
      <TypewriterModel isMobile={isMobile}/>
      <ContactShadows opacity={0.4} blur={1} color="#000000" position={[-0.1,0,0]} far={1} />
    </Scene>
  );
};

const TypewriterModel = ({isMobile}) => {
  let model = TypewriterShade("/ModelFiles/typewriter/Typewriter.glb");


  const modelRef = React.useRef();
  var delta = 0;
  useFrame(() => {
    delta += 0.01;
    if (modelRef.current) {
      modelRef.current.rotation.y = -delta;
    }
  });

  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]}>
        <mesh castShadow>
          <primitive
            object={model.scene}
            scale={isMobile ? 2 : 3}
            position={[0, 1.5, 0]}
            rotation={[0, 0, 0]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Typewriter;
