import ScrollNavigation from "@/app/Utils/ScrollNavigation";
import { PositionalAudio } from "@react-three/drei";
import { useEffect, useRef } from "react";

const RadioMusic = () => {
  const sound = useRef();
  const [audioVol] = ScrollNavigation();

  useEffect(() => {
    sound.current.setLoop(true);
    sound.current.play()
    sound.current.setVolume(audioVol);

  }, [audioVol]);

  return (
    <group position={[0, 0, 0]}>
      <PositionalAudio ref={sound} url="/saude.mp3" />
    </group>
  );
};

export default RadioMusic;
