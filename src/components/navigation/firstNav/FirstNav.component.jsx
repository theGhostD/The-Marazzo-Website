import React, { useState } from "react";

const FirstNavcomponent = () => {
    const [currency, setcurrency] = useState(false);
    const [Lang, setLang] = useState(false);

    const mouseEnterHandler = ()=>{
        setcurrency(!currency)
    }

    const mouseLeaveHandler = ()=>{
        setcurrency(!currency)
    }
    return (
        <div className="flex justify-between items-center gap-10 w-11/12 m-auto pt-1">
            <div className="flex justify-between items-center gap-10">
                {/* first dropdown */}
                <div>
                    <div
                        className="relative cursor-pointer"
                        onMouseEnter={mouseEnterHandler }
                        onMouseLeave={mouseLeaveHandler}
                    >USD</div>

                    <div
                        className={`${currency ? "bg-gray-100 absolute  top-10 left-20 " : "hidden"
                            }`}
                    >
                        <ul className="p-2 text-center capitalize text-sm ">
                            <li className="drop_down">USD</li>
                            <li className="drop_down">INR</li>
                            <li className="drop_down">GBP</li>
                        </ul>
                    </div>
                </div>
                {/* second dropdown  */}
                <div>
                    <div
                        className="relative  cursor-pointer"
                        onMouseEnter={() => setLang(!Lang)}
                        onMouseLeave={() => setLang(!Lang)}
                    >English</div>

                    <div
                        className={`${Lang ? "bg-gray-100 absolute  top-10 left-40 " : "hidden"
                            }`}
                    >
                        <ul className="">
                            <li className="drop_down">English</li>
                            <li className="drop_down">French</li>
                            <li className="drop_down">German</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div>
                <ul className="flex justify-center items-center gap-5">
                    <li className="nav-link">My Account</li>
                    <li className="nav-link">Wishlist</li>
                    <li className="nav-link">My Cart</li>
                    <li className="nav-link">CheckOut</li>
                    <li className="nav-link">Login</li>
                </ul>
            </div>
        </div>
    );
};

export default FirstNavcomponent;
