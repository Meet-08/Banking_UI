import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] cursor-pointer rounded-full bg-blue-gradient p-[2px] `}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} z-[2]`}>
          <p className='flex font-poppins font-medium text-[18px] leading-[23px] space-x-1'>
            <span className='text-gradient'>Get</span>
            <img src={arrowUp} alt="arrow" className='w-[23px] h-[23] object-contain' />
          </p>
        </div>

        <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Started</span>    
        </p>

      </div>
    </div>
  )
}

export default GetStarted