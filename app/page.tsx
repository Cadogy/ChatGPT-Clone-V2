import { BoltIcon, ExclamationTriangleIcon, SunIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="bg-main-rainbowbg flex flex-col items-center justify-center h-screen px-2 text-white">
      {/* <h1 className="text-5xl font-bold mb-20">CODR</h1> */}
      
      <div className="w-full md:max-w-[90%] h-screen items-center justify-center gap-0 md:gap-2 flex overflow-y-scroll md:overflow-auto flex-col md:flex-row space-y-2 my-4 text-center">

        <div className="flex flex-col">

        {/* Home explainer */}
        <div className="flex gap-2">
          <div>
            <div className="flex gap-2 flex-col items-center justify-center mb-5">
              {/* Exmaples Column */}
              <SunIcon className="h-8 w-8 text-neutral-400"/>
              <h2 className="text-lightMode-header dark:text-darkMode-header">Examples</h2>
            </div>

            <div className="text-lightMode-text dark:text-darkMode-text">
              <p id="exampleText">"Explain something to me"</p>
              <p id="exampleText">"Create a course syllabus for me"</p>
              <p id="exampleText">"What is JavaScript?"</p>
            </div>
          </div>

          <div>
            <div className="flex gap-2 flex-col items-center justify-center mb-5">
              {/* Capabilities Column */}
              <BoltIcon className="h-8 w-8 text-neutral-400"/>
              <h2 className="text-lightMode-header dark:text-darkMode-header">Capabilities</h2>
            </div>

            <div className="text-lightMode-text dark:text-darkMode-text">
              <p id="infoText">Choose your desired GPT Model when chatting</p>
              <p id="infoText">Save your chats to continue from anywhere</p>
              <p id="infoText">Live notifications and interactivity</p>
            </div>
          </div>

          <div>
            <div className="flex gap-2 flex-col items-center justify-center mb-5">
              {/* Limitations Column */}
              <ExclamationTriangleIcon className="h-8 w-8 text-neutral-400"/>
              <h2 className="text-lightMode-header dark:text-darkMode-header">Limitations</h2>
            </div>

            <div className="text-lightMode-text dark:text-darkMode-text">
              <p id="infoText">May occasionally generate incorrect information</p>
              <p id="infoText">May occasionally produce harmful instructions or biased content</p>
              <p id="infoText">Limited knowledge of world and events after 2021</p>
            </div>
          </div>
        </div>

        {/* Home Blogs */}
        <div className="flex mt-2 hover:shadow-lg transition-all ease-in-out cursor-pointer">
          <div className="w-full border-3 border-lightMode-primary/30 py-3 mx-auto bg-lightMode-primary/90 shadow rounded-lg">
            <div>
            <h1 className="text-[#4a4a4a] text-[24px] font-bold text-left px-3 flex gap-2 items-center"><InformationCircleIcon className="h-8 w-8 text-[#4a4a4a]"/> Read More</h1>
            <p className="text-[#5b5b5b] text-[18px] text-left px-3">Find trending prompts, learn about GPT, and more.</p>
            </div>
          </div>

        </div>

        </div>

      </div>
    </div>
  )
}

export default HomePage