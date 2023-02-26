import React, { useState } from 'react'
import { FaCartPlus } from 'react-icons/fa'
import CartDropDown from './CartDropDown/CartDropDown'

const Cart = ({ theObj }) => {
    // const {cartCount,cartTotal} = theObj
    const cartCount = 25
    const cartTotal = 5454
    const [isCartOpen, setisCartOpen] = useState(false)

    const CartToggler = ()=>{
        setisCartOpen(!isCartOpen) 
    }
    return (
        <>
            <div onClick={CartToggler} className="flex justify-center gap-5 items-center w-2/12 relative">
                <div>
                    <div className=' text-[65px]'><FaCartPlus /></div>
                    <span className='absolute top-[10px] right-[135px] border-yellow-700 text-sm p-[5px] bg-yellow-500 rounded-full '>{cartCount}</span>
                </div>

                <div>
                    <h3 className='w-full'>Shopping Cart</h3>
                    <h1 className='text-lg font-bold'>${cartTotal}</h1>
                </div>
            </div>
            {
                isCartOpen ? <CartDropDown /> : null
            }
        </>

    )
}

export default Cart
