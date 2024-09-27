import React from 'react'
import Section from './Section'
import Heading from './Heading'
import { benefits } from '../constants'
import Arrow from '../assets/svg/Arrow'
import {GradientLight} from './design/Benefits'

const Benefits = () => {
  return (
    <Section id='features'>
        <div className='container relative z-2'>
            <Heading
                className= 'md:max-w-md lg:max-w-2xl'
                title= 'Chat Smarter, Not Harder with Brainwave'
            />
            <div className='flex flex-wrap mb-10 gap-7'>
                {benefits.map(item => {
                    return (
                        <div 
                            key={item.id}
                            className='block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]'
                            style={{
                                backgroundImage: `url(${item.backgroundUrl})`,
                            }}

                            >
                            <div className='relative z-2 flex flex-col min-h-[22rem] p-[2rem] pointer-events-none'>
                                <h5 className='h5 mb-5'>{item.title}</h5>
                                <p className='body-2 text-n-3 mb-20'>{item.text}</p>                         
                                <div className='flex items-center'>
                                    <img 
                                        src={item.iconUrl} 
                                        alt={item.title}
                                        width={48}
                                        height={48}
                                    />
                                    <p className='ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider'>Explore More</p>
                                    <Arrow/>
                                </div>
                            </div>
                            {item.light && <GradientLight/> }
                        </div>
                    )
                })}
            </div>
        </div>
    </Section>
  )
}

export default Benefits


/* Section id vermemizin sebebi linke tıkladığında yönlendirme yapmak */
/* tailwind body-2 ne işe yarıyor */