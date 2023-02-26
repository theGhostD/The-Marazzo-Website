import React from 'react'
import FirstNavcomponent from '../firstNav/FirstNav.component'
import SecondNavcomponent from '../secondNav/SecondNav.component'
import ThirdNavcomponent from '../thirdNav/ThirdNav.component'

const Navigationcomponent = () => {
  return (
    <div className='bg-sky-600 grid col-span-3  text-gray-200 text-sm'>
      <FirstNavcomponent/>
      <SecondNavcomponent/>
      <ThirdNavcomponent />
    </div>
  )
}

export default Navigationcomponent
