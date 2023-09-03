import React, { useState } from "react";
import { motion } from "framer-motion";
import Radio from "../../components/Models/Radio";
// import { RiMusic2Fill } from "react-icons/ri";
import { PiPlay } from "react-icons/pi";

const AudiobookSection = () => {
  const [radioOnOff, setradioOnOff] = useState(false);
  const handleClick = () => {
    setradioOnOff(!radioOnOff);
  };

  return (
    <section className="bg-black h-screen flex" id="audio">
      <div className="grid grid-cols-3 w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10">
        <motion.div
          className="col-span-2 md:col-span-3 justify-center items-center self-center relative"
          variants={"feature"}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1, delay: 0.8 },
          }}
          viewport={{ once: true }}
        >
          <Radio marginTop={100} radioOnOff={radioOnOff} />
          <div className="w-[50vw] h-[20vh] bg-transparent absolute lg:hidden"></div>
        </motion.div>
        <div className="self-center col-span-1">
          <button
            className={`rounded radio-btn ${
              !radioOnOff ? "animate-bounce" : 'animate-pulse'
            }`}
            onClick={handleClick}
          >
            <PiPlay
              className={`scale-[2] hover:fill-pink-600 ${
                !radioOnOff ? "fill-pink-600" : "fill-pink-500"
              }`}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AudiobookSection;
