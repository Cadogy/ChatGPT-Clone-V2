import { ChatBubbleLeftIcon, TrashIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { collection, deleteDoc, doc, orderBy, query } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

type Props = {
  id: string;
}

function ChatRow({ id }: Props) {

  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const [ active, setActive ] = useState(false);

  const [ messages ] = useCollection(
    collection(db, 'users', session?.user?.email!, 'chats', id, 'messages'),
  );

  useEffect(() => {
    if (!pathname) return;
      setActive(pathname.includes(id));
  }, [pathname]);

  const removeChat = async() => {
    await deleteDoc(doc(db, 'users', session?.user?.email!, 'chats', id))
    router.replace('/');
  }

  return (
    <Link href={`/chat/${id}`} className={`hover:bg-lightMode-secondary/50 dark:hover:bg-darkMode-secondary/50 chatRow px-3 justify-between md:justify-around items-center ${active && 'shadow border-[0px] border-lightMode-secondary bg-main-rainbowbg-colorful dark:bg-main-rainbowbg-colorful'}`}>
      <ChatBubbleLeftIcon className={`h-5 w-5 text-lightMode-header dark:text-darkMode-header ${active && "text-lightMode-cta"}`}/>
      <p className={`truncate flex-1 hidden md:inline-flex whitespace-nowrap text-lightMode-text/70 dark:text-darkMode-text/70 ${active && "font-semibold text-lightMode-cta"}`}>
        {messages?.docs[messages?.docs.length - 1]?.data().text || 'New Chat'}
      </p>
      <button onClick={() => setShowModal(true)} className="">
        <TrashIcon className={`h-5 w-5 text-gray-700 hover:text-red-500 transition-all ease-in-out`}/>
      </button>

      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="rounded-lg shadow-2xl relative flex flex-col w-full bg-lightMode-primary border-2 border-lightMode-text/10 dark:border-darkMode-text/10 outline-none focus:outline-none">
                {/*header*/}
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="flex relative p-6 flex-auto justify-center items-center">
                  <p className="text-center flex flex-col justify-center items-center my-4 text-lightMode-text text-lg leading-relaxed">
                    Are you sure you want to delete this chat?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-around p-6 border-t-2 border-solid border-zinc-700/0 rounded-b">
                  <button
                    className="flex gap-2 hover:text-lightMode-text/30 text-lightMode-text background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <XCircleIcon className="h-5 w-5 text-lightMode-text transition-all ease-in-out"/>
                    Cancel
                  </button>
                  <button
                    className="flex gap-2 hover:bg-red-400/90 bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={removeChat}
                  >
                    <TrashIcon className="h-5 w-5 text-white transition-all ease-in-out"/>
                    Delete Chat
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-20 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

    </Link> 
  );
}

export default ChatRow