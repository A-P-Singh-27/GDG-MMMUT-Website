import React from 'react'
import Header from '../Components/Header.jsx'
import Content from '../Components/Content.jsx'
import RecentWinner from '../Components/RecentWinner.jsx';
import GoogleCloudEvent from '@/Components/GoogleCloudEvent.jsx';
import Leads from '@/Components/Leads.jsx';
import About from '@/Components/About.jsx';
import Footer from '../Components/Footer.jsx';
//import Separator from "@/components/ui/separator.jsx"
import Sponser from './../Components/Sponsers.jsx';
import { Navbar } from '@/stylings/Navbar.jsx';



function Home() {

  return (
    <div>
      <div className='bg-[url({gdglogo})]'>
        {/* Header navbar */}
        <Header />
        {/* content Heading */}
        <Content />
        {/* Recent Winner */}
        <RecentWinner/>
        <hr className='border-4'/>
        {/* cloud events */}
        <GoogleCloudEvent/>
        {/* lead and faculty advicer */}
        <Leads/>
        {/* about */}
        <About/>
        <hr/>
        {/* Sponsers */}
        <h1 className='text-4xl m-5 justify-self-center font-bold'>
        <span className='text-[#0F9D58] '>Our</span>
        <span className='text-[#F4B400] '>&nbsp;Sponsers</span>
        </h1>
        <Sponser/>
        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home