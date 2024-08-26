import React from 'react'
import { BentoGrid, BentoGridItem } from './BentoGrid'
import { it } from 'node:test'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className='w-full py-20'>

            {gridItems.map((item) =>(
                <BentoGridItem 
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                imgClassName={item.imgClassName}
                titleClassName={item.titleClassName}

                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid