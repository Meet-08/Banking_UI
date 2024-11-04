import React from 'react'
import { clients } from '../Constant'
import styles from '../style'

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>
          {
            clients.map(
              (client)=>{
                return <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] sm:my-0 my-5`}>
                  <img src={client.logo} alt={client.id} 
                       className='sm:[192px] w-[100px] rounded-md object-contain hover:bg-dimWhite'/>
                </div>
              }
            )
          }
      </div>

    </section>
  )
}

export default Clients