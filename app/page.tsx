'use client'

import { BoltIcon, ExclamationTriangleIcon, SunIcon, InformationCircleIcon, XCircleIcon } from '@heroicons/react/24/outline'
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import copiedSound from '../public/assets/audio/copied.mp3'
import errorSound from '../public/assets/audio/error.mp3'

function HomePage() {
  const [copySuccess, setCopySuccess] = useState('');
  // Copy text function

  const copyNoise = new Audio(copiedSound);
  const errorNoise = new Audio(errorSound);

  const copyToClipBoard = async copyMe => {
    try {
      await navigator.clipboard.writeText(copyMe);
      copyNoise.play();
      copyNoise.volume = 0.1;
      toast.success('Copied to clipboard')
    } catch (err) {
      errorNoise.play();
      errorNoise.volume = 0.1;
      setCopySuccess('Failed to copy!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      {/* <h1 className="text-5xl font-bold mb-20">CODR</h1> */}
      
      <div className="w-full md:max-w-[100%] md:h-screen items-center justify-center gap-0 md:gap-2 flex overflow-y-scroll md:overflow-auto flex-col md:flex-row space-y-2 my-4 text-center">

        <div className="flex flex-col w-[100%] md:w-[96%] overflow-auto py-2">

          {/* Home explainer */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
              <div className="flex gap-2 flex-col items-center justify-center mb-5">
                {/* Exmaples Column */}
                <SunIcon className="h-8 w-8 text-yellow-400"/>
                <h2 className="text-lightMode-header dark:text-darkMode-header font-bold select-none">Examples</h2>
              </div>

              <div className="select-none text-lightMode-text dark:text-darkMode-text">
                <p onClick={() => copyToClipBoard(document.getElementById('exampleText1')?.innerText!)} id="exampleText1" className='h-[80px] flex items-center justify-center'>Explain something to me</p>
                <p onClick={() => copyToClipBoard(document.getElementById('exampleText2')?.innerText!)} id="exampleText2" className='h-[80px] flex items-center justify-center'>Create a course syllabus for me</p>
                <p onClick={() => copyToClipBoard(document.getElementById('exampleText3')?.innerText!)} id="exampleText3" className='h-[80px] flex items-center justify-center'>What is JavaScript?</p>
              </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
              <div className="flex gap-2 flex-col items-center justify-center mb-5">
                {/* Capabilities Column */}
                <BoltIcon className="h-8 w-8 text-blue-400"/>
                <h2 className="text-lightMode-header dark:text-darkMode-header font-bold select-none">Capabilities</h2>
              </div>

              <div className="select-none text-lightMode-text dark:text-darkMode-text">
                <p id="infoText" className='h-[80px] flex items-center justify-center'>Choose your desired GPT Model when chatting</p>
                <p id="infoText" className='h-[80px] flex items-center justify-center'>Save your chats to continue from anywhere</p>
                <p id="infoText" className='h-[80px] flex items-center justify-center'>Live notifications and interactivity</p>
              </div>
            </div>

            <div className='w-full md:w-1/2 lg:w-1/2 xl:w-1/3'>
              <div className="flex gap-2 flex-col items-center justify-center mb-5">
                {/* Limitations Column */}
                <ExclamationTriangleIcon className="h-8 w-8 text-red-400"/>
                <h2 className="text-lightMode-header dark:text-darkMode-header font-bold select-none">Limitations</h2>
              </div>

              <div className="select-none text-lightMode-text dark:text-darkMode-text">
                <p id="infoText" className='h-[80px] flex items-center justify-center'>May occasionally generate incorrect information</p>
                <p id="infoText" className='h-[80px] flex items-center justify-center'>May occasionally produce harmful instructions or biased content</p>
                <p id="infoText" className='h-[80px] flex items-center justify-center'>Limited knowledge of world and events after 2021</p>
              </div>
            </div>
          </div>

          {/* Home Blogs */}
          <div className="flex mt-2 transition-all ease-in-out">
            <div className="w-full border-3 border-lightMode-primary/30 py-3 mx-auto bg-lightMode-primary/90 shadow rounded-lg">
              <div>
              <h1 className="text-[#4a4a4a] text-[24px] font-bold text-left px-3 flex gap-2 items-center select-none"><InformationCircleIcon className="h-8 w-8 text-[#4a4a4a]"/> Read More</h1>
              <p className="text-[#5b5b5b] text-[18px] text-left px-3 select-none">Find trending prompts, learn about GPT, and more.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage