import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
        <div className={layout.sectionImgReverse}>
            <img src={bill} alt="bill" 
                  className='w-[100%] h-[100%] relative z-[5] ' />
            
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] rounded-full white__gradient'></div>
            <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] rounded-full pink__gradient'></div>
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              Easily control your billing & invoicing.
            </h2>

            <p className={`${styles.paragraph} mX-W-[470PX] mt-5`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, in aperiam? Aliquid dolore asperiores enim repudiandae, porro perferendis blanditiis laborum eius, magni fugiat              
            </p>
            
            <div className='flex flex-wrap sm:mt-10 mt-6'>
               <img src={apple} alt="app_play"
                    className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}/>
               <img src={google} alt="google_play" 
                    className={`w-[128px] h-[42px] object-contain mr-5 cursor-pointer`}/>
            </div>

        </div>

    </section>
  )
}

export default Billing