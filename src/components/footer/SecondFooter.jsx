import React from 'react'
import { HiLocationMarker } from "react-icons/hi"
import { FcPhoneAndroid } from "react-icons/fc"
import { Link } from 'react-router-dom'
import { MdEmail } from 'react-icons/md'
const SecondFooter = () => {
    return (

        <div className='bg-[#2e353b] text-gray-50'>
            <div className='flex  items-center w-[95%] mx-auto py-8 text-gray-500'>
                <div className='flex flex-col justify-center items-center w-4/12  pt-2'>

                    <div className='secondFooter_details'>
                        <p className='secondFooter_details_child'><HiLocationMarker /></p>
                        <p>ThemesGround, 789 Main rd, Anytown, CA 12345 USA</p>
                    </div>
                    <div className='secondFooter_details'>
                        <p className='secondFooter_details_child'><FcPhoneAndroid /></p>
                        <p>+ (888) 123-4567 / + (888) 456-7890</p>
                    </div>
                    <div className='secondFooter_details'>
                        <p className='secondFooter_details_child'><MdEmail /></p>
                        <p>marazzo@themesground.com</p>
                    </div>


                </div>


                <div className='flex justify-around items-center w-8/12 '>
                    <div className='flex flex-col justify-center items-center '>
                        <h2 className='font-medium py-4 capitalize text-[18px] text-gray-50'>customer service</h2>
                        <ul>
                            <li><Link>My Account</Link></li>
                            <li><Link>Order History</Link></li>
                            <li><Link>FAQS</Link></li>
                            <li><Link>Specials</Link></li>
                            <li><Link>Help Center</Link></li>
                        </ul>

                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='font-medium py-4 capitalize text-[18px] text-gray-50'>Corporation</h2>
                        <ul>
                            <li><Link>My Account</Link></li>
                            <li><Link>Order History</Link></li>
                            <li><Link>FAQS</Link></li>
                            <li><Link>Specials</Link></li>
                            <li><Link>Help Center</Link></li>
                        </ul>

                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className='font-medium py-4 capitalize text-[18px] text-gray-50'>Why Choose Us </h2>
                        <ul>
                            <li><Link>My Account</Link></li>
                            <li><Link>Order History</Link></li>
                            <li><Link>FAQS</Link></li>
                            <li><Link>Specials</Link></li>
                            <li><Link>Help Center</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SecondFooter
