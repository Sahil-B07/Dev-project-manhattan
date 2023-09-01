import ScrollNavigation from "@/app/Utils/ScrollNavigation";
import { PositionalAudio } from "@react-three/drei";

const RadioMusic = () => {

  const [audioPosY, playPause] = ScrollNavigation()
  console.log(playPause)

  return (
    <group position={[-3, audioPosY, 0]}>
      <PositionalAudio
        pause={playPause}
        hasPlaybackControl
        autoplay
        loop
        url="/song.mp3"
      />
    </group>
  );
};

export default RadioMusic;
