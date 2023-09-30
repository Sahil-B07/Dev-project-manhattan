"use client"
import Image from "next/image";
import React from "react";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import AuthFeedback from "@/Utils/AuthFeedback";

const SignUp = () => {
  return (
    <div className="flex min-h-screen justify-center bg-gray-100 text-gray-900 sm:items-center">
      <div className="m-0 flex w-full justify-center bg-white shadow sm:m-5 sm:h-fit sm:w-fit sm:rounded-lg 2xl:w-[85vw]">
        <div className="p-6 sm:p-12 md:w-1/2 xl:w-6/12">
          <div className="flex flex-col items-center justify-center">
            <Image
              alt="ink-logo"
              quality={100}
              width={1}
              height={1}
              sizes="100vw"
              src="/png/logo-green.png"
              className="h-[15vh] w-fit"
            />
            <p className="mt-2 font-Great_Vibes text-4xl font-bold text-black">
              Inkwell Odessey
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-5 w-full flex-1">
              <div className="flex flex-col items-center">
                <button className="focus:shadow-outline flex w-full max-w-sm items-center justify-center rounded-lg bg-green-100 py-2 font-bold text-gray-800 shadow-sm transition-all duration-300 ease-in-out hover:shadow focus:shadow-sm focus:outline-none">
                  <div className="rounded-full bg-white p-2">
                    <FcGoogle className="scale-[1.5]" />
                  </div>
                  <span className="ml-2">Sign Up with Google</span>
                </button>
              </div>

              <div className="my-10 border-b text-center">
                <div className="inline-block translate-y-1/2 transform bg-white px-2 text-sm font-medium leading-none tracking-wide text-gray-600">
                  Or sign Up with Inkwell E-mail
                </div>
              </div>

              <form>
                <div className="mx-auto max-w-xs lg:max-w-sm">
                  <input
                    className="w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="email"
                    placeholder="Email"
                  />
                  <input
                    autoComplete="on"
                    className="mt-5 w-full rounded-lg border border-gray-200 bg-gray-100 px-8 py-3 text-sm font-medium placeholder-gray-500 focus:border-gray-400 focus:bg-white focus:outline-none"
                    type="password"
                    placeholder="Password"
                  />
                  <button
                  onClick={AuthFeedback}
                   className="text-black focus:shadow-outline mt-5 flex w-full items-center justify-center rounded-lg bg-green-400 py-2 font-semibold tracking-wide transition-all duration-300 ease-in-out hover:bg-green-500 focus:outline-none">
                    <PiUserCirclePlusLight className="scale-[1.5]" />
                    <span className="ml-2">Sign Up</span>
                  </button>
                  <p className="mt-6 text-center text-xs text-zinc-600">Already have an account
                    <Link className="text-blue-500" href={'/login'}> Sign-In</Link>
                    </p>
                  <p className="mt-6 text-center text-xs text-gray-600">
                    I agree to abide by Inkwell Odessey's &nbsp;
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Terms of Service
                    </a>
                    &nbsp; and its &nbsp;
                    <a
                      href="#"
                      className="border-b border-dotted border-gray-500"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden flex-1 bg-green-100 justify-center md:flex">
          <div className="w-[40vw] bg-contain bg-center bg-no-repeat">
            <Image
              priority
              alt="login-img"
              src={"/Images/sign-up.svg"}
              width={1}
              height={1}
              className="h-full w-fit object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp