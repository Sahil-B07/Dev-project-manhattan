import React, { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows, useAnimations,
} from "@react-three/drei";
import RadioShade from "../../../../public/Shadow";
import Scene from "../Canvas";

const Radio = (props) => {
  return (
    <Scene
      height={"60vh"}
      width={"45vh"}
      color={"white"}
      camPos={[0, 5.3, 13]}
      target={[0, 1.5, 0]}
      fov={20}
      DlightPos={[4, 2, 1]}
      Dintensity={4}
    >
      <RadioModel />
      <ContactShadows opacity={0.6} blur={1} color="#000000" />
    </Scene>
  );
};

const RadioModel = () => {
  let model = RadioShade("/ModelFiles/radio/Radio1.glb");
  let base = RadioShade("/ModelFiles/stand/Stool_wood.glb");

  const modelRef = React.useRef();

  var delta = 0;
  useFrame((state) => {
    delta += 0.0;
    if (modelRef.current) {
      modelRef.current.rotation.y = -delta;
    }
  });

  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]} scale={1.2}>
        {/* Radio */}
        <mesh castShadow>
          <primitive
            object={model.scene}
            scale={1}
            position={[0, 1.62, -0.1]}
            rotation={[0, 0, 0]}
          />
        </mesh>
        <mesh receiveShadow castShadow>
          <primitive
            object={base.scene}
            scale={6}
            position={[0, 0, 0]}
            rotation={[0, 0, 0]}
          />
        </mesh>
      </group>
    </>
  );
};

export default Radio;
