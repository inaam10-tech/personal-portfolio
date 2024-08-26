import { workExperience } from '@/data'
import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3dCard'
import exp from 'constants'

const Experience = () => {
  return (
    <div className='py-10' id='experiences'>
        <h1 className='heading'>
            My Previous 
            <span className='text-purple'> Work Experiences</span>
        </h1>
        <div className="w-full mt-3 grid lg:grid-cols-2 grid-cols-1 gap-5">
  
  {workExperience.map((experience, index) => (
    <CardContainer key={index} className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {experience.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {experience.desc}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
            <img 
                src={experience.thumbnail}
                className='w-full h-48 object-cover rounded-lg'
                alt='Experiences'
            />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            // href={experience.twitterLink}
            target="__blank"
            className="px-4 py-2 font-normal *:rounded-xl text-xl dark:text-white"
          >
            {experience.comp}
          </CardItem>
          <CardItem
            translateZ={20}
            // href={experience.twitterLink}
            target="__blank"
            className="px-4 py-2 font-normal *:rounded-xl text-xl dark:text-white hover:text-blue-900"
          >
            {experience.loc}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  ))}
</div>


    
    </div>
    
  )
}

export default Experience