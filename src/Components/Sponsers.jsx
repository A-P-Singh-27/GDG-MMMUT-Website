import React from 'react'
import google from './../assets/google.svg';
import adobe from './../assets/adobe.svg';
import amazon from './../assets/amazon.svg';
import flexport from './../assets/flexport.svg';
import deloitte from './../assets/deloitte.svg';
import bombora from './../assets/bombora.svg';
import sponserbg from './../assets/sponsorbg.svg';


function Sponsers() {
  return (
    <div
      className='h-[20rem] w-full'
      style={{ backgroundImage: `url(${sponserbg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        
         <ul className='flex gap-8 flex-wrap lg:relative'>
                <div className='flex flex-wrap justify-around w-[50rem]'>
                <li className='lg:absolute lg:top-[8rem] lg:left-[50%]'><img src={google} alt="" className='w-[11rem] h-[8rem] rounded-full'/></li>
                <li className='lg:absolute lg:top-[2.5rem] lg:left-[30%]'><img src={adobe} alt="" className='w-[8rem] h-[8rem] rounded-r-full'/></li>
                </div>
                <div className='flex flex-wrap justify-around w-[50rem]'>
                <li className='lg:absolute lg:top-[9rem] lg:left-[10%]'><img src={amazon} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-r-full'/></li>
                <li className='lg:absolute lg:top-[14rem] lg:right-[1rem]'><img src={bombora} alt="" className='w-[5rem] h-[4rem]'/></li>
                </div>
                <div className='flex flex-wrap justify-around w-[50rem]'>
                <li className='lg:absolute lg:top-[9rem] lg:right-[25%]'><img src={deloitte} alt="" className='w-[8rem] h-[4rem] rounded-r-full'/></li>
                <li className='lg:absolute lg:top-[1rem] lg:right-[1rem]'><img src={flexport} alt="" className='w-[5rem] h-[4rem] rounded-xl rounded-l-full'/></li>
                </div>
                </ul>

    </div>
  )
}

export default Sponsers