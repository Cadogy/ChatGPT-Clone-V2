'use client'

import NewChat from '../components/NewChat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession, signOut } from 'next-auth/react';
import { ChatBubbleBottomCenterTextIcon, ArrowLeftOnRectangleIcon, BellAlertIcon, HomeIcon, CodeBracketIcon, LinkIcon } from '@heroicons/react/24/solid'
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
              <div className="animate-pulse text-center text-lightMode-text dark:text-darkMode-text">
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

      <div className="bg-lightMode-secondary dark:bg-darkMode-secondary mb-2 p-2 rounded flex gap-1 items-center">
        {session && (
          <div className="w-full flex-col flex items-center justify-evenly gap-3 py-2">

            {/* TOP PROFILE CONTAINER */}
            <div className="px-3 gap-3 w-full justify-evenly flex items-center">

              {/* PROFILE IMAGE */}
              <div className="flex">
                <img
                  src={session.user?.image!} alt={session.user?.name!}
                  className="max-w-[40px] max-h-[40px] shadow-md rounded-full cursor-pointer transition-all ease-in-out md:hover:scale-[1.1] hover:shadow-2xl"
                />
              </div>

              {/* PROFILE INFO */}
              <div className="flex flex-col">
                <div>
                  <p
                    className="text-lightMode-header dark:text-darkMode-header font-semibold text-[14px] md:text-[14px]"
                  >
                    {session.user?.name!}
                  </p>
                </div>

                <div>
                  <p
                    className="hidden md:inline-flex text-lightMode-header dark:text-darkMode-header text-[12px] md:text-[14px]"
                  >
                    Full-stack Software Engineer
                  </p>
                </div>
              </div>

            </div>

            {/* BORDER SEPARATION */}
            <div className="w-full border-t-2 border-lightMode-text/10 rounded-lg">
            </div>

            {/* MENU ITEM OPTIONS */}
            <div className="w-full flex flex-wrap px-3 justify-evenly">
              {/* COLUMNS */}

                {/* COL 1 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex mb-2">
                  <a
                    title="Switch Applications"
                    className="cursor-pointer transition-all ease-in-out"
                  >
                    <HomeIcon className="text-lightMode-text hover:text-green-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>
                </div>

                {/* COL 2 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex mb-2">
                  <a
                    title="Disconnect"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <ChatBubbleBottomCenterTextIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 3 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex mb-2">
                  <a
                    title="Disconnect"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <BellAlertIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 4 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex">
                  <a
                    title="Disconnect"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <CodeBracketIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 5 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex">
                  <a
                    title="Disconnect"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <LinkIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 6 */}
                <div className="w-1/2 sm:w-1/2 md:w-1/3 justify-center flex">
                  <a
                    title="Disconnect"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <ArrowLeftOnRectangleIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

            </div>

          </div>
        )}
      </div>


    </div>
  )
}

export default SideBar