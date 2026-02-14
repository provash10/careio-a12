import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-gray-300 pt-12 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & About */}
        <div>
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
          {/* <h2 className="text-2xl font-bold text-white">Care.io</h2> */}
          <p className="mt-4 text-sm leading-6">
            Providing trusted baby sitting, elderly care and special home care services.
            Making caregiving simple, safe and accessible for everyone.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/services" className="hover:text-white">Services</Link></li>
            <li><Link href="/my-bookings" className="hover:text-white">My Bookings</Link></li>
            <li><Link href="/auth/login" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Baby Care</li>
            <li>Elderly Care</li>
            <li>Sick People Care</li>
            <li>Home Assistance</li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-sm">Dhaka, Bangladesh</p>
          <p className="text-sm">Email: provash20cb@gmail.com</p>
          <p className="text-sm mb-4">Phone: +880 1710490345</p>

          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-white"><FaFacebookF /></a>
            <a href="#" className="hover:text-white"><FaTwitter /></a>
            <a href="#" className="hover:text-white"><FaInstagram /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Care.IO. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
