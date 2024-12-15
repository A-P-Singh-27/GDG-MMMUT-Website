
import { DIV } from '@/stylings/DIV'

import { EventHero } from '@/Components/EventsHero'
import { RecentEvents } from '@/Components/RecentEvents'
import EventCheck from '@/Components/EventCheck'
import { Title } from '@radix-ui/react-dialog'
import Header from '@/Components/Header'
import Sponsers from '@/Components/Sponsers'
import Footer from '@/Components/Footer'
import EventFooter from '@/Components/EventFooter'


export default function Events() {
  return (
    <DIV>
        <Header />
        <EventHero />
        
        <DIV >
            <h1 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 text-center'>Our Events</h1>
            <p style={{fontSize:"1.1rem", letterSpacing:"1px", color:"#6A6A6A", textAlign:"center"}}>Dive into innovation , collaboration, and inspiration. Join us at our events where ideas turn into action, and dreams become reality!</p>
            <div style={{display:"flex", justifyContent:"center"}}>
              <input className="flex rounded-md text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground  disabled:cursor-not-allowed disabled:opacity-50 md:text-sm `${styles.input}`" style={{border:"1px solid #E84FC0", outline:"none", padding:"0.8rem", width:"75%"}} onMouseEnter={(e)=>e.target.style.border="1px solid #E84FA6"} placeholder="Search for Our Events " />
            </div>
            <RecentEvents />
            <EventCheck />

            <div className='text-center p-5 bg-gradient-to-b from-white via-indigo-50 to-gray-100 flex flex-col gap-5'>
              <h2 className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>Our Sponsers</h2>
              <Sponsers />
            </div>
            <EventFooter />
        </DIV>
    </DIV>
  )
}
