import { BoltIcon, ExclamationTriangleIcon, SunIcon, InformationCircleIcon } from '@heroicons/react/24/outline'

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-white">

      <div className="chatScroller my-3 w-full md:max-w-[100%] h-screen items-center justify-center gap-0 md:gap-2 flex overflow-y-scroll md:overflow-auto flex-col md:flex-row space-y-2 my-4 text-center">
        <div className="max-w-[40%] flex flex-col justify-center items-center h-full overflow-auto">
          <h1 className="mb-1 text-4xl text-lightMode-header font-bold">GPT - Intelligent AI</h1>
          <p className="text-lightMode-header text-[14px]">ChatGPT is an open-source, trainable chatbot powered by GPT-3.</p>
          <div className="flex flex-wrap mt-3">

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-1">
              <img className="rounded-lg p-1" src="https://pbs.twimg.com/media/FPt7IN-XwAA-5qo?format=png&name=small" alt="" />
            </div>

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-1">
              <img className="rounded-lg p-1" src="https://cdn.openai.com/dall-e-2/demos/text2im/astronaut/horse/photo/0.jpg" alt="" />
            </div>

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-1">
              <img className="rounded-lg p-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/DALL-E_2_artificial_intelligence_digital_image_generated_photo.jpg/640px-DALL-E_2_artificial_intelligence_digital_image_generated_photo.jpg" alt="" />
            </div>

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-1">
              <img className="rounded-lg p-1" src="https://static01.nyt.com/images/2022/04/04/business/00dall-e2/00dall-e2-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" alt="" />
            </div>

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-1">
              <img className="rounded-lg p-1" src="https://static.dezeen.com/uploads/2022/04/dall-e-2-openai-artificial-intelligence-design_dezeen_2364_col_2.jpg" alt="" />
            </div>

            <div className="bg-lightMode-primary/0 rounded-lg w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/3 mb-4">
              <img className="rounded-lg p-1" src="https://i0.wp.com/hyperallergic-newspack.s3.amazonaws.com/uploads/2022/04/DALL%C2%B7E-A-sea-otter-in-the-style-of-Girl-with-a-Pearl-Earring-by-Johannes-Vermeer.jpg?resize=780%2C780&quality=100&ssl=1" alt="" />
            </div>

          </div>
        </div>

        <div>
          <div className="chatScroller items-center justify-center gap-0 md:gap-2 flex overflow-y-scroll md:overflow-auto flex-col md:flex-row space-y-2 my-4 text-center">

            <div className="flex flex-col m-3 max-w-[100%]">

              {/* Home explainer */}
              <div className="flex gap-4">
                <div className='w-[33%]'>
                  <div className="flex gap-2 flex-col items-center justify-center mb-5">
                    {/* Exmaples Column */}
                    <SunIcon className="h-8 w-8 text-yellow-400"/>
                    <h2 className="text-lightMode-header dark:text-darkMode-header font-bold">Examples</h2>
                  </div>

                  <div className="text-lightMode-text dark:text-darkMode-text">
                    <p id="exampleText" className='h-[80px] flex items-center justify-center'>"Explain something to me"</p>
                    <p id="exampleText" className='h-[80px] flex items-center justify-center'>"Create a course syllabus for me"</p>
                    <p id="exampleText" className='h-[80px] flex items-center justify-center'>"What is JavaScript?"</p>
                  </div>
                </div>

                <div className='w-[33%]'>
                  <div className="flex gap-2 flex-col items-center justify-center mb-5">
                    {/* Capabilities Column */}
                    <BoltIcon className="h-8 w-8 text-blue-400"/>
                    <h2 className="text-lightMode-header dark:text-darkMode-header font-bold">Capabilities</h2>
                  </div>

                  <div className="text-lightMode-text dark:text-darkMode-text">
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>Choose your desired GPT Model when chatting</p>
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>Save your chats to continue from anywhere</p>
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>Live notifications and interactivity</p>
                  </div>
                </div>

                <div className='w-[33%]'>
                  <div className="flex gap-2 flex-col items-center justify-center mb-5">
                    {/* Limitations Column */}
                    <ExclamationTriangleIcon className="h-8 w-8 text-red-400"/>
                    <h2 className="text-lightMode-header dark:text-darkMode-header font-bold">Limitations</h2>
                  </div>

                  <div className="text-lightMode-text dark:text-darkMode-text">
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>May occasionally generate incorrect information</p>
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>May occasionally produce harmful instructions or biased content</p>
                    <p id="infoText" className='h-[80px] flex items-center justify-center'>Limited knowledge of world and events after 2021</p>
                  </div>
                </div>
              </div>

              {/* Home Blogs */}
              <div className="flex mt-2 transition-all ease-in-out">
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
      </div>




    </div>
  )
}

export default HomePage