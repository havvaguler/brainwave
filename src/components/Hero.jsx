
import { curve, robot } from '../assets'
import Button from './Button'
import Section from './Section'
import { BackgroundCircles, BottomLine } from './design/Hero'
import { heroIcons } from '../constants'
import { ScrollParallax } from 'react-just-parallax'
import { useRef } from 'react'
import Genereting from './Genereting'
import CompanyLogos from './CompanyLogos'

const Hero = () => {
    const parallaxRef = useRef(null);
  return (
    <Section 
        className='pt-[12rem] -mt-[5.25rem]'
        crosses
        crossesOffset='lg:translate-y-[5.25rem]'
        customPaddings
        id='hero'
    >
        <div className='container relative' ref={parallaxRef}>
            <div className='relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]'>
                <h1 className='h1 mb-6'>
                    Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{' '}
                    <span className='inline-block relative'>Brainwave 
                        <img src={curve} className='absolute top-full left-0 w-full xl:mt-2'
                        width={624}
                        height={28}
                        alt='curve'
                        />
                    </span>
                </h1>
                <p className='body-1 max-w-3xl mx-auto text-n-2 mb-6 lg:mb-8'>
                    Unleash the power of AI within Brainwave.Upgrade your productivity with Brainwave, the open AI chat app.
                </p>
                <Button href='/pricing'>
                    Get started
                </Button>    
            </div>
            <BackgroundCircles/> 
            <div className='relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24 z-5'>
                    <div className='aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]'>
                        <img 
                            src={robot} 
                            className='w-full'
                            width={1024}
                            height={490}
                            alt='AI'   
                        />
                        <Genereting className='absolute left-4 right-4 bottom-8 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem]md:-translate-x-1/2'/>
                        <ScrollParallax isAbsolutelyPositioned>
                            <ul className='hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex'>
                            {heroIcons.map((icon, index) => (
                                <li className='p-5' key={index}>
                                    <img src={icon} alt="Icon image" width={24} height={25}/>
                                </li>
                            ))}
                            </ul>
                        </ScrollParallax>    
                    </div>                                  
            </div>

            <CompanyLogos className= 'hidden relative z-10 mt-20 lg:block'/>                
        </div>
        <BottomLine/>                        
    </Section>  
    
  )
}

export default Hero
