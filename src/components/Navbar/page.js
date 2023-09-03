"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'



const Navbar = () => {

  const [activeLink, setactiveLink] = useState('home')
  const pathname = usePathname()

  useEffect(() => {
    setactiveLink(pathname)
    console.log(pathname)
  }, [pathname])
  

  const active = 'text-neutral-200'

  return (
    <>
    <div className="opacity-50 h-20 w-screen z-50 top-0 left-0 bg-gradient-to-b from-black from-5% to-[#00000001] to-95% fixed"></div>
    <div className="w-screen backdrop-blur-[2px] text-neutral-500 p-2 flex-col md:flex-row justify-center items-center top-0 z-50 fixed">

      <nav className="md:ml-auto md:mr-auto flex text-base justify-center items-center mt-2">
        <Link href={'/landing'} className={`mx-3 cursor-pointer ${activeLink==='/landing' || activeLink==='/'?active:null}`}>Home</Link>
        <Link href={'/landing/library'} className={`mx-3 cursor-pointer ${activeLink==='/landing/library'?active:null}`}>Library</Link>
        <Link href={'/landing/about'} className={`mx-3 cursor-pointer ${activeLink==='/landing/about'?active:null}`}>About</Link>
      </nav>
    </div>
    </>
  )
}

export default Navbar
