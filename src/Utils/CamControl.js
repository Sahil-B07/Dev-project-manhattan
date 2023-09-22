import { useEffect } from "react";

const CamControl = (modelRef) => {
  useEffect(() => {
    const onMouseMove = event => {
      const { innerWidth, innerHeight } = window;

      const position = {
        x: (event.clientX - innerWidth / 2) / innerWidth ,
        y: (event.clientY - innerHeight / 2) / innerHeight ,
      };

      
      modelRef.current.rotation.x = (position.x / 2);
      modelRef.current.rotation.y = -(position.y / 2);
    };


      window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);
};

export default CamControl;
