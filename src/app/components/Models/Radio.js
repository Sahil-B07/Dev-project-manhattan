import React, { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  PositionalAudio,
  useAnimations,
} from "@react-three/drei";
import RadioShade from "../../../../public/Shadow";
import Scene from "../Canvas";
import RadioMusic from "../Audio/radioMusic";

const Radio = () => {
  return (
    <Scene
      height={"60vh"}
      width={"45vh"}
      color={"white"}
      camPos={[0, 5.3, 13]}
      target={[0, 1.7, 0]}
      fov={25}
      DlightPos={[6, 5, 0]}
      Dintensity={2}
      SpColor={"orange"}
      SpIntensity={50}
      SpLightPos={[1, 4, 2.5]}
      SpDistance={14}
      ambIntensity={2.5}
    >
      <RadioModel />
      <ContactShadows opacity={0.6} blur={1} color="#000000" />
    </Scene>
  );
};

const RadioModel = () => {
  let model = RadioShade("/ModelFiles/radio/Radio2.glb");
  let base = RadioShade("/ModelFiles/stand/Stool_wood.glb");

  const modelRef = React.useRef();
  const { actions, names } = useAnimations(model.animations, modelRef);

  var delta = 0;
  useFrame(() => {
    delta += 0.00;
    if (modelRef.current) {
      modelRef.current.rotation.y = delta;
    }
    
    // handle radio animation
    actions[names[0]].play();
  });


  return (
    <>
      <group ref={modelRef} position={[0, 0, 0]} scale={1.2}>
        {/* Radio */}
        <mesh castShadow>
          <RadioMusic/>
        <group>
        </group>
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
