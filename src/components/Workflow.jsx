import { CheckCircle2 } from "lucide-react"
import code from "../assets/code.jpg"
import { checklistItems } from "./index.jsx"

export const Workflow = () => {
  return (
    <div id='workflow' className="my-14">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide">
        Accelerate your {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex mt-14 flex-wrap justify-center">
        <div className="w-full lg:w-1/2">
          <img src={code} alt="Coding" />
        </div>
        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, index) => {
            return <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-950 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
