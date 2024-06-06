"use client";
import React from 'react';
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
import {motion} from "framer-motion";

/**read the framer-motion docs*/
const iconVariants = (duration) => ({
    initial : {y: -10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});



const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2 
        whileInView={{opacity:0.95, x:0}}
        initial={{opacity: 0, x:+100}}
        transition={{duration: 1.5}}
        className='my-20 text-center text-4xl text-white'>Skills</motion.h2>
        <motion.div 
        whileInView={{opacity:0.95, x:0}}
        initial={{opacity: 0, x:+100}}
        transition={{duration: 1.5}}
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconVariants(2.5)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaHtml5 className='text-7xl text-orange-500'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoCss3 className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)} 
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <IoLogoReact className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaNodeJs className='text-7xl text-green-950'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <FaJava className='text-7xl  text-blue-200'/>
            </motion.div>
            <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-neutral-800 p-4'>
                <DiMysql className='text-7xl text-white'/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Skills