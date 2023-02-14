'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
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
    <div onClick={createNewChat} className="hover:bg-lightMode-success chatRow mb-2 p-[10px] md:text-[14px] text-[12px]">
      <PlusIcon className='h-4 w-4 md:h-5 md:w-5 text-lightMode-text font-bold'/>
      <p className='text-lightMode-text'>Create new chat</p>
    </div>
  )
}

export default NewChat