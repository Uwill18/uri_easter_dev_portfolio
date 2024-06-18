"use client";
import React, { useRef,useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { Col, Container, Row } from 'react-bootstrap';
import { TbMessageChatbot } from "react-icons/tb";
import ChatBot from "../../public/chatbot2.png";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
    .sendForm('service_263uo2o', 'template_09719ts', form.current, {
      publicKey: 'mPSFhBKSQNYxDamR9',
    })
    .then(
      () => {
        e.target.reset();
        console.log('SUCCESS!');
        alert('Email sent!')
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div 
      
      className="">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="linkedin.com">
            <Image src={ChatBot} 
            alt="Virtual Assistant" 
            height={48} 
            width={48}/>
          </Link>
        
            {/* <TbMessageChatbot className="text-white" width={150} height={150}/> */}
          
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form ref={form} className="flex flex-col" onSubmit={handleSubmit}>
            <Row>
                  <Col lg='6' className='form-group'>
                    <input
                      className='form-control bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4 mt-2'
                      id="name"
                      name="your_name"
                      placeholder='Name'
                      type="text"
                      autoComplete='given-name'
                    />
                  </Col>
                  <Col lg='6' className='form-group'>
                    <input
                      className='form-control rounded-0 bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 mb-4'
                      id="email"
                      name="your_email"
                      placeholder='Email'
                      type="email"
                      autoComplete='on'
                    />
                  </Col>
                  <Col>
                        <textarea className='form-control rounded-0 
bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm  block w-full p-2.5 rounded-lg mb-4' 
                                id="message"
                                name="message"
                                placeholder='Message'
                                rows='5'>
                      </textarea>
                    
                  </Col>
                  <Col lg='12' className='form-group'>
                    <button className='btn ac_btn bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' type="submit">
                      Send
                    </button>
                  </Col>
                </Row>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;