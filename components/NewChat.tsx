'use client'

import { PlusIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { db } from '../firebase'


function NewChat() {
  const router = useRouter();
  const { data: session } = useSession();

  const createNewChat = async() => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email!, 'chats'), {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`)

  };

  return (
    <div className='w-full flex justify-evenly'>
      {/* Create New Chat */}
      <div onClick={createNewChat} className="bg-[#3aba67cc] hover:bg-[#3aba679d] chatRow mb-2 p-[10px] md:text-[14px] text-[12px] pr-[15px]">
        <PlusIcon className='h-4 w-4 md:h-5 md:w-5 text-lightMode-primary/70 font-bold'/>
        <p className='font-semibold text-lightMode-primary/70'>Create new chat</p>
      </div>
      {/* Delete All Chats */}
      <div onClick={createNewChat} className="chatRow mb-2 p-[10px] md:text-[14px] text-[12px]">
        <ArchiveBoxXMarkIcon className='h-4 w-4 md:h-6 md:w-6 text-lightMode-secondary hover:text-lightMode-fail'/>
      </div>
    </div>
  )
}

export default NewChat