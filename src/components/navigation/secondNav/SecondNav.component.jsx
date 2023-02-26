import React from 'react'
import logo from "../../../Assets/logo/marazzo_logo.png"
import Cart from './Cart/Cart'
import SearchBar from './SearchBar'

const SecondNavcomponent = () => {
  return (
    <div className='flex justify-between items-center py-7 gap-6  w-11/12 m-auto'>
      <div >
        <img src={logo} alt="The_logo"   />
      </div>
      <SearchBar/>
      <Cart/>
    </div>
  )
}

export default SecondNavcomponent
