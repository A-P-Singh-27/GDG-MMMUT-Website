import BottomTabBar from '@/Components/BottomTabBar'
import EventFooter from '@/Components/EventFooter'
import Footer from '@/Components/Footer'
import Header from '@/Components/Header'
import React from 'react'

export default function Blogs() {
  return (
    <>
    <div className="hidden sm:block">
          <Header className="hidden sm:block"/>
        </div>
          <BottomTabBar/>
    <p className='text-center'>Soon.....</p>
    <div  className='mt-56'>
    <Footer />
    </div>
    </>
  )
}
