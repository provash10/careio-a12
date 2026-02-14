// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const Navbar = () => {
//     return (
//         <div className='px-5 py-2 flex justify-between gap-5 bg-stone-800'>
//             {/* <img src="/public/image/careio.png" alt="care.io" className='w-[100px]' /> */}
        
//             <Link href="/">
//             <Image
//             className='btn'
//             src="/image/careio.png"
//             alt="careio"
//             width={100}
//             height={50}
//             priority
//           />
//             </Link>
         

//             <div className='flex justify-between items-center gap-4'>
//                 <Link href="/" className='btn'>Home</Link>
//                 <Link href="/services" className='btn'>Services</Link>
//                 <Link href="/bookings" className='btn'>Bookings</Link>
//                 <Link href="/my-bookings" className='btn'>My Bookings</Link>
//                 <Link href="/reviews" className='btn'>Reviews</Link>
//                 <Link href="/dashboard" className='btn'>Dashboard</Link>
//                 <Link href="/auth/login" className='btn'>Login</Link>
//                 <Link href="/auth/register" className='btn'>Register</Link>
//             </div>
//         </div>
//     );
// };

// export default Navbar;

"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-5 py-2 bg-stone-800 flex justify-between items-center">
      {/* Logo */}
      <Link href="/">
        <Image
          className="btn"
          src="/image/careio.png"
          alt="careio"
          width={100}
          height={50}
          priority
        />
      </Link>

      {/* Hamburger for small screens */}
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <button className="text-white focus:outline-none">
          {/* Simple hamburger icon */}
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Links */}
      <div className={`flex-col md:flex md:flex-row md:items-center gap-4 absolute md:static bg-stone-800 w-full md:w-auto left-0 md:left-auto transition-all duration-300 ${open ? 'top-14 flex' : 'top-[-500px] hidden'}`}>
        <Link href="/" className="btn">Home</Link>
        <Link href="/services" className="btn">Services</Link>
        <Link href="/bookings" className="btn">Bookings</Link>
        <Link href="/my-bookings" className="btn">My Bookings</Link>
        <Link href="/reviews" className="btn">Reviews</Link>
        <Link href="/dashboard" className="btn">Dashboard</Link>
        <Link href="/auth/login" className="btn">Login</Link>
        <Link href="/auth/register" className="btn">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
