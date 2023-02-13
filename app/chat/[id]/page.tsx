import Chat from "../../../components/Chat"
import ChatInput from "../../../components/ChatInput"

type Props = {
  params: {
    id: string
  }
}

function ChatPage({params: { id } }: Props) {
  // console.log(props);
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Chat Window */}
      <Chat chatId={id}/>
      {/* Chat Input */}
      <ChatInput chatId={id}/>
    </div>
  )
}

export default ChatPage