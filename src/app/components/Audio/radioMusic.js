import { PositionalAudio } from "@react-three/drei";
import { useEffect, useState } from "react";

const RadioMusic = () => {
  const [audioPosY, setaudioPosY] = useState(1);
  const [pause, setpause] = useState(false);

  useEffect(() => {
    let delta = 0;
    const handleScroll = () => {
      if (
        window.scrollY <
        document.querySelector("#audio").offsetTop -
          document.querySelector("#audio").offsetHeight
      ) {
        setpause(true);
      } else {
        if (
          window.scrollY <
          document.querySelector("#audio").offsetTop -
            document.querySelector("#audio").offsetHeight / 2
        ) {
          delta += 50;
          setaudioPosY(
            document.querySelector("#audio").offsetTop - window.scrollY + delta
          );
        } else {
          delta = 0;
          setaudioPosY(
            document.querySelector("#audio").offsetTop - window.scrollY + 40
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <group position={[-3, audioPosY, 0]}>
      <PositionalAudio
        pause={pause}
        hasPlaybackControl
        autoplay
        loop
        url="/song.mp3"
      />
    </group>
  );
};

export default RadioMusic;
