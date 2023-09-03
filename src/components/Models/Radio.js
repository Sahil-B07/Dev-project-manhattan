import React, { useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  PositionalAudio,
  useAnimations,
} from "@react-three/drei";
import RadioShade from "../../../public/Shadow";
import Scene from "../Canvas";
import RadioMusic from "../../Audio/radioMusic";

const Radio = () => {
  return (
    <Scene
      height={"75vh"}
      width={"45vw"}
      smHeight={"40vh"}
      smWidth={"50vw"}
      color={"white"}
      camPos={[0, 5.3, 13]}
      target={[0, 2, 0]}
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
    delta += 0.003;
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
