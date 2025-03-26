"use client";
import React, { useRef, useState } from "react";
import { Col, Row } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { emailValidation } from './EmailValidation';
import emailjs from '@emailjs/browser';
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import ChatBot from "../components/Chatbot";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [error, setError] = useState('');
  const form = useRef();

  const initialValues = {
    from_name: '',
    your_email: '',
    message: ''
  };

  const handleSubmit = (values, actions) => {
    const email = values.your_email;
    const emailCount = localStorage.getItem(email) ? parseInt(localStorage.getItem(email), 10) : 0;

    if (emailCount >= 3) {
      setError('You have reached the limit of 3 emails.');
      actions.setSubmitting(false);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          localStorage.setItem(email, emailCount + 1);
          actions.setSubmitting(false);
          actions.resetForm();
          setError('');
          alert('Email sent successfully!');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setError('An error occurred while sending the email.');
          actions.setSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col-reverse md:grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="flex flex-col-reverse">
        <h5 className="text-xl font-bold text-white my-2 py-12">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://www.github.com">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <ChatBot/>
         
        </div>
      </div>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={emailValidation}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form ref={form} className="flex flex-col">
              {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
              <Row>
                <Col lg="6" className="form-group mb-4">
                  <Field
                    name="from_name"
                    type="text"
                    className="form-control bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Name"
                  />
                  <ErrorMessage name="from_name" component="div" className="text-red-500 text-sm mt-1" />
                </Col>
                <Col lg="6" className="form-group mb-4">
                  <Field
                    name="your_email"
                    type="email"
                    className="form-control bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Email"
                  />
                  <ErrorMessage name="your_email" component="div" className="text-red-500 text-sm mt-1" />
                </Col>
                <Col lg="12" className="form-group mb-4">
                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    className="form-control bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                    placeholder="Message"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                </Col>
                <Col lg="12">
                  <button
                    type="submit"
                    className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg w-full p-2.5"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default EmailSection;
