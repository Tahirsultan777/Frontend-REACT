//import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div className= 'w-full h-screen bg-zinc-900 pt-1' >
        <div className="textstructure mt-32 px-20" >
            {["we create","eye opening","presentations",].map((item,index)=>
            { return (
            <div key={index}  className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index===1 && ( <div className="mr-[1vw] w-[12vw] rounded-md h-[6vw] relative bg-green-800 -top-[0.1vw]"></div>)}

                    <h1 className="uppercase text-[8.2vw] leading-[7.2vw] tracking-tighter font-medium"> {item} </h1>
                    </div>
               </div>
               )})}
        </div>
        <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center py-5 px-20">
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>
            (<p key={index} className="text-md font-light tracking-tight leading-none">{item}</p>))}
            <div className="start flex items-center gap-2"  >
                <div className="px-6 py-[5px] border-[1px] border-zinc-500 uppercase rounded-full font-light text-sm">start the project</div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
                  <span className="rotate-[45deg]">
                   <FaArrowUpLong /> 
                  </span>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Landingpage