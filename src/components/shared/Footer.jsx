"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#050b1a] text-gray-400 pt-12 pb-8 relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(37,99,235,0.05)_0%,_transparent_50%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Branding & Mission */}
          <div className="space-y-8">
            <Link href="/" className="btn h-[38px] px-6 flex items-center justify-center w-fit mb-6 group">
              <div className="relative">
                <Image
                  src="/image/careio.png"
                  alt="Care.io Logo"
                  width={90}
                  height={25}
                  className="brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity object-contain"
                  priority
                />
              </div>
            </Link>
            <p className="text-gray-500 text-base leading-relaxed font-medium mb-6">
              Redefining caregiving with a human-first approach. We connect families with heart-verified professionals for a safer, happier tomorrow.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaTwitter />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
                { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/provashchandrabarman/" }
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:-translate-y-1 transition-all duration-300 shadow-xl"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Exploration */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Quick Explore
            </h3>
            <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "My Bookings", href: "/my-bookings" },
                { name: "Join as Caregiver", href: "#" },
                { name: "Privacy Policy", href: "#" }
              ].map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-0.5 bg-blue-500 group-hover:w-3 transition-all"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Care Services */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              Our Services
            </h3>
            <ul className="space-y-4 font-bold text-sm uppercase tracking-widest">
              {["Baby Care", "Elderly Care", "Patient Care", "Home Assistant", "Medication Aid"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 group cursor-pointer hover:text-blue-400 transition-colors">
                  <span className="w-1.5 h-1.5 bg-blue-500/40 rounded-full group-hover:bg-blue-500 group-hover:scale-125 transition-all"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="btn h-[38px] px-6 text-sm font-bold text-white mb-6 flex items-center gap-3 w-fit">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Get In Touch
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <FaMapMarkerAlt />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest mb-0.5">Our Location</p>
                  <p className="text-gray-500 font-bold text-sm">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                  <FaEnvelope />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest mb-0.5">Send Email</p>
                  <p className="text-gray-500 font-bold text-sm">provash20cb@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <FaPhoneAlt />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest mb-0.5">Call Support</p>
                  <p className="text-gray-500 font-bold text-sm">+880 1710490345</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/provashchandrabarman/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group cursor-pointer"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-500 border border-blue-600/20 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <FaLinkedinIn />
                </div>
                <div className="leading-tight">
                  <p className="text-white font-black text-[9px] uppercase tracking-widest mb-0.5">LinkedIn Profile</p>
                  <p className="text-gray-500 font-bold text-sm hover:text-blue-400 transition-colors">provashchandrabarman</p>
                </div>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-black uppercase tracking-[0.2em] text-gray-600">
          <p>© {new Date().getFullYear()} Care.IO. Crafted with Heart.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
