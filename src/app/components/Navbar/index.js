"use client";

import Link from "next/link";

const Navbar = () => {
  const handleClick = (e) => {
    setactiveLink(e.current.value);
  };

  return (
    <>
      <div className="opacity-50 h-20 w-screen z-50 top-0 left-0 bg-gradient-to-b from-black from-5% to-[#00000001] to-95% fixed"></div>
      <div className="w-screen backdrop-blur-[2px] text-neutral-300 p-2 flex-col md:flex-row justify-center items-center top-0 z-50 fixed">
        <nav className="md:ml-auto md:mr-auto flex text-base justify-center items-center mt-2">
          <Link
            href={"/"}
            value="home"
            onClick={handleClick}
            className={`mx-3 cursor-pointer ${
              activeLink === "home" ? "active" : null
            }`}
          >
            Home
          </Link>
          <Link
            href={"/library"}
            value="library"
            onClick={handleClick}
            className={`mx-3 cursor-pointer`}
          >
            Library
          </Link>
          <Link
            href={"/about"}
            value="about"
            onClick={handleClick}
            className={`mx-3 cursor-pointer`}
          >
            About
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
