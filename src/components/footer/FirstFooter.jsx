import React from 'react'
import { FaTruck } from "react-icons/fa"
import { ImBriefcase } from 'react-icons/im'
import { MdCall, MdAttachMoney } from "react-icons/md"
const FirstFooter = () => {
  return (
    <div className=' bg-[#e9e9de]'>
        <div className='flex w-11/12 mx-auto justify-between p-10'>
                <div className='custom_flex_center font-medium capitalize flex-col'>
                    <span className='text-[25px] p-4'><FaTruck /></span>
                    <p>we ship worldwide</p>

                </div>
                <div className='custom_flex_center font-medium capitalize flex-col'>
                    <span className='text-[25px] p-4'><MdCall /></span>
                    <p>call +1 800 789 0000</p>

                </div>
                <div className='custom_flex_center font-medium capitalize flex-col'>
                    <span className='text-[25px] p-4'><MdAttachMoney /></span>
                    <p>money back is guarantee</p>

                </div>
                <div className='custom_flex_center font-medium capitalize flex-col'>
                    <span className='text-[25px] p-4'><ImBriefcase /></span>
                    <p>30 days return </p>

                </div>
            </div>
    </div>
      
    
  )
}

export default FirstFooter
