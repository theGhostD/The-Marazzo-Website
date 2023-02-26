import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../footer/footer'
import FirstNavcomponent from '../firstNav/FirstNav.component'
import SecondNavcomponent from '../secondNav/SecondNav.component'
import ThirdNavcomponent from '../thirdNav/ThirdNav.component'

const Navigationcomponent = () => {
  return (
    <>
    <div className='bg-[#157ed2] grid col-span-3  text-gray-200 text-sm'>
      <FirstNavcomponent/>
      <SecondNavcomponent/>
      <ThirdNavcomponent />
      
    </div>
    <Outlet />
    <Footer/>
    </>
    
  )
}

export default Navigationcomponent
