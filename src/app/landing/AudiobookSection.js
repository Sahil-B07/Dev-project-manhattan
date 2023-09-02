import React from 'react'
import { motion } from "framer-motion"
import Radio from '../../components/Models/Radio'

const AudiobookSection = () => {
    return (
        <section className="bg-black h-screen flex" id='audio'>
            <div className="grid w-full md:grid md:grid-cols-6 p-6 md:p-0 relative z-10">
            <motion.div 
            className='flex md:col-span-3 md:col-ends-5 justify-center items-center self-center relative'
            variants={'feature'}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.8 } }}
                viewport={{once:true}}
            >
                <Radio marginTop={100} />
                <div className="w-[50vw] h-[20vh] bg-transparent absolute lg:hidden">
            </div>
            </motion.div>
            </div>
        </section>
    )
}

export default AudiobookSection