import React from 'react'
import Clothingnavsection from './navSection/Clothing.navsection'
import Electronicsnavsection from './navSection/Electronics.navsection'
import Homenavsection from './navSection/home.navsection'
import Pagesnavsection from './navSection/Pages.navsection'

const ThirdNavcomponent = () => {
  return (
    <div className='flex justify-between items-center text-sm w-11/12 mx-auto'>
      <Homenavsection/>
      <Clothingnavsection/>
      <Electronicsnavsection/>
      <Pagesnavsection/>
    </div>
  )
}

export default ThirdNavcomponent
