import React, { useEffect, useState } from 'react';
import pointerBtn from './../assets/pointerBtn.svg';
import { Link } from 'react-router-dom';
import Logo from './Logo';


function Content() {
    const [showPointer, setShowPointer] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setShowPointer(true);
            setTimeout(() => {
                setShowPointer(false);
            }, 1000); // Display pointer for 1 second
        }, 3000); // Trigger every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-start min-h-full bg-gray-100 py-[5rem] sm:py-[4rem] md:py-[3rem]">
      {/* Main Heading */}
      <h1 className="text-4xl flex flex-wrap justify-center items-center sm:text-5xl md:text-6xl md:px-4 font-bold text-blue-600 mb-4 text-center">
        <span className="text-[#DB4437]">Google</span>
        <span className="text-[#F4B400]">&nbsp;Developer</span>
        <span className="text-[#0D652D]">&nbsp;Groups</span>
      </h1>

      {/* Subheading */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-500 mb-4 text-center">
        On Campus Programme
      </h2>

      {/* Description */}
      <p className= "px-5 text-base sm:text-lg md:text-xl text-[#E37400] mb-6 text-center">
        Madan Mohan Malaviya University of Technology, Gorakhpur
      </p>

      {/* Image container */}
      <div className="w-full flex justify-center items-center">
      <div className="relative w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 flex items-center justify-center">
  {/* Logo Image container (visible on small screens) */}
  <div
    className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 py-2 rounded-full bg-white shadow-md transition-opacity duration-300 ${
      showPointer ? 'opacity-0' : 'opacity-100' // Hide logo image when pointer is visible
    }`}
  >
    <a href="#Team">
      <Logo />
    </a>
  </div>

  {/* Pointer button container (visible on larger screens) */}
  <div
    className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 py-2 rounded-full bg-white shadow-md transition-opacity duration-300 ${
      showPointer ? 'opacity-100 shadow-xl' : 'opacity-0'
    } sm:opacity-100`} // Show pointer button on sm and larger screens
  >
    <a href="#Team">
      <img src={pointerBtn} alt="click image" loading="lazy" />
    </a>
  </div>

  {/* Black overlay visible only when logo image is visible */}
  {!showPointer && (
    <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-blue-400 opacity-50 rounded-full"></div>
  )}
</div>

      </div>
    </div>
    );
}

export default Content;
