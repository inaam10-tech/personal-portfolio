import React from 'react'

const ShimmerButton = ({
    title, position, handleClick, otherClasses, icon
}: {title:string; position:string; handleClick?:()=> void; otherClasses?:string; icon:React.ReactNode}) => {
  return (
    <div>
        
        <button className={`inline-flex h-12 w-full animate-shimmer overflow-hidden rounded-lg items-center justify-center p-[1px] border border-slate-800 bg-[linear-gradient(110deg,#101023,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-500 md:w-60 md:mt-10 ${otherClasses}`}
        onClick={handleClick}
        >
          {title}
        </button>
  
    </div>
  )
}

export default ShimmerButton