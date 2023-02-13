'use client'

import { signIn } from 'next-auth/react'
import Image from 'next/image'
import CadogyLogo from '../public/assets/cadogy-shield.svg'
import loginBg1 from '../public/assets/login_bg_gpt_1.gif'
import loginBg2 from '../public/assets/login_bg_gpt_2.gif'

function Login() {
  return (
    <div className="bg-[white] sm:h-[100%] md:height-screen flex md:flex-row flex-col-reverse items-center justify-around text-center">
      
      {/* LEFT SIDE */}
      <div className="bg-[white] md:max-w-[40%] md:py-2 py-16 -mt-6 px-16 md:px-0 rounded-lg flex flex-col w-screen justify-around md:justify-center items-center">
        {/* LOGO CONTAINER */}
        <div className="flex flex-col justify-center items-center md:mb-12">
          <Image 
            src={CadogyLogo}
            width={200}
            height={200}
            alt="Logo"
          />
          <h1 className="text-black font-bold text-3xl">GPT AI PORTAL</h1>
        </div>

        {/* LOGIN CONTAINER */}
        <div className="flex flex-col-reverse items-center py-6 gap-6 justify-between">
          {/* LEFT - LOGIN PROVIDERS */}
          <div className="px-6 w-[100%]">
            <div className="flex flex-col gap-2">
              {/* <h2 className="text-black font-bold text-lg mb-6">Login Now</h2> */}
              <button onClick={() => signIn('google')} className="transition-all ease-in-out hover:text-black hover:bg-yellow-400 bg-black px-4 py-2 rounded-md font-semibold text-gray-200 text-md">
                Google
              </button>
              <button onClick={() => {}} className="transition-all ease-in-out hover:text-black hover:bg-green-400 bg-black px-4 py-2 rounded-md font-semibold text-gray-200 text-md">
                GitHub
              </button>
              <button onClick={() => {}} className="transition-all ease-in-out hover:text-black hover:bg-blue-400 bg-black px-4 py-2 rounded-md font-semibold text-gray-200 text-md">
                Twitter
              </button>
            </div>
          </div>

          {/* RIGHT - LOGIN INFO */}
          <div className="px-6 w-[100%]">
            {/* <h2 className="text-black font-bold text-lg mb-6">Welcome</h2> */}
            <p className="text-stone-500">Login using one of the available association methods below.</p>
          </div>

        </div>

        <p className="fixed bottom-6 text-black text-sm">© 2023 Cadogy, LLC. All Rights Reserved.</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="md:max-w-[100%] flex flex-col w-screen md:h-screen justify-center items-center">
        <Image id="randomBG" src={loginBg1} className="w-screen max-h-[200px] md:max-h-[100%] h-screen object-cover" alt="Login Background Image" />
      </div>

    </div>
  )
}

export default Login