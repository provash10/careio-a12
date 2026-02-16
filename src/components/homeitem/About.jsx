"use client";

import Image from 'next/image';
import { FaHeart, FaShieldAlt, FaLightbulb, FaCheckCircle, FaStar, FaArrowRight } from 'react-icons/fa';

const About = () => {
    return (
        <section className="py-16 bg-[#f8fbff] relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/30 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-[20%] left-[-10%] w-[30%] h-[30%] bg-blue-200/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative z-10 rounded-[3.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:scale-[0.98] border-[10px] border-white">
                            <Image
                                src="https://i.ibb.co.com/r2nchBg6/care-img2.jpg"
                                alt="Platform Mission"
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover opacity-95 group-hover:opacity-100 transition-opacity"
                                unoptimized={true}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                        </div>

                        {/* Floating Experience Card */}
                        <div className="absolute -bottom-10 -right-6 md:-right-10 bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl z-20 border border-blue-50 group-hover:-translate-y-2 transition-transform duration-500">
                            <div className="flex flex-col items-center text-center">
                                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">10+</div>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[10px] sm:text-xs leading-tight">Years of<br />Excellence</p>
                                <div className="mt-4 flex gap-1 text-orange-400 text-sm">
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                                </div>
                            </div>
                        </div>

                        {/* Background blobs */}
                        <div className="absolute top-10 -left-10 w-full h-full bg-blue-600/5 rounded-[3rem] -z-10 transform -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full lg:w-1/2 space-y-6">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-3 bg-blue-600/10 text-blue-700 px-5 py-2.5 rounded-full text-xs font-[1000] uppercase tracking-widest border border-blue-100 shadow-sm">
                                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
                                Who We Are
                            </div>
                            <h2 className="text-2xl md:text-4xl font-[1000] text-gray-900 leading-[1.1] tracking-tight">
                                We Provide <span className="text-blue-600 italic">Pure Care</span> <span className="inline-block">With Human Connection</span>
                            </h2>
                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed font-medium">
                                At <span className="text-blue-600 font-bold underline decoration-blue-200 decoration-4 underline-offset-8">Care.io</span>, our mission is to redefine caregiving. We bridge the gap between families and professional caretakers.
                            </p>
                        </div>

                        {/* Features with Dark Blue Backgrounds */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { title: "Human Heart", text: "Treating everyone like family.", icon: <FaHeart />, iconColor: "text-pink-400" },
                                { title: "Verified Pro", text: "100% background checked.", icon: <FaShieldAlt />, iconColor: "text-emerald-400" },
                                { title: "Tailored Plan", text: "Adaptive to your needs.", icon: <FaLightbulb />, iconColor: "text-orange-400" },
                                { title: "24/7 Support", text: "Always here for help.", icon: <FaCheckCircle />, iconColor: "text-purple-400" },
                            ].map((feat, i) => (
                                <div key={i} className={`group/item relative flex items-center gap-4 p-4 h-[90px] rounded-[2rem] bg-[#0a1122] border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-2 overflow-hidden`}>

                                    {/* Subtle Ambient Glow inside card */}
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover/item:bg-blue-500/20 transition-all"></div>

                                    <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center text-2xl transition-all duration-500 group-hover/item:scale-110 bg-white/5 border border-white/10 shadow-lg ${feat.iconColor}`}>
                                        {feat.icon}
                                    </div>
                                    <div className="space-y-1 text-left">
                                        <h4 className="font-black text-white text-lg">{feat.title}</h4>
                                        <p className="text-[10px] text-gray-400 font-black leading-tight uppercase tracking-widest">{feat.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-center gap-8">
                            <button className="relative w-full sm:w-auto bg-[#0a1122] text-white px-10 h-[64px] rounded-[2rem] font-black text-sm uppercase tracking-widest border border-slate-800 hover:border-blue-500/50 hover:-translate-y-1 transition-all duration-300 shadow-xl active:scale-95 group overflow-hidden flex items-center justify-center gap-3">
                                <span className="relative z-10">Discover Our Story</span>
                                <FaArrowRight className="relative z-10 text-blue-500 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            </button>
                            <div className="flex items-center gap-4 bg-[#0a1122] px-6 py-3 rounded-[2rem] border border-slate-800 shadow-xl hover:-translate-y-1 transition-transform cursor-default">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map(n => (
                                        <div key={n} className="w-10 h-10 rounded-full border-2 border-slate-800 overflow-hidden shadow-lg">
                                            <img src={`https://i.pravatar.cc/100?img=${n + 30}`} alt="user" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-left leading-none">
                                    <p className="text-sm font-black text-white">10k+ Joins</p>
                                    <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mt-1">Community Members</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
