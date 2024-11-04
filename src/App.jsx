import React from 'react'
import style from "./style"
import { Navbar, Business, Button, Billing, CardDeal, Clients, CTA, FeedbackCard, Footer, GetStarted, Hero, Stat, Testimonial } from './Components'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
            {/*  Navbar  */}
        <div className={`${style.paddingX} ${style.flexCenter}`}>

            <div className={`${style.boxWidth}`}>
                <Navbar />
            </div>
        </div>

            {/* Hero Section */}
        <div className={`bg-primary ${style.flexStart}`}>
            <div className={`${style.boxWidth}`}>
                <Hero/>
            </div>
        </div>

             {/* Sub Section */}
         <div className={`bg-primary ${style.paddingX} ${style.flexStart}`}>
             <div className={`${style.boxWidth}`}>
                 <Stat/>
                 <Business/>
                 <Billing/> 
                 <CardDeal />
                 <Testimonial/> 
                 <Clients/> 
                 <CTA/> 
                 <Footer/> 
             </div>
         </div>
    </div>
  )
}

export default App