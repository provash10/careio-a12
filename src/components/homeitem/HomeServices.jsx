"use client";

import Link from 'next/link';
import { FaBaby, FaBlind, FaBriefcaseMedical, FaArrowRight } from 'react-icons/fa';

const HomeServices = () => {
    const categories = [
        {
            title: "Baby Care",
            desc: "Expert nannies and sitters to ensure your child's safety and happiness.",
            icon: <FaBaby />,
            accentColor: "text-pink-400",
            glowColor: "rgba(244, 114, 182, 0.2)",
            badge: "Toddler Safe"
        },
        {
            title: "Elderly Care",
            desc: "Professional companions providing comfort and support for seniors.",
            icon: <FaBlind />,
            accentColor: "text-blue-400",
            glowColor: "rgba(96, 165, 250, 0.2)",
            badge: "Senior Kind"
        },
        {
            title: "Patient Care",
            desc: "Dedicated medical assistants for post-hospitalization and sick recovery.",
            icon: <FaBriefcaseMedical />,
            accentColor: "text-emerald-400",
            glowColor: "rgba(52, 211, 153, 0.2)",
            badge: "Expert Med"
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-[#f0f7ff]">
            {/* Soft background decorations */}
            <div className="absolute top-0 inset-0 pointer-events-none opacity-40">
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-100 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-[0%] right-[-10%] w-[50%] h-[50%] bg-blue-200/50 rounded-full blur-[150px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Heading */}
                <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
                    <div className="inline-block">
                        <span className="bg-blue-600/10 text-blue-700 border border-blue-200 text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-sm">
                            Our Expertise
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-[1000] text-gray-900 leading-tight tracking-tighter">
                        Premium Care <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] animate-gradient-text">Tailored</span> For You
                    </h2>
                </div>

                {/* Categories Grid - High-End Dark Blue Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {categories.map((cat, idx) => (
                        <div key={idx} className="group relative h-full">
                            {/* Card Background Glow */}
                            <div className="absolute inset-5 rounded-[4rem] blur-[30px] transition-all duration-700 opacity-0 group-hover:opacity-40 -z-10" style={{ backgroundColor: cat.glowColor }}></div>

                            {/* The Card - Dark Blue Theme */}
                            <div className="relative h-full flex flex-col p-1 bg-[#0a1122] rounded-[4.5rem] border border-slate-800 transition-all duration-700 hover:-translate-y-4 hover:border-blue-500/50 overflow-hidden z-10 cursor-pointer shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]">

                                <div className="absolute top-10 right-10 text-[10px] font-black uppercase tracking-widest text-slate-700 group-hover:text-blue-400 transition-colors">
                                    {cat.badge}
                                </div>

                                <div className="p-12 lg:p-14 h-full flex flex-col items-center text-center">
                                    {/* Icon Container */}
                                    <div className="relative mb-12">
                                        <div className="absolute inset-0 bg-white/5 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className={`relative w-24 h-24 bg-white/5 border border-white/10 rounded-[2.5rem] flex items-center justify-center ${cat.accentColor} text-4xl shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/10`}>
                                            {cat.icon}
                                        </div>
                                    </div>

                                    <h4 className="text-3xl font-black text-white mb-6 group-hover:text-blue-400 transition-colors">
                                        {cat.title}
                                    </h4>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-12 flex-grow font-medium opacity-80">
                                        {cat.desc}
                                    </p>

                                    {/* Action Button - High contrast */}
                                    <Link
                                        href="/services"
                                        className="group/btn relative w-full inline-flex items-center justify-center gap-3 py-6 px-10 rounded-3xl bg-blue-600 text-white font-[1000] overflow-hidden transition-all duration-500 hover:bg-blue-500 active:scale-95 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)]"
                                    >
                                        <span className="relative z-10 text-xs italic tracking-[0.2em] uppercase">Explore Service</span>
                                        <FaArrowRight className="relative z-10 text-sm group-hover/btn:translate-x-2 transition-transform duration-300" />
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final CTA Bar - Deep Navy with Glassmorphism */}
                <div className="mt-28">
                    <div className="relative p-1 rounded-[4.5rem] bg-gradient-to-br from-blue-900 to-[#0a1122] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] border border-blue-800/20 overflow-hidden group">
                        <div className="relative bg-[#0a1122]/90 backdrop-blur-3xl rounded-[4.4rem] px-12 py-16 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 text-white">

                            <div className="absolute top-0 right-0 w-[50%] h-full bg-blue-600/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

                            <div className="text-center lg:text-left space-y-6 max-w-2xl">
                                <h2 className="text-4xl md:text-6xl font-[1000] leading-[0.9] tracking-tighter">
                                    Need a <span className="text-orange-400 italic underline decoration-white/10 underline-offset-8">Custom</span> <br className="hidden sm:block" />
                                    Care Solution?
                                </h2>
                                <p className="text-gray-400 text-xl font-medium opacity-80 leading-relaxed max-w-lg">
                                    Let our experts design a care plan precisely for your family's unique needs.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-5 w-full lg:w-auto">
                                <button className="bg-white text-blue-900 px-12 py-6 rounded-3xl font-[1000] text-xl hover:bg-orange-500 hover:text-white hover:-translate-y-2 transition-all shadow-xl active:scale-95 group overflow-hidden">
                                    <span className="relative z-10">Get Started</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                </button>
                                <button className="bg-blue-600/10 border border-blue-500/20 text-white px-12 py-6 rounded-3xl font-[1000] text-xl hover:bg-blue-600/20 hover:-translate-y-2 transition-all active:scale-95">
                                    Contact Support
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes gradient-text {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-gradient-text {
                    animation: gradient-text 5s ease infinite;
                }
            `}</style>
        </section>
    );
};

export default HomeServices;
