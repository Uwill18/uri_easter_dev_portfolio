"use client";
import React from 'react';
import Image from 'next/image';
import './HeroSection.css';
import {TypeAnimation} from 'react-type-animation';





/**bg-clip + gradient makes the first line of text colorful 
*/

/**how to download pdf for resume
 * https://www.youtube.com/watch?v=JZU2b8U9d54
 * https://stackoverflow.com/questions/56348979/reactjs-downloading-a-pdf-file-failed-no-file
 */
const HeroSection = () => {

  return (
    <section>
      <div
      initial={{opacity:0, scale:0.5}}
      animate={{opacity:1, scale:1}}
      transition={{duration: 0.5}}
       className='grid grid-cols-1 sm:grid-cols-12'>
      <div className='col-span-7 place-self-center'>
        <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
         <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600'>
         Hello, I&apos;m Uri{" "}
         </span>
         <br/>
         <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Your Web Developer',
        2000,
        'Your Frontend Developer',
        2000,
        'Your Full-Stack Developer',
        2000
      ]}
      wrapper="span"
      speed={5}
      repeat={Infinity}
    />
          </h1>
        <p className='text-[#ADB7BE] text-lg mb-6 lg:text-xl'>
        Experienced full-stack software developer with expertise in front-end and back-end technologies. 
        Proficient in HTML5, CSS3, JavaScript, React.js, Node.js, and Java.
        </p>
        <div>
          <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black'>Hire Me</button>
          <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white border '>
            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
              <a 
              download ="EasterResume.pdf"
              href="/resume/EasterResume.pdf"
              target="_blank"
              alt="my cv"
              rel="noopener noreferrer"> 
                Download CV
              </a>
            </span>
            </button>
        </div>
        </div>
        <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
          <div className='lg:w-[400px] lg:h-[400px] relative'>
            <Image 
            src="/images/hero-image4.png"
            alt="hero-image"
            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 hero-image  w-[100%] h-[100%] bg-[#181818] rounded-full'
            width={400}
            height={400}/>
          </div>
          

        </div>
      </div>
    </section>
  )
}


export default HeroSection;