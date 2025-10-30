import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex gap-5 items-center justify-center font-[font2] text-[6.5vw] text-white'>
        <Link className=' hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] px-7 pt-5 uppercase border-5 rounded-full' to="/projects">Projects</Link>
        <Link className=' hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[5.5vw] px-7 pt-5 uppercase border-5 rounded-full' to="/agence">Agence</Link>
    </div>
  )
}

export default HomeBottomText