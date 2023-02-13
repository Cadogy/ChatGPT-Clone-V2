import { DocumentData } from 'firebase/firestore'
import Image from 'next/image';

type Props = {
  message: DocumentData
}

function Message({ message }: Props) {
  const isChatGPT = message.user.name === "ChatGPT";

  return (
    <div className={`py-5 max-w-[96%] mx-auto rounded-lg text-white ${isChatGPT && "bg-[#1f1f23]"}`}>
      <div className="flex space-x-3 md:space-x-10 px-3 md:px-10 max-w-[100%] mx-auto">
         <img className="h-10 w-10 rounded" src={message.user.avatar} alt={message.user.name} />
        <p className="text-[16px] pt-1 text-sm">
          {message.text}
        </p>
      </div>      
    </div>

  )
}

export default Message