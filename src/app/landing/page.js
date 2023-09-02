"use client"

import Navbar from "../../components/Navbar/page"
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

