import React from 'react'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa6";
import { SiCsharp } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMysql } from "react-icons/di";



const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <h2 className='my-20 text-center text-4xl text-white'>Skills</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-7xl text-blue-600'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoReact className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-950'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl  text-blue-200'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </div>
            <div className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-white'/>
            </div>
        </div>
    </div>
  )
}

export default Skills