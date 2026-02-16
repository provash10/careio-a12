"use client";

import { FaQuoteLeft, FaStar, FaUsers, FaUserCheck, FaAward, FaHeartbeat } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            name: "Sarah Johnson",
            role: "Mother of Twins",
            review: "Care.io was a lifesaver when I returned to work. The babysitter they provided was not only professional but so incredibly kind and patient with my children.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "David Miller",
            role: "Family Guardian",
            review: "Finding a caregiver for my father was stressful until I found this platform. The elderly care specialist is now like family to us. The peace of mind is worth everything.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
        },
        {
            name: "Emily Rodriguez",
            role: "Rehab Patient",
            review: "After my surgery, the patient care attendant provided by Care.io was exceptional. They were knowledgeable about medication and helped me recover faster.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
        },
        {
            name: "James Wilson",
            role: "Distant Relative",
            review: "I live in another city, and knowing my aunt has a reliable companion through Care.io gives me such comfort. The regular updates and high-quality care are impressive.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2000&auto=format&fit=crop"
        },
        {
            name: "Olivia Grace",
            role: "Postpartum Mom",
            review: "The newborn care specialist we hired was a blessing. She shared so much wisdom and helped us navigate those first few weeks with confidence and much-needed rest.",
            rating: 5,
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2000&auto=format&fit=crop"
        }
    ];

    // Doubling reviews for infinite scroll effect
    const scrollReviews = [...reviews, ...reviews];

    const stats = [
        { label: "Happy Families", value: "5k+", icon: <FaUsers />, accent: "text-blue-400", glow: "rgba(59, 130, 246, 0.2)" },
        { label: "Total Staff", value: "250+", icon: <FaUserCheck />, accent: "text-emerald-400", glow: "rgba(16, 185, 129, 0.2)" },
        { label: "Success Rate", value: "99%", icon: <FaAward />, accent: "text-orange-400", glow: "rgba(249, 115, 22, 0.2)" },
        { label: "Rating", value: "4.9/5", icon: <FaHeartbeat />, accent: "text-rose-400", glow: "rgba(244, 114, 182, 0.2)" }
    ];

    return (
        <section className="py-24 bg-[#f8fbff] relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(37,99,235,0.03)_0%,_transparent_70%)] opacity-100 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Stats Section - High-End Dark Blue Cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-28">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="relative group p-8 lg:p-10 rounded-[3rem] bg-[#0a1122] border border-slate-800 transition-all duration-500 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:border-blue-500/50 overflow-hidden shadow-2xl">
                            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="flex flex-col items-center gap-6 relative z-10">
                                <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-[1.5rem] flex items-center justify-center text-3xl transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 bg-white/5 border border-white/10 ${stat.accent}`}>
                                    {stat.icon}
                                </div>
                                <div className="text-center">
                                    <h3 className="text-3xl lg:text-5xl font-[1000] text-white mb-2 leading-none tracking-tighter">{stat.value}</h3>
                                    <p className="text-gray-400 font-black uppercase tracking-[0.2em] text-[9px] lg:text-[10px] leading-none opacity-80">{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
                    <h3 className="text-blue-600 font-extrabold uppercase tracking-[0.3em] text-[10px] sm:text-xs flex items-center justify-center gap-3">
                        <span className="w-10 h-0.5 bg-blue-600/20 rounded-full"></span>
                        Voice of Families
                        <span className="w-10 h-0.5 bg-blue-600/20 rounded-full"></span>
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-[1000] text-gray-900 leading-[1] tracking-tighter">
                        Review From Our <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600">Trusted</span> Community
                    </h2>
                </div>

                {/* Testimonials Scrolling Container */}
                <div className="relative overflow-hidden mt-10">
                    <div className="flex gap-8 md:gap-12 animate-scroll hover:[animation-play-state:paused]">
                        {scrollReviews.map((item, idx) => (
                            <div key={idx} className="flex-shrink-0 w-[85vw] md:w-[450px] lg:w-[500px] flex flex-col h-full group bg-[#0a1122] p-8 lg:p-12 rounded-[4rem] border border-slate-800 transition-all duration-700 hover:shadow-2xl hover:border-blue-500/50 overflow-hidden">
                                <div className="mb-8 flex justify-between items-start">
                                    <div className="bg-white/5 text-blue-400 p-5 rounded-[1.5rem] text-2xl border border-white/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-700 shadow-xl">
                                        <FaQuoteLeft />
                                    </div>
                                    <div className="flex gap-1 pt-6 text-sm">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className={`${i < item.rating ? "text-orange-400" : "text-slate-800"}`} />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-400 text-lg lg:text-xl font-medium leading-relaxed mb-10 min-h-[120px] opacity-90 italic">
                                    "{item.review}"
                                </p>

                                <div className="mt-auto flex items-center gap-5 pt-8 border-t border-slate-800/50">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl animate-pulse opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                        <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl overflow-hidden border-2 border-slate-700 transition-transform duration-700 group-hover:scale-110 relative z-10 shadow-2xl">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <div className="text-left leading-none">
                                        <h4 className="font-[1000] text-white text-lg lg:text-xl mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tighter">{item.name}</h4>
                                        <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em]">{item.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 24px)); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 40s linear infinite;
                }
                @media (min-width: 768px) {
                    @keyframes scroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-50% - 48px)); }
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;
