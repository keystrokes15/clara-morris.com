"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const EmailSection = () => { // email section will utilise resend to send emails to client, but for privacy purposes ive been asked to leave that implementation out so this is basically the template
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: 2.8 }}
    className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
    id="contact"
  >
    <div>
      <h5 className="text-xl font-bold text-white mb-5 md:mb-2">Let&apos;s Connect!</h5>
      <p className="text-zinc-400 mb-4 max-w-md">
        Hey there! I&apos;m always eager to connect with new people. Whether you have a question, want to discuss a project, or just want to say hello, my inbox is always open for you.
      </p>
      <div className="socials flex flex-row gap-2 ">
        <Link href="https://github.com" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="h-6 w-6 mr-1.5 text-zinc-400 hover:text-white transition-colors" />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-zinc-400 hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
    <form className="mb-4">
      <div>
        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Enter Your Email</label>
        <input name="email" type="email" id="email" required placeholder="your-email@gmail.com" className="bg-zinc-900 border border-zinc-800 placeholder-zinc-500 text-zinc-200 text-sm rounded-lg block w-full p-2.5 mb-5" />
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
        <input name="subject" type="subject" id="subject" required placeholder="Subject of your message" className="bg-zinc-900 border border-zinc-800 placeholder-zinc-500 text-zinc-200 text-sm rounded-lg block w-full p-2.5 mb-5" />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
        <textarea name="message" id="message" required placeholder="Your message here" className="bg-zinc-900 border border-zinc-800 placeholder-zinc-500 text-zinc-200 text-sm rounded-lg block w-full p-2.5 mb-5"></textarea>
      </div>
      <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-colors">Send</button>
    </form>
  </motion.section>
);
};

export default EmailSection;