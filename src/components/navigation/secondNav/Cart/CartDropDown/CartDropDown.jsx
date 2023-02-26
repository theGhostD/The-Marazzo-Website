import React from "react";
import MainCartDropDown from "./MainCartDropDown";

const CartDropDown = () => {
  const cartItem = [
    {
      imageUrl: "davii",
      name: "david",
      price: 3000,
      id:1
    },
  ];
  return (
    <div className="absolute right-[120px] top-[120px] bg-gray-300 h-[180px]">
      {cartItem.map((item) => 
        <MainCartDropDown theArr={item}  key={item.id}/>
      )}
    </div>
  );
};

export default CartDropDown;
