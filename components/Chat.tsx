'use client'

import { db } from "../firebase";
import { collection, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import Message from "./Message";
import { ArrowDownCircleIcon } from "@heroicons/react/24/outline";

type Props = {
    chatId: string;
}

function Chat({ chatId }: Props) {
  const { data: session } = useSession();
  const [ messages ] = useCollection(session && query(
    collection(db, 'users', session?.user?.email!, 'chats', chatId, 'messages'),
    orderBy('createdAt', 'asc')
  ));

  return (
    <div className="chatScroller py-1 md:py-3 flex-1 overflow-y-auto overflow-x-hidden">

      {messages?.empty && (
        <>
          <div className="">
            <p className="select-none mt-10 text-center font-semibold text-lightMode-text/30">
              Type a prompt in below to get started.
            </p>
            <ArrowDownCircleIcon
              className="h-10 w-10 mx-auto mt-5 text-lightMode-text/30 animate-bounce"
            />            
          </div>
        </>
      )}

      {messages?.docs.map((message) => (
        <Message key={message.id} message={message.data()} />
      ))}
    </div>
  )
}

export default Chat