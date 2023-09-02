import React from "react";
import { motion } from "framer-motion";
import Typewriter from "../Models/Typewriter";
import { typeWriter } from "@/app/Animation";

const Features = () => {
  return (
    <>
      <section className="bg-black h-screen flex">
      <div className="grid w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10 sm-cols-1">
          <motion.div 
          className="flex md:col-span-3 md:col-ends-5 justify-center items-center self-center relative"
          variants={typeWriter}
          initial={'hidden'}
          whileInView={'visible'}
          viewport={{once:true}}
          >
            <Typewriter />
            <div className="w-[50vw] h-[20vh] bg-transparent absolute lg:hidden">
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Features;

{
  /* <motion.div
  variants={"feature"}
  initial={{ opacity: 0, x: -100 }}
  whileInView={{
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: 0.8 },
  }}
> */
}
