import { cn } from "@/lib/utils";
import { BackgroundBeamsWithCollision } from "./background-beams-with-collision";
import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import ShimmerButton from "./ShimmerButton";
import { useState } from "react";
import { WavyBackground } from "./wavy-bg";

// import Inaam from './IAR.pdf';


export const BentoGrid = ({
    className,
    children,
  }: {
    className?: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
          "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
          className
        )}
      >
        {children}
      </div>
    );
  };
  

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img, 
  imgClassName,
  titleClassName,
  spareImage,

}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?:number;
  img:string;
  imgClassName?:string;
  titleClassName?:string;
  spareImage?:string;

}) => {
    const leftLists = ["Python", "React", "Typescript"];
    const rightLists = ["Tensorflow", "SQL", "C"];
    // const [val, setVal] = useState(0);
    let a = 1;
    const handleOpen = () => {
        // window.open(Inaam);
        a = a+1;
    }
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}

    >

        
        <div className={`${id === 6 } && 'flex justify-center h-full'`}>
            <div className="w-full h-full absolute">
                {img && (
                    <img 
                    src={img}
                    alt={img}
                    className={cn(imgClassName, "object-cover object-center")}
                    />
                )
                }
            </div>
            <div className={`absolute right-0 -bottom-5 ${id===5 && 'w-full opacity-80'}`}>
                {spareImage && (
                    <img 
                    src={spareImage}
                    alt={spareImage}
                    className={cn(imgClassName, "object-cover object-center w-full h-full")}
                    />
                )
                }

            </div>
            {id === 6 && (
                <BackgroundBeamsWithCollision>
                    <div className="absolute z-50 flex items-center justify-center text-white font-bold">

                    </div>
                </BackgroundBeamsWithCollision>
            )}
            {id === 2 && (
                <GlobeDemo />
            )}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div>
                <div className="w-full relative font-sans font-bold text-lg lg:text-3xl max-w-96 z-20 ml-10 mt-10">
                    <h1>
                        {title}
                    </h1>    
                </div>
                <div className="mt-5 relative flex justify-end items-center w-[50%] text-center ml-24">

                    <ShimmerButton title="Resume" position="left" icon=''
                    otherClasses="text-xl "
                    // handleClick={handleOpen}
                    />
                    
                </div>
            </div>
          )}
          {id === 5 && (
            <WavyBackground className="max-w-4xl mx-auto pb-40 relative">
                      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        {description}
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      {title}
      </p>
            </WavyBackground>
          )}
            <div className={cn(
                titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
            )}>
                { id != 5 && <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
                    {description}
                </div> }
                {id != 6 && id != 5 && <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                    {title}
                </div> }
            </div>
        </div>
    </div>
  );
};
