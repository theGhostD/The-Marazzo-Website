import React, { useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai';
import { onMouseMovement } from '../../../TempStore/Temp.store';

const Clothingnavsection = () => {

    const [isClothingOpen, setIsClothingOpen] = useState(false);

    const handler = ()=> onMouseMovement(isClothingOpen,setIsClothingOpen)

    return (
        <div>
            <div className='navsection_parent cur' onMouseEnter={handler} onMouseLeave={handler} >Clothing <span className='hot bg-red-500 '>hot <span className='absolute top-[18px] text-red-500 right-4'><AiFillCaretDown className="text-xs" /></span></span></div>
            {
                isClothingOpen ? (
                    <div className='navsection top-[190px] w-11/12 md:right-[40px] '>
                        i am clothing dropdown
                    </div>
                ) : null
            }

        </div>
    )
}

export default Clothingnavsection
