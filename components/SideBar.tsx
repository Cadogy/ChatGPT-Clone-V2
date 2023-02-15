'use client'

import NewChat from '../components/NewChat'
import { useCollection } from 'react-firebase-hooks/firestore'
import { useSession, signOut } from 'next-auth/react';
import { GlobeAltIcon, HomeIcon, AcademicCapIcon, XCircleIcon, ArrowLeftOnRectangleIcon } from '@heroicons/react/24/outline'
import { db } from '../firebase';
import ChatRow from './ChatRow'
import { collection, orderBy, query } from 'firebase/firestore';
import ModelSelection from './ModelSelection';
import CadLogo from '../public/assets/cadogy-shield.svg'
import { useRouter } from 'next/navigation';


function SideBar() {
  const router = useRouter();
  const { data: session } = useSession();

  const [chats, loading, error] = useCollection(
    session && query(collection(db, 'users', session.user?.email!, 'chats'), orderBy('createdAt', 'desc'))
  );

  const routeHome = async() => {
    router.push(`/`)
  }

  return (
    <div className="p-2 flex flex-col h-screen">

      <div className="chatGptSection mb-2 rounded flex-1 overflow-y-auto">
        <div className="md:mx-auto md:max-w-[90%]">
          
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
          
          <div className="flex flex-col space-y-2 mb-1 mt-2">

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

      <div className="bg-lightMode-primary/70 shadow-md border-[0px] border-[rgba(100,100,100,0.1)] dark:bg-darkMode-secondary mb-2 p-2 rounded-lg flex gap-1 items-center">
        {session && (
          <div className="w-full flex-col flex items-center justify-evenly gap-3 py-2">

            {/* TOP PROFILE CONTAINER */}
            <div className="select-none py-3 mb-2 border-[0px] border-[rgba(100,100,100,0.1)] shadow-md rounded-lg px-3 gap-3 w-full justify-evenly flex items-center">

              {/* PROFILE IMAGE */}
              <div className="max-w-[64px] max-h-[64px] flex">
                <img
                title="View Profile"
                  src={session.user?.image!} alt={session.user?.name!}
                  className="shadow rounded-full cursor-pointer transition-all ease-in-out md:hover:scale-[1.05] hover:shadow-md"
                />
              </div>

              {/* PROFILE INFO */}
              <div className="flex flex-col">
                <div>
                  <p
                    className="text-lightMode-header dark:text-darkMode-header font-semibold text-[14px] md:text-[16px]"
                  >
                    {session.user?.name!}
                  </p>
                </div>

                <div className="flex">
                  <p
                    className="items-center gap-1 hidden md:inline-flex text-lightMode-header dark:text-darkMode-header text-[12px] md:text-[14px]"
                  >
                    <img className="h-4 w-4" src="https://icons.iconarchive.com/icons/iconarchive/badge-trophy/512/Badge-Trophy-Diamond-3-icon.png" alt="" /> Member
                  </p>
                </div>
              </div>

            </div>

            {/* BORDER SEPARATION */}
            {/* <div className="w-full border-t-[1px] border-lightMode-text/10 rounded-lg"></div> */}

            {/* MENU ITEM OPTIONS */}
            <div className="z-[10] w-full flex flex-wrap">
              
              {/* GPT OPTIONS */}
              <div className="flex">
                <h1 className="text-lightMode-text text-[13px] px-3 font-semibold select-none">GPT Options</h1> 
              </div>

              <div className="w-full flex flex-wrap items-center justify-evenly">
                {/* COL 1 HOME*/}
                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    onClick={routeHome}
                    title="Home"
                    className="cursor-pointer transition-all ease-in-out"
                  >
                    <HomeIcon className="text-lightMode-text hover:text-blue-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>
                </div>

                {/* COL 2 EXPLORE*/}
                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    title="Explore"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <GlobeAltIcon className="text-lightMode-text hover:text-green-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 3 LEARN */}
                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    title="Learn"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <AcademicCapIcon className="text-lightMode-text hover:text-yellow-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                {/* COL 4 SIGN OUT*/}
                <div className="w-1/2 md:w-1/4 justify-center flex md:pb-0 pt-2">
                  <a
                    title="Log Out"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <ArrowLeftOnRectangleIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>
              </div>

              {/* DALL-E OPTIONS */}
              {/* <div className="flex">
                <h1 className="text-lightMode-text text-[13px] px-3 font-semibold select-none">DALL-E Options</h1> 
              </div>

              <div className="w-full flex flex-wrap items-center justify-evenly">

                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    onClick={routeHome}
                    title="Home"
                    className="cursor-pointer transition-all ease-in-out"
                  >
                    <HomeIcon className="text-lightMode-text hover:text-blue-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>
                </div>

                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    title="Explore"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <GlobeAltIcon className="text-lightMode-text hover:text-green-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                <div className="w-1/2 md:w-1/4 justify-center flex pt-2">
                  <a
                    title="Learn"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <AcademicCapIcon className="text-lightMode-text hover:text-yellow-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>

                <div className="w-1/2 md:w-1/4 justify-center flex md:pb-0 pt-2">
                  <a
                    title="Log Out"
                    onClick={() => signOut()}
                    className="cursor-pointer transition-all ease-in-out">
                    <XCircleIcon className="text-lightMode-text hover:text-red-500 md:scale-[1.15] md:hover:scale-[1.4] cursor-pointer transition-all ease-in-out w-6 h-6"/>
                  </a>                  
                </div>
              </div> */}

            </div>

          </div>
        )}
      </div>


    </div>
  )
}

export default SideBar