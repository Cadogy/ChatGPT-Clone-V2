'use client'

import { PaperAirplaneIcon, NoSymbolIcon } from "@heroicons/react/24/solid";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from 'react-hot-toast'
import ModelSelection from "./ModelSelection";
import useSWR from 'swr'
import errorSound from '../public/assets/audio/error.mp3'
import successSound from '../public/assets/audio/message.mp3'

type Props = {
  chatId: string;
}

const errorNoise = new Audio(errorSound);
errorNoise.preload = 'auto';
errorNoise.load();

const successNoise = new Audio(successSound);

function chatError() {
  let click = errorNoise.cloneNode();
  errorNoise.play();
  errorNoise.volume = 0.1;
    toast.error(`Enter some text to continue`);
}

function ChatInput({ chatId }: Props) {
  const [prompt, setPrompt] = useState('');
  const { data: session } = useSession();

  const { data: model } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!prompt) return;

    const input = prompt.trim();
    setPrompt('');

    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: session?.user?.email!,
        name: session?.user?.name!,
        avatar: session?.user?.image! || `https://ui-avatars.com/api/?name=${session?.user?.name}`,
      },
    };

    await addDoc(
      collection(
        db,
        'users',
        session?.user?.email!,
        'chats',
        chatId,
        'messages'
      ),
      message
    );

    // Toast notification to say "bot is thinking..."
    const notification = toast.loading(`Thinking...`);

    await fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input,
          chatId,
          model,
          session
      }),
    }).then(() => {
      // Toast notication to send success message
      successNoise.play();
      successNoise.volume = 0.4;
      toast.success(`Response.`, {
        id: notification,      
      });
    })
      .catch((err) => {
        toast.error(`Error.`, {
          id: notification,
        });
      });
  };

  return (

    <div className=" text-lightMode-text dark:text-darkMode-text rounded text-sm mb-2 mx-1 my-1 md:my-0 md:mx-2">
      
      <div className="md:mb-4 md:mx-2">
        <form onSubmit={sendMessage} className="shadow-md bg-lightMode-primary/70 border-[1px] border-lightMode-secondary/50 hover:bg-lightMode-primary transition-all dark:bg-darkMode-primary rounded-md p-3 space-x-5 flex">
          <input 
            className="text-[16px] md:text-[18px] bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 text-lightMode-text dark:text-darkMode-text"
            disabled={!session}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            type="text" 
            placeholder="Type your message here..."
          />

          <button
            disabled={!prompt || !session}
            type="submit"
            className="hover:bg-lightMode-success bg-lightMode-success disabled:bg-gray-500/50 disabled:cursor-not-allowed px-4 py-2 rounded items-center justify-center font-bold transition-all ease-in-out hover:scale-[1.1] hover:text-white text-stone-300"
          >
            {!prompt && (
              <NoSymbolIcon onClick={chatError} className="text-lightMode-primary dark:text-darkMode-primary h-5 w-5 -rotate-45" />
            )}
            {prompt && (
              <PaperAirplaneIcon className="text-lightMode-primary dark:text-darkMode-primary h-5 w-5 -rotate-45" />
            )}
            
          </button>
        </form>      
      </div>

      <div>
        <div className="md:hidden">
        {/* Model Selection */}
        <ModelSelection />
        </div>        
      </div>

    </div>
  )
}

export default ChatInput