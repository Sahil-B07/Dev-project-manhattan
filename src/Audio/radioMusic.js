import ScrollNavigation from "@/Utils/ScrollNavigation";
import { PositionalAudio } from "@react-three/drei";
import { useEffect, useRef } from "react";

const RadioMusic = ({radioOnOff}) => {
  const sound = useRef();
  const [audioVol] = ScrollNavigation();

  useEffect(() => {
    sound.current.setVolume(audioVol);
  }, [audioVol]);
  useEffect(() => {
    sound.current.setLoop(true)
    {radioOnOff ? sound.current.play() : sound.current.pause()}
    sound.current.setVolume(0.6);
  
  }, [radioOnOff])
  

  return (
    <group position={[0, 0, 0]}>
      <PositionalAudio ref={sound} url="/song.mp3" />
    </group>
  );
};

export default RadioMusic;
