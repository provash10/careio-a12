"use client";
import React, { useState } from 'react';

const CartButton = () => {
    const [inCart, setInCart] = useState(false);

    const handleadd2Cart=()=>{
        setInCart(true)
    }
    return (
        <button onClick={handleadd2Cart} disabled={inCart}
         className='flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-800 disabled:bg-red-600'>
            {
                inCart ? "Added" : "Not Book/Added"
            }
            Add To Cart
        </button>
    );
};

export default CartButton;