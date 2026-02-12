import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='px-5 py-2 flex justify-between gap-5 bg-stone-800'>
            {/* <img src="/public/image/careio.png" alt="care.io" className='w-[100px]' /> */}
        
            <Link href="/">
            <Image
            className='btn'
            src="/image/careio.png"
            alt="careio"
            width={100}
            height={50}
            priority
          />
            </Link>
         

            <div className='flex justify-between items-center gap-4'>
                <Link href="/" className='btn'>Home</Link>
                <Link href="/services" className='btn'>Services</Link>
                <Link href="/bookings" className='btn'>Bookings</Link>
                <Link href="/my-bookings" className='btn'>My Bookings</Link>
                <Link href="/dashboard" className='btn'>Dashboard</Link>
                <Link href="/auth/login" className='btn'>Login</Link>
                <Link href="/auth/register" className='btn'>Register</Link>
            </div>
        </div>
    );
};

export default Navbar;