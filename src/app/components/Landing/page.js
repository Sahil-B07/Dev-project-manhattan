"use client"

import Navbar from "../Navbar"
import AudiobookSection from "./AudiobookSection"
import Features from "./Features"
import Hero from "./Hero"


export default function Landing() {
  return (
    <>
      <div className='scroll-smooth'>
        <Navbar/>
        <Hero/>
        <Features/>
        <AudiobookSection/>
      </div>
    </>
  )
}

