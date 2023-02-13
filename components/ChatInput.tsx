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

    <div className=" text-gray-400 rounded-lg text-sm mb-2 mx-2">
      
      <div>
        <form onSubmit={sendMessage} className="bg-zinc-700/30 rounded-lg transition-all ease-in-out hover:bg-zinc-600/30 p-3 space-x-5 flex">
          <input 
            className="text-[16px] md:text-[18px] bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
            disabled={!session}
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            type="text" 
            placeholder="Type your message here..."
          />

          <button
            disabled={!prompt || !session}
            type="submit"
            className="hover:bg-[#29b995] bg-[#11A37F] disabled:bg-gray-500 disabled:cursor-not-allowed px-4 py-2 rounded items-center justify-center font-bold transition-all ease-in-out hover:scale-[1.1] hover:text-white text-stone-300"
          >
            {!prompt && (
              <NoSymbolIcon className="h-5 w-5 -rotate-45" />
            )}
            {prompt && (
              <PaperAirplaneIcon className="h-5 w-5 -rotate-45" />
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