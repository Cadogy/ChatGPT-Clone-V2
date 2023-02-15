'use client'

import { PlusIcon, ArchiveBoxXMarkIcon } from '@heroicons/react/24/solid'
import { getFirestore, onSnapshot, addDoc, collection, serverTimestamp, query, writeBatch, orderBy, limit, getDocs, deleteDoc } from 'firebase/firestore'
import { ref as sRef } from 'firebase/storage';
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


  async function deleteCollection(db, collectionPath, batchSize) {
    const chatsRef = db.collection(collectionPath);
    const query = chatsRef.orderBy('__name__').limit(batchSize);

    return new Promise((resolve, reject) => {
      deleteQueryBatch(db, query, resolve).catch(reject);
    });
  }

  async function deleteQueryBatch(db, query, resolve) {
    const snapshot = await query.get();

    const batchSize = snapshot.size;
    if (batchSize === 0) {
      // When there are no documents left, we are done
      resolve();
      return;
    }

    // Delete documents in a batch
    const batch = db.batch();
    snapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });
    await batch.commit();

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(db, query, resolve);
    });
  }
  
  
  
  
  // const deleteAllChats = async () => {
  //   const q = query(collection(db, 'chats'));
  //   const querySnapshot = await getDocs(q);
        
  //   const deleteOps = [];
    
  //   querySnapshot.forEach((doc) => {
  //     deleteOps.push(deleteDoc(doc.ref));      
  //   });
    
  //   Promise.all(deleteOps).then(() => console.log('documents deleted'))
  // };

  // const delteAll = async() => {
  //   const chatsCollection = db.collection('chats');
  //   const snapshot = await chatsCollection.get();
  //   snapshot.forEach(doc => {
  //     await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
  //   });
    
  //   router.replace('/');
  // };

  return (
    <div className='w-full flex justify-evenly'>
      {/* Create New Chat */}
      <div title="Create new chat" onClick={createNewChat} className="bg-[#3aba67cc] hover:bg-[#3aba679d] chatRow mb-2 py-[10px] w-full md:text-[14px] text-[12px] select-none">
        <PlusIcon className='h-4 w-4 md:h-5 md:w-5 text-lightMode-primary/70 font-bold'/>
        <p className='font-semibold text-lightMode-primary/70'>New Chat</p>
      </div>
      {/* Delete All Chats */}
      {/* <div title="Delete all chats" onClick={deleteCollection} className="chatRow mb-2 p-[10px] md:text-[14px] text-[12px] select-none">
        <ArchiveBoxXMarkIcon className='h-4 w-4 md:h-6 md:w-6 text-lightMode-secondary hover:text-lightMode-fail'/>
      </div> */}
    </div>
  )
}

export default NewChat