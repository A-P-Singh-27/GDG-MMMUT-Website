import React from 'react'
import { EventDetails } from './EventDetails'
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Box } from 'lucide-react';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 1,
    },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function EventCheck() {
  const [ref,controls]=useScrollAnimation();
  const navigate=useNavigate()
  function handleclick(){
    navigate('/registration');
    window.scrollTo(0, 0);
  }
  return (
    <motion.div  initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }} 
    style={{display:"flex", flexDirection:"column", alignItems:"center"} } className='bg-gradient-to-b from-white via-indigo-50 to-gray-100 gap-6 p-2'>
      <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
        Timeline For Active
         </h2>
    
    <motion.div ref={ref}
    animate={controls}
    initial="hidden"
    variants={containerVariants} style={{border:"1px solid transparent"}}>
      
      <motion.div variants={itemVariants} className="  rounded-xl overflow-hidden transform transition-all duration-500 grid grid-cols-1 lg:grid-cols-3  text-sm gap-2" >
      
          <div className="lg:col-span-2 flex flex-col gap-3 " >
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                Event Details
              </h2>
              <EventDetails />
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Google Sans, sans-serif' }}>
                What to Expect
              </h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Keynote sessions from Google Developer Experts
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                  Hands-on workshops with the latest Google technologies
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                  Networking opportunities with fellow developers
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  Exclusive Google I/O swag and merchandise
                </li>
              </ul>
            </div>
          </div>
    <div className="bg-white rounded-xl shadow-lg p-6 h-max flex flex-col gap-5">
      <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Google Sans, sans-serif' }}>
        Register Now
      </h3>
      <img src='https://th.bing.com/th/id/OIP.xo-BCC1ZKFpLL65D93eHcgHaGe?rs=1&pid=ImgDetMain'  width="80rem" style={{marginLeft:"9rem"}}  />
      <p className="text-sm text-gray-500 mt-4 text-center font-bold">Username</p>

      
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200" onClick={handleclick} >
        Reserve Your Spot
      </button>
      <p className="text-sm text-gray-500 mt-4 text-center">
        Limited seats available. Registration closes March 25, 2024
      </p>
    </div>
      
      </motion.div>
    </motion.div>
    </motion.div>
  );
}
