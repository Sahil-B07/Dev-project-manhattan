import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, Preload } from "@react-three/drei";

const Scene = (props) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (e) => {
      setIsMobile(e.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const {
    height,
    width,
    color,
    target,
    camPos,
    DlightPos,
    fov,
    Dintensity,
    children,
    SpColor,
    SpIntensity,
    SpLightPos,
    SpDistance,
    smHeight,
    smWidth
  } = props;

  const canvasStyle = isMobile
    ? { height: smHeight, width: smWidth, overflow: "hidden" }
    : { height: height, width: width, overflow: "hidden" };

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { isMobile: isMobile });
  });

  return (
    <Canvas
      style={canvasStyle}
      shadows
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: false, alpha: true, antialias: true }}
    >
      <PerspectiveCamera
        position={camPos}
        fov={fov}
        far={100}
        near={1}
        makeDefault
      />
        <OrbitControls
          enableZoom={false}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.9}
          target={target}
          makeDefault
        />
      <ambientLight intensity={1} />
      <directionalLight
        color={color}
        position={DlightPos}
        intensity={Dintensity}
        castShadow
      />
      {SpColor ? (
        <spotLight
          color={SpColor}
          intensity={SpIntensity}
          position={SpLightPos}
          distance={SpDistance}
          castShadow
        />
      ) : null}
      {childrenWithProps}
      <Preload all />
    </Canvas>
  );
};

export default Scene;
