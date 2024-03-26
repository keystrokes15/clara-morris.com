
"use client"
import React from "react"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import Link from "next/link"

const MainSection = () => {
    return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Welcome to {" "}
                </span>
                <br></br>
                <TypeAnimation sequence={['XXs Portfolio', 2000, 'My Website', 2000]} // XX is client's "name" - for privacy reasons
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
                </h1>
                    <p className = "text-white text-base sm:text-lg lg:text-xl mb-6"> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                    <div>
                        <Link href="https://linkedin.com" target="_blank"> {/* // will link to client's linkedin but for privacy reasons is linked to just normal linkedin */}
                            <button className="px-4 py-1.5 w-full sm:w-fit sm:px-4 rounded-full mb-2 sm:mb-0 mr-3 bg-blue-600 hover:bg-blue-500 border border-blue-600 hover:border-blue-500 transition-colors text-white">Hire Me</button>
                        </Link>
                        <Link href="/documents/cover-letter.pdf" target="_blank"> {/* this is a fake cover letter to maintain privacy */}
                            <button className="px-4 py-1.5 w-full sm:w-fit rounded-full bg-zinc-900 transition-colors hover:bg-[#27272c] border border-white text-white">Download CV</button>
                        </Link>
                    </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0"> 
                {/* clients pfp will be here but for privacy reasons ive replaced it with an unsplash picture - Photo by Meiying Ng on Unsplash */}
                <div className="rounded-full bg-[#111113] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden"> 
                    <Image
                        src="/images/city.jpg"
                        alt="profile picture"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-full" 
                    />
                </div>
            </motion.div>
        </div>
    </section>
    )
}

export default MainSection;