import React from 'react';
import { stats } from '../Constant';
import styles from '../style';

const Stat = () => {
  return (
    <section className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6`}>
        {stats.map((stat)=>{
              return <div key={stat.id} className={`flex-1 flex justify-start items-center m-3`} >
                  <h4 className='font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px]'>{stat.value}</h4>
                  <p className='font-poppins xs:text-[20px] text-[15px] text-gradient uppercase ml-3 xs:leading-[26px] leading-[21px]'>{stat.title}</p>
              </div>
            }
          )
        }
    </section>
  )
}

export default Stat