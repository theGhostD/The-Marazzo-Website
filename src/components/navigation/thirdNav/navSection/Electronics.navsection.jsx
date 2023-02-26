import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { onMouseMovement } from '../../../TempStore/Temp.store';

const Electronicsnavsection = () => {
    const [isElectronicOpen, setIsElectronicOpen] = useState(false);

   const theHandler = ()=> onMouseMovement(isElectronicOpen,setIsElectronicOpen)

    return (
        <div>
            <div className='navsection_parent' onMouseEnter={theHandler} onMouseLeave={theHandler} >Electronic<span className='hot bg-yellow-500 '>New <span className='absolute top-[18px] text-yellow-500 right-4'><AiFillCaretDown className="text-xs" /></span></span></div>
            {
                isElectronicOpen ? (
                    <div className='navsection top-[190px] w-11/12  md:right-[40px] '>
                        i am Electronic dropdown
                    </div>
                ) : null
            }

        </div>
    )
}

export default Electronicsnavsection
