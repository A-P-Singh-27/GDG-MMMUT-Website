import React from 'react'
import AllLeads from '@/utils/AllLeads.jsx'
import Advisor from '@/utils/Advisor.jsx'

function Leads() {


  return (
    <div className='h-fit w-full pt-0 p-[2rem] flex flex-col flex-wrap'>
      <h1 id='Team' className='text-3xl text-balance font-bold pb-0 sm:pb-10 justify-self-center sm:text-3xl md:text-4xl lg:text-5xl'>Core Team of GDG-MMMUT</h1>
      <div className='w-full h-[90%] flex flex-row flex-wrap gap-y-4 gap-x-2 justify-around p-5 md:gap-x-0 lg:gap-x-4'>

        {/* md:flex md:flex-row sm:flex sm:flex-row */}
        <div className='w-[30%] min-w-[100%] sm:min-w-[24rem] md:min-w-[32rem] h-[100%] bg-blue-200 p-4 '>
          <h1 className='font-bold text-2xl text- text-[#0F9D58] justify-self-center'>Faculty Advisor</h1>
          <Advisor />
        </div>
        <div className='w-[60%] min-w-[100%] sm:min-w-[32rem] bg-blue-500'>
          <AllLeads />
        </div>
      </div>
    </div>
  )
}

export default Leads