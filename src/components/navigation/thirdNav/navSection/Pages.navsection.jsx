import React, { useState } from 'react'
import { onMouseMovement } from '../../../TempStore/Temp.store';

const Pagesnavsection = () => {
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const handler = ()=> onMouseMovement(isPagesOpen,setIsPagesOpen)

    return (
        <div>
            <div className='navsection_parent ' onMouseEnter={handler} onMouseLeave={handler} >Pages</div>
            {
                isPagesOpen ? (
                    <div className='navsection top-[190px] w-2/12 md:right-[5px] '>
                        i am Pages dropdown
                    </div>
                ) : null
            }

        </div>
    )
}

export default Pagesnavsection
