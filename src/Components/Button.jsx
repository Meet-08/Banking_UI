import React from 'react'

const Button = ({styles}) => {
  return (
    <button className={`font-poppins font-medium text-[18px] text-primary outline-none rounded-lg py-3 px-5 bg-blue-gradient ${styles}`}>
      Get{" "}Started
    </button>
  )
}

export default Button