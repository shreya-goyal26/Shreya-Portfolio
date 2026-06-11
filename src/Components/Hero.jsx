import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";



const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side Content */}
        <div className="md:w-1/2 text-center md:text-left">
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Hi, I'm{" "}
            <span className="text-purple-500">
              Shreya Goyal
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-gray-300 typewriter">
            Full Stack Developer
          </h2>

          <p className="text-lg text-gray-400 leading-relaxed max-w-xl mb-8">
            Aspiring Full Stack Developer passionate about building modern,
            responsive, and scalable web applications using React, Django,
            JavaScript, and C++. I enjoy transforming ideas into real-world
            solutions through clean code, creative design, and continuous
            learning.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            
            <a
              href="#projects"
              className="px-6 py-3 bg-purple-700 rounded-lg font-medium hover:bg-purple-800 transition duration-300"
            >
              View Work
            </a>

            <a
              href="#contact"
              className="px-6 py-3 border border-purple-700 rounded-lg font-medium hover:bg-purple-700/20 transition duration-300"
            >
              Contact Me
            </a>

          </div>
        </div>

        {/* Right Side Image */}
        {/* Right Side Image */}
<div className="md:w-1/2 flex justify-center">
  <div className="relative w-64 h-64 md:w-80 md:h-80">

    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-70 blur-xl"></div>

    <motion.img
      src={assets.profile2Img}
      alt="Profile"
      animate={{ y: [0, -20, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
      className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 border-4 border-white/10"
    />

  </div>
</div>
      </div>
    </motion.div>
  );
};

export default Hero;