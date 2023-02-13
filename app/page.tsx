import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-2 text-white">
      {/* <h1 className="text-5xl font-bold mb-20">CODR</h1> */}
      
      <div className="flex space-x-2 text-center">

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* SUN ICON */}
            <SunIcon className="h-8 w-8 text-neutral-400"/>
            <h2 className="">Examples</h2>
          </div>

          <div className="space-y-2">
            <p id="exampleText">"Explain something to me"</p>
            <p id="exampleText">"Create a course syllabus for me"</p>
            <p id="exampleText">"What is JavaScript?"</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* SUN ICON */}
            <BoltIcon className="h-8 w-8 text-neutral-400"/>
            <h2 className="">Capabilities</h2>
          </div>

          <div className="space-y-2">
            <p id="infoText">Choose your desired GPT Model when chatting</p>
            <p id="infoText">Save your chats to continue from anywhere</p>
            <p id="infoText">Live notifications and interactivity</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col items-center justify-center mb-5">
            {/* SUN ICON */}
            <ExclamationTriangleIcon className="h-8 w-8 text-neutral-400"/>
            <h2 className="">Limitations</h2>
          </div>

          <div className="space-y-2">
            <p id="infoText">May occasionally generate incorrect information</p>
            <p id="infoText">May occasionally produce harmful instructions or biased content</p>
            <p id="infoText">Limited knowledge of world and events after 2021</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage