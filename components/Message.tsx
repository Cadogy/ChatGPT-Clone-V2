'use client'

import { DocumentData } from 'firebase/firestore'
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import copiedSound from '../public/assets/audio/copied.mp3'
import errorSound from '../public/assets/audio/error.mp3'

type Props = {
  message: DocumentData
}

const copyNoise = new Audio(copiedSound);
const errorNoise = new Audio(errorSound);

const messageDiv = document.getElementById('chatMessageTxt')
function Message({ message }: Props) {
  const [copySuccess, setCopySuccess] = useState('');

  // Copy text function
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

  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`cursor-pointer select-none transition-all ease-in-out hover:shadow py-3 my-3 max-w-[96%] mx-auto rounded-lg ${!isChatGPT &&"transition-all ease-in-out bg-lightMode-primary/50 dark:bg-darkMode-primary/50 hover:bg-lightMode-primary/80 hover:dark:bg-darkMode-primary/80 text-lightMode-text dark:text-darkMode-text"} ${isChatGPT && "transition-all ease-in-out bg-lightMode-secondary/30 dark:bg-darkMode-secondary/30 hover:bg-lightMode-secondary/40 hover:dark:bg-darkMode-secondary/40"}`}>
      <div onClick={() => copyToClipBoard(message.text)} className="flex space-x-3 md:space-x-10 px-3 md:px-6 max-w-[100%] mx-auto">
         <img className="h-12 w-12 rounded" src={message.user.avatar} alt={message.user.name} />
        <p id="chatMessageTxt" className="flex text-[14px] md:text-[16px] text-sm items-center break-normal">
          {message.text}
        </p>
      </div>      
    </div>

  )
}

export default Message