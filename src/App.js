import React from "react";
// import bgVideo from "./Happy Holi 2024 By CWS.mp4";
// import specialPerson from "./specialPerson.jpg";
import { motion } from "framer-motion";
const App = () => {
  return (
    <div className="bg-yellow-500 ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover  "
      >
        <source src='./Happy Holi 2024 By CWS.mp4' type="video/mp4" />
        Your browser does not support the video tag.
      </video>


<div className="flex md:flex-row flex-col md:items-center justify-around">

       <div className="relative z-10 text-center md:p-6   max-w-lg">
      <div className="flex flex-col items-center md: justify-center md:min-h-screen text-center md:px-4">
      <h1 className="text-4xl font-extrabold text-white">
        <span className="block text-yellow-400">Hey there!</span>
        <span className="block text-6xl md:text-7xl text-white mt-2">
          I am <span className="text-green-400">Shubh</span>
        </span>
      </h1>

      <p className="mt-4 text-xl font-semibold text-transparent   bg-opacity-50 bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 shadow-lg max-w-2xl">
  Wishing you a festival full of colors, joy, and happiness. May your life be as bright and colorful as Holi!
</p>


      <h2 className="mt-4 text-3xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
        Happy Holi!
      </h2>

      {/* <div className="mt-6 flex space-x-4">
        <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">
          Contact
        </button>
        <button className="px-6 py-2 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition">
          Login
        </button>
      </div> */}
    </div> 
</div>
      {/* Content Section */}
      <div className="relative z-10 text-center p-6  rounded-2xl shadow-xl   max-w-lg">
        {/* Special Person Image */}
        <div className="relative w-32 h-32 mx-auto">
      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-full p-[4px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          background: [
            "linear-gradient(to right, red, yellow, green)",
            "linear-gradient(to right, blue, pink, purple)",
            "linear-gradient(to right, orange, cyan, magenta)",
          ],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <div className="w-full h-full bg-red-500 rounded-full"></div>
      </motion.div>

      {/* Image */}
      <img
        src={"./manu.jpg"}
        alt="Special Person"
        className="w-32 h-32 rounded-full border-4 border-transparent relative z-10 shadow-lg"
      />
    </div>
        {/* Greeting Message */}
        <h1 className="text-4xl font-extrabold bg-black pb-3 rounded-lg bg-opacity-35 mt-4">
          <span className="bg-gradient-to-r   from-red-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
            Happy Holi, Manpreet
          </span>
        </h1>
        <p className="text-lg mt-3 text-gray-100">
        Wishing you a Holi as vibrant as your soul, as joyful as your laughter, and as beautiful as your heart! May your life be painted with endless happiness, love, and success. Stay as amazing as you are—because the world is brighter with you in it! 💖✨🎨 Happy Holi!
        </p>
        
        {/* Action Buttons */}
        <div className="mt-5 text-center">
  <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
    🎨✨ Happy Holi! ✨🎨
  </h2>
  <p className="text-lg text-gray-700 mt-2">
    May your life be as colorful as the Holi colors!  
    Wishing you joy, love, and endless happiness! 🌈💖
  </p>
</div>

      </div>
      </div>

    </div>
  );
};

export default App;
