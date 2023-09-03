import React, { useState } from 'react'
import { motion } from "framer-motion"
import Radio from '../../components/Models/Radio'
import { RiMusic2Fill } from "react-icons/ri";

const AudiobookSection = () => {
    const [radioOnOff, setradioOnOff] = useState(false)
    const handleClick = ()=>{
        setradioOnOff(!radioOnOff)
    }

    return (
        <section className="bg-black h-screen flex" id='audio'>
            <div className="grid w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10">
            <motion.div 
            className='flex md:col-span-3 justify-center items-center self-center relative'
            variants={'feature'}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } }}
                viewport={{once:true}}
            >
                <Radio marginTop={100} radioOnOff={radioOnOff}/>
                <div className="w-[50vw] h-[20vh] bg-transparent absolute lg:hidden">
            </div>
            <div>
            <button className={`rounded place-self-start radio-btn ${!radioOnOff?'animate-bounce fill-gray-400':'fill-gray-500'} w-6 h-6`} onClick={handleClick}><RiMusic2Fill className={`scale-[2] hover:fill-gray-400 ${!radioOnOff?'fill-gray-500':'fill-gray-400'}`}/></button>
            </div>
            </motion.div>
            </div>
        </section>
    )
}

export default AudiobookSection