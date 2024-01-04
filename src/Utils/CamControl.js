import { useEffect } from "react";

const CamControl = (modelRef) => {
  
  useEffect(() => {
    const onMouseMove = event => {
      event.preventDefault();
      const element = document.getElementById("radio_model");
      var rect = element.getBoundingClientRect();
      const position = {
      x : ((event.clientX - rect.left) / window.innerWidth) * 2 - 1,
      y : -((event.clientY - rect.top) / window.innerHeight) * 2 + 1,
      };
      try {
        modelRef.current.rotation.x = position.x / 15;
        modelRef.current.rotation.y = position.y / 15
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
