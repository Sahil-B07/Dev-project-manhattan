import { useEffect } from "react";

const CamControl = (modelRef) => {
  useEffect(() => {
    const onMouseMove = event => {
      event.preventDefault();
      const { innerWidth, innerHeight } = window;

      const position = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: - (event.clientY / window.innerHeight) * 2 + 1,
      };

      try {
        modelRef.current.rotation.x = (position.x / 2);
        modelRef.current.rotation.y = -(position.y / 2);
      } catch (error) {
        console.log(error)
      }
    };


      window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
};

export default CamControl;
