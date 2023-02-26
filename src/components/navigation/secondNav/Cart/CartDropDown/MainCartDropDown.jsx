import React from 'react'

const MainCartDropDown = ({ theArr }) => {
  const { imageUrl, price, name } = theArr;
  const cartTotal = 0

  return (
    <div className='flex justify-between items-center flex-col '>
      <div className='flex justify-between items-center gap-2 p-[20px]'>
        <div>
          <img src={imageUrl} alt="" />
        </div>
        <p>{name}</p>
        <h3>{price}</h3>
      </div>

      <p>sub total : {cartTotal}</p>
    <button className='bg-sky-500 p-2 rounded-md '>CheckOut</button>
    </div>
  )
}

export default MainCartDropDown
