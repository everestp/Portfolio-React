import React, { useEffect, useState } from "react";
import { skillCards } from "../data/index";

const Services = () => {
  const [hoverCardIndex,setHoveredCardIndex] =useState(null)
  const [isLargeScreen,setIsLargeScreen] = useState(false)

  useEffect(()=>{
const checkScreenSize = ()=>{
  setIsLargeScreen(window.innerWidth >1024)
}
checkScreenSize()
window.addEventListener('resize',checkScreenSize)
return ()=> window.removeEventListener('resize',checkScreenSize)
  },[])
  const getPositionClass = (card)=>{
    const position = isLargeScreen? card.hoverPosition.large : card.hoverPosition.small
 return position ==='bottom'?'bottom-0':'top-0'
  }

  const getHoverPositionClass = (card)=>{
    const position = isLargeScreen? card.hoverPosition.large : card.hoverPosition.small
 return position ==='bottom'?'bottom-full':'top-full'
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 xl:py-0">
      <h2 className="text-4xl font-light mb-32 xl:mt-0 mt-12">Skill-set</h2>
      <div className="w-full xl:w-[900px] lg:w-[800px] md:w-[600px] grid lg:grid-cols-3 grid-cols-1 lg:gap-12 gap-32 xl:mb-0 mb-16">
        {skillCards.map((card, index) => (
          <div
            key={index}
            className="lg:max-w-[280px] md:max-w-[400px] max-w-[320px] w-full mx-auto rounded-sm ring-2 ring-gray-400/20 shadow-md shadow-gray-700/20 relative isolate" 
            onMouseEnter={()=> setHoveredCardIndex(index)}
            onMouseLeave={()=>setHoveredCardIndex(null)}
          >
            <div className="p-3 bg-gray-200 dark:bg-gray-800 transition-colors duration-500  ">
              {/* Content of the skill card will be added here */}
              <i className={`${card.icon} md:text-4xl text-3xl text-gray-900 dark:text-white `}></i>
              <h3 className=" md:text-2xl text-xl font-bold my-4 text-red-500 dark:text-yellow-500 transition-colors duration-500">{card.title}</h3>
              <p className="text-gray-900 dark:text-white md:h-28 h-24 md:text-base text-sm font-light overflow-y-auto custom-scrollbar pr-2 transition-colors duration-500 ">{card.description}</p>
            </div>
            <div className={`w-full absolute left-0 ${getPositionClass(card)} flex flex-col gap-y-5 py-4 transition-all duration-500 -z-10 ${hoverCardIndex === index ? getHoverPositionClass(card) : ''}`}> 

              {isLargeScreen &&  card.hoverPosition.large ==='top' && (
                <div className="flex justify-between">
                  {[...Array(card.links.length)].map((_,index)=>(
                    <a href={card.links[index]} key={index} target="_blank" rel="noopener noreferrer" className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors">
                    {index +1}
                    </a>
                  ))}

                </div>
              )}
              <h2  className="text-2xl text-center text-gray-900 dark:text-white font-light tracking-widest">Projects</h2>

              {(!isLargeScreen || (isLargeScreen && card.hoverPosition.large ==='bottom'))&& (
                <div className="flex justify-between">
                  {[...Array(card.links.length)].map((_,index)=>(
                    <a href={card.links[index]}  target="_blank" rel="noopener noreferrer"  key={index} className="text-lg bg-red-500 dark:bg-yellow-500 w-10 aspect-square grid place-items-center text-white rounded-full transition-colors">
                    {index +1}
                    </a>
                  ))}

                </div>
              )}



            </div>
          </div>
        ))} 
      </div>
    </div>
  );
};

export default Services;
