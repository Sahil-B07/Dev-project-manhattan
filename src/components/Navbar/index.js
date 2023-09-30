"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import Cookies from "js-cookie";

const Navbar = () => {
  const [activeLink, setactiveLink] = useState("home");
  const pathname = usePathname();
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    setactiveLink(pathname);
    const token = Cookies.get("authToken");
    if (token) {
      setAuthToken(token);
    }
  }, [pathname]);

  const active = "text-neutral-200";

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-20 w-screen bg-gradient-to-b from-black from-5% to-[#00000001] to-95% opacity-50"></div>
      <div className="fixed left-0 top-0 z-50 w-screen flex-col justify-center p-2 text-neutral-700 backdrop-blur-[2px] md:flex-row">
        <nav className="relative mt-2 flex items-center justify-center text-base md:ml-auto md:mr-auto">
          <Link
            href={"/landing"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing" || activeLink === "/" ? active : null
            }`}
          >
            Home
          </Link>
          <Link
            href={"/landing/library"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing/library" ? active : null
            }`}
          >
            Library
          </Link>
          <Link
            href={"/landing/about"}
            className={`mx-3 cursor-pointer ${
              activeLink === "/landing/about" ? active : null
            }`}
          >
            About
          </Link>

          {authToken ? (
            <span>
              <FaUserCircle className="absolute top-0 right-[3rem] scale-[1.7] rounded-full border border-neutral-200 fill-neutral-200 p-[2px] transition-colors duration-500 ease-in-out hover:border-white hover:fill-white" />
            </span>
          ) : (
            <Link href={"/login"}>
              <span className="absolute -top-1 right-[2rem] rounded-md border border-white p-[.3rem] px-2 text-sm font-semibold text-white hover:border-fuchsia-600 hover:bg-fuchsia-600 hover:text-black">
                Get Started
              </span>
            </Link>
          )}
        </nav>
      </div>
    </>
  );
};

export default Navbar;
