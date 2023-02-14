'use client'

import { PaperAirplaneIcon, NoSymbolIcon } from "@heroicons/react/24/solid";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import { toast } from 'react-hot-toast'
import ModelSelection from "./ModelSelection";
import useSWR from 'swr'

type Props = {
  chatId: string;
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
      toast.success(`Response.`, {
        id: notification,      
      });
    });
  };

  return (

    <div className=" text-lightMode-text dark:text-darkMode-text rounded text-sm mb-2 mx-1 my-1 md:my-0 md:mx-2">
      
      <div className="mb-2 md:mx-2">
        <form onSubmit={sendMessage} className="md:shadow-[-0px_-2px_40px_#b1b1b1] shadow-[0px_0px_0px_black] bg-lightMode-secondary hover:bg-lightMode-secondary dark:bg-darkMode-secondary hover:dark:bg-darkMode-secondary rounded transition-all ease-in-out p-3 space-x-5 flex">
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
            className="hover:bg-lightMode-success bg-lightMode-success disabled:bg-gray-500 disabled:cursor-not-allowed px-4 py-2 rounded items-center justify-center font-bold transition-all ease-in-out hover:scale-[1.1] hover:text-white text-stone-300"
          >
            {!prompt && (
              <NoSymbolIcon className="text-lightMode-primary dark:text-darkMode-primary h-5 w-5 -rotate-45" />
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