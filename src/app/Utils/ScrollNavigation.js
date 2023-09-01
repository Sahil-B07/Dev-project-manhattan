import React, { useCallback, useEffect, useState } from "react";

export default function ScrollNavigation() {
  const [y, setY] = useState(0);
  const [playPause, setplayPause] = useState(true);
  const [audioPosY, setaudioPosY] = useState(0);

  const handleNavigation = useCallback(() => {
    if (
      window.scrollY <
      document.querySelector("#audio").offsetTop -
        document.querySelector("#audio").offsetHeight
    ) {
      setplayPause(true);
    } 
    else {
        setplayPause(false);
    //   if (y > window.scrollY) {
    //     if (
    //       window.scrollY <
    //       document.querySelector("#audio").offsetTop -
    //         document.querySelector("#audio").offsetHeight / 2
    //     ) {
    //       setaudioPosY(
    //         document.querySelector("#audio").offsetTop - window.scrollY
    //       );
    //     } else {
    //       setaudioPosY(
    //         document.querySelector("#audio").offsetTop -
    //           window.scrollY -
    //           (document.querySelector("#audio").offsetTop - window.scrollY) / 2
    //       );
    //       console.log(
    //         "up",
    //         document.querySelector("#audio").offsetTop -
    //           window.scrollY -
    //           (document.querySelector("#audio").offsetTop - window.scrollY) / 2
    //       );
    //     }
    //   } else if (y < window.scrollY) {
    //     if (
    //       window.scrollY <
    //       document.querySelector("#audio").offsetTop -
    //         document.querySelector("#audio").offsetHeight / 2
    //     ) {
    //       setaudioPosY(
    //         document.querySelector("#audio").offsetTop + window.scrollY
    //       );
    //     } else {
    //       setaudioPosY(
    //         document.querySelector("#audio").offsetTop - window.scrollY
    //       );
    //       console.log(
    //         "down",
    //         document.querySelector("#audio").offsetTop - window.scrollY
    //       );
    //     }
    //   }
    }
    setY(window.scrollY);
  }, [y]);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return [audioPosY, playPause];
}
