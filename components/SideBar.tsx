'use client'

import NewChat from '../components/NewChat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession, signOut } from 'next-auth/react';
import { ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid'
import { BoltSlashIcon } from '@heroicons/react/24/solid'
import { db } from '../firebase';
import ChatRow from './ChatRow'
import { collection, orderBy, query } from 'firebase/firestore';
import ModelSelection from './ModelSelection';
import CadLogo from '../public/assets/cadogy-shield.svg'


function SideBar() {
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'desc'))
  );

  return (
    <div className="p-2 flex flex-col h-screen">

      <div className="flex-1">
        <div>
          
          {/* <div className="flex justify-evenly items-center mx-auto max-w-[80%] h-10 mt-2 mb-2 bg-white rounded">
            <img src="https://i.ibb.co/xjbDGfT/cadogy-shield.png" alt="Logo" className="w-8 h-8" />
            <h1 className="font-bold text-[20px]">CAD GPT</h1>
          </div> */}

          {/* New Chat */}
          <NewChat />

          <div className="hidden md:inline">
            {/* Model Selection */}
            <ModelSelection />
          </div>
          
          <div className="flex flex-col space-y-2 my-2">

            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}

            {/* Map - Saved Chat Rows */}
            {chats?.docs.map(chat => (
              <ChatRow key={chat.id} id={chat.id}/>
            ))}
          </div>

        </div>
      </div>

      <div className="flex gap-1 justify-center items-center">
        {session && (
          <div className="w-[100%] flex-col flex items-center justify-evenly">
            <div className="w-[100%] flex items-center justify-evenly">
              <div className="">
                <a
                  title="Switch Applications"
                  href="/"
                  className="cursor-pointer transition-all ease-in-out"
                >
                  <ChatBubbleBottomCenterTextIcon className="text-stone-200 hover:text-green-200 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                </a>
              </div>

              <div className="">
                <img
                  src={session.user?.image!} alt={session.user?.name!}
                  className="shadow-md h-8 w-8 md:h-12 md:w-12 rounded-full cursor-pointer mx-auto transition-all ease-in-out md:hover:scale-[1.1] hover:shadow-2xl"
                />
              </div>     

              <div className="">
                <a
                  title="Disconnect"
                  onClick={() => signOut()}
                  className="cursor-pointer transition-all ease-in-out">
                  <BoltSlashIcon className="text-stone-200 hover:text-red-200 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                </a>
              </div>               

            </div>

            <div>
              <p
                className="text-white font-semibold text-[12px] md:text-[14px]"
              >
                {session.user?.name!}
              </p>
            </div>

          </div>
        )}
      </div>


    </div>
  )
}

export default SideBar