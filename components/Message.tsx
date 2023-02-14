import { DocumentData } from 'firebase/firestore'
import Image from 'next/image';

type Props = {
  message: DocumentData
}

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`shadow py-5 my-3 max-w-[96%] mx-auto rounded-lg ${!isChatGPT &&"shadow-none text-lightMode-text dark:text-darkMode-text"} ${isChatGPT && "bg-lightMode-primary/50 dark:bg-darkMode-primary/50"}`}>
      <div className="flex space-x-3 md:space-x-10 px-3 md:px-10 max-w-[100%] mx-auto">
         <img className="h-10 w-10 rounded" src={message.user.avatar} alt={message.user.name} />
        <p className="text-[14px] md:text-[16px] pt-1 text-sm">
          {message.text}
        </p>
      </div>      
    </div>

  )
}

export default Message