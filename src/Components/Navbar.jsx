import React, { useState } from 'react';
import { close, logo, menu } from "../assets"
import { navLinks } from "../Constant/index"


const Navbar = () => {

  const [toggle,setToggle] = useState(false);

  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
        <img src={logo} alt="" className='w-[124px] h-[32px]' />
        <ul className='list-none sm:flex hidden justify-end items-center text-white z-[2]'>
           {navLinks.map((nav,index)=>{
                return <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              }
            )
           }
        </ul>

        {/* For mobile */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
           <img src={toggle ? close : menu} alt="Menu" 
                className='w-[28px] h-[28px] object-contain'
                onClick={()=>setToggle(!toggle)}/>

            {/* Menu */}
            <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
            <ul className='list-none flex flex-col justify-end items-center text-white z-[2]'>
                {navLinks.map((nav,index)=>{
                  return <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} sidebar`}>
                    <a href={`#${nav.id}`}>
                      {nav.title}
                    </a>
                  </li>
              }
            )
           }
        </ul>   
            </div>
        </div>

    </nav>
  )
}

export default Navbar