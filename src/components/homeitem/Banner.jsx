"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaShieldAlt, FaUserMd, FaPhoneAlt } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const Banner = () => {
    const images = [
        "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2043&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581578731522-745505146317?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2064&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop"
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative bg-[#f0f7ff] overflow-hidden min-h-screen flex items-center pt-20">
            {/* Ambient Background Glows - Adjusted for light background */}
            <div className="absolute top-0 right-0 w-[70%] h-full bg-blue-200/40 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[60%] bg-blue-100/50 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute top-[20%] left-[30%] w-[30%] h-[30%] bg-orange-100/40 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.02] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-8">

                    {/* Left Content */}
                    <div className="w-full lg:w-[55%] space-y-4 text-center lg:text-left pt-10 lg:pt-0">
                        <div className="inline-flex items-center gap-3 bg-blue-600/10 backdrop-blur-md border border-blue-600/20 px-5 py-2.5 rounded-full animate-bounce-slow">
                            <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.4)]"></div>
                            <span className="text-blue-700 text-xs sm:text-sm font-[1000] uppercase tracking-widest">Trustworthy Care Experts</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-[1000] text-gray-900 leading-[0.95] tracking-tight">
                                Reliable <span className="text-blue-600 block sm:inline">Care</span> <br className="hidden lg:block" />
                                When You <span className="relative inline-block">
                                    <span className="relative z-10 text-orange-500 italic">Need It</span>
                                    <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-400/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="transparent" /></svg>
                                </span> Most
                            </h1>

                            <p className="text-gray-600 text-lg md:text-2xl max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
                                Join 10k+ families getting professional caregiving services for <span className="text-gray-900 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">Elderly, Babies,</span> and <span className="text-gray-900 font-bold underline decoration-blue-200 decoration-4 underline-offset-4">Patients</span>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start mt-4">
                            <Link href="/services" className="group relative w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] active:scale-95 flex items-center justify-center gap-3 overflow-hidden">
                                <span className="relative z-10">Get Expert Care</span>
                                <FaArrowRight className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </Link>

                            <Link href="tel:+123456789" className="btn w-full sm:w-auto px-8 h-[60px] rounded-2xl font-black text-lg flex items-center justify-center gap-3 active:scale-95 shadow-lg">
                                <FaPhoneAlt className="text-white text-base" />
                                <span>Contact Us</span>
                            </Link>
                        </div>

                        {/* Trust Badges */}
                        <div className="hidden sm:flex items-center gap-6 pt-2 border-t border-blue-100 border-dashed justify-center lg:justify-start mt-2">
                            {[
                                { icon: <FaShieldAlt />, label: "Secure Payments", sub: "Fully Encrypted", accent: "text-emerald-400" },
                                { icon: <FaUserMd />, label: "Certified Staff", sub: "Background Verified", accent: "text-blue-400" }
                            ].map((badge, i) => (
                                <div key={i} className="flex items-center gap-3 bg-[#0a1122] p-3 rounded-2xl border border-slate-800 shadow-xl hover:-translate-y-1 transition-all cursor-default group/badge">
                                    <div className={`w-10 h-10 bg-white/5 ${badge.accent} rounded-lg flex items-center justify-center text-lg border border-white/10 group-hover/badge:scale-110 transition-transform`}>
                                        {badge.icon}
                                    </div>
                                    <div className="text-left leading-tight">
                                        <p className="text-xs font-black text-white mb-0.5">{badge.label}</p>
                                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">{badge.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Section with Slider */}
                    <div className="w-full lg:w-[45%] relative mt-10 lg:mt-0">
                        <div className="absolute -top-10 -right-10 w-full h-full bg-blue-600 rounded-[4rem] rotate-6 opacity-5 -z-10 animate-pulse"></div>
                        <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-orange-200 rounded-full opacity-20 blur-3xl -z-10"></div>

                        <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(37,99,235,0.1)] border-[12px] border-white group aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square">
                            <div className="relative w-full h-full">
                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                                    >
                                        <Image
                                            fill
                                            src={img}
                                            alt={`Caregiver ${index + 1}`}
                                            className={`object-cover transform transition-transform duration-[5s] ${index === currentImage ? 'scale-105' : 'scale-100'}`}
                                            unoptimized={true}
                                            priority={index === 0}
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Floating Review Card */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-blue-50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 z-20">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 25}`} alt="user" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-left leading-none">
                                        <p className="text-blue-600 font-[1000] text-xl mb-1 flex items-center gap-1">4.9/5 <span className="text-orange-400 text-sm">★★★★★</span></p>
                                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">Join 10k+ Families</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes bounce-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                    animation: bounce-slow 4s infinite ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Banner;
