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
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-stone-900 sticky top-0 z-[100] shadow-md border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Main Header Row */}
        <div className="px-5 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="btn !p-1 h-[38px] min-w-[110px] flex items-center justify-center">
            <Image
              src="/image/careio.png"
              alt="careio"
              width={100}
              height={50}
              priority
              className="hover:opacity-90 transition active:scale-95 object-contain"
            />
          </Link>

          {/* Hamburger for small screens */}
          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <button className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition active:bg-white/20">
              {open ? (
                <FaTimes className="text-xl transition-all duration-300 rotate-90" />
              ) : (
                <FaBars className="text-xl transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-2">
            <Link href="/" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Home</Link>
            <Link href="/services" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Services</Link>
            <Link href="/bookings" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Bookings</Link>
            <Link href="/my-bookings" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">My Bookings</Link>
            <Link href="/reviews" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Reviews</Link>
            <Link href="/dashboard" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Dashboard</Link>
            <Link href="/addservice" className="btn text-sm min-w-[110px] h-[38px] flex items-center justify-center">Add Service</Link>
            <Link href="/auth/login" className="btn text-sm min-w-[80px] h-[38px] flex items-center justify-center">Login</Link>
            <Link href="/auth/register" className="btn text-sm min-w-[100px] h-[38px] flex items-center justify-center">Register</Link>
          </div>
        </div>

        {/* Mobile Menu (Pushing content down, extremely slim, right-aligned) */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${open ? 'max-h-[550px] border-t border-white/5 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col items-end gap-1.5 p-3 bg-stone-900">
            <div className="w-full max-w-[140px] space-y-1">
              <Link href="/" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Home</Link>
              <Link href="/services" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Services</Link>
              <Link href="/bookings" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Bookings</Link>
              <Link href="/my-bookings" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">My Bookings</Link>
              <Link href="/reviews" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Reviews</Link>
              <Link href="/dashboard" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Dashboard</Link>
              <Link href="/addservice" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Add Service</Link>
              <Link href="/auth/login" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Login</Link>
              <Link href="/auth/register" onClick={() => setOpen(false)} className="btn text-center block w-full h-[40px] flex items-center justify-center text-sm">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
