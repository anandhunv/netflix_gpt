import { useState } from "react"

const VideoTitle = ({title,overview}) => {

    const [overviewShow,setOverviewShow]=useState(false);
    const handleOverview=()=>{
        setOverviewShow(!overviewShow)
    }
  return (
    <div className="  pt-60 md:px-10 md:mb-0 mb-32  relative bg-gradient-to-b  from-black w-screen md:w-screen aspect-video ">

        <h2 className="font-semibold text-base -mt-40 md:mt-0 md:text-5xl text-teal-50 cursor-pointer w-fit " onClick={handleOverview}> {title}</h2>
    { overviewShow &&   <p className="text-[9px] md:text-sm w-screen md:w-[500px] pt-2  text-slate-200" >{overview}</p> }
        <div className="py-0 md:py-5">
    <button className=" bg-white text-black text-[10px] md:text-base rounded-md px-4 py-0 md:py-1 mr-3  border border-zinc-500 hover:bg-slate-300"><i className="fa-solid fa-play"></i> Play</button>
    <button className=" bg-neutral-500 bg-opacity-70 text-white rounded-md px-1 text-[10px] md:text-base md:px-4 py-1 "onClick={handleOverview}><i className="fa-solid fa-circle-info"></i> More Info</button>
    </div>

    </div>
  )
}

export default VideoTitle