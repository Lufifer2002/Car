import {Link} from 'react-router-dom'
function Choose_us() {
    const features = [
        {
            id: 1,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                </svg>
            ),
            title: "Certified Excellence",
            description: "Every vehicle passes a rigorous 150-point inspection, ensuring uncompromising standards before it reaches you.",
            stat: "500+",
            statLabel: "Vehicles Delivered"
        },
        {
            id: 2,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Transparent Pricing",
            description: "No hidden fees, no negotiations. Our no-haggle pricing model delivers the best value with complete transparency.",
            stat: "0",
            statLabel: "Hidden Fees"
        },
        {
            id: 3,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "5-Year Warranty",
            description: "Comprehensive bumper-to-bumper coverage with 24/7 roadside assistance. Drive with complete peace of mind.",
            stat: "24/7",
            statLabel: "Support Available"
        },
        {
            id: 4,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
            ),
            title: "White Glove Test Drive",
            description: "Schedule a private, no-obligation test drive at your preferred location. The experience comes to you.",
            stat: "100%",
            statLabel: "Satisfaction Guaranteed"
        },
        {
            id: 5,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
            ),
            title: "Bespoke Financing",
            description: "Tailored financial solutions with competitive APR rates and flexible terms designed around your lifestyle.",
            stat: "24hr",
            statLabel: "Approval Process"
        },
        {
            id: 6,
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            ),
            title: "Dedicated Concierge",
            description: "A personal automotive advisor guides you through every step — from selection to delivery and beyond.",
            stat: "4.9★",
            statLabel: "Client Rating"
        }
    ];

    return (
        <section className="relative py-24 px-6 bg-[#080808] overflow-hidden">
            {/* Subtle background texture */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}
            />

            {/* Top line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <p className="text-white/50 text-xs tracking-[0.4em] uppercase font-medium mb-4">
                        The LuxAuto Standard
                    </p>
                    <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-tight mb-5">
                        Why Choose <span className="italic text-white/70">Us</span>
                    </h2>
                    <p className="text-white/40 text-base max-w-xl mx-auto leading-relaxed font-light">
                        We don't just sell cars — we curate an ownership experience reserved for those who expect more.
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-8">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/30" />
                        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/30" />
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[15px]">
                    {features.map((feature) => (
                        <div
                            key={feature.id}
                            className="group relative bg-[#0c0c0c] border border-white/[0.06] p-6 hover:bg-[#111] hover:border-white/15 transition-all duration-400 cursor-default rounded-2xl"
                        >
                            {/* Top border on hover */}
                            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon + Stat row */}
                            <div className="flex items-start justify-between mb-5">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/60 group-hover:bg-white/10 transition-colors duration-300">
                                    {feature.icon}
                                </div>
                                <div className="text-right">
                                    <div className="text-xl font-bold text-white">{feature.stat}</div>
                                    <div className="text-white/25 text-[10px] uppercase tracking-widest">{feature.statLabel}</div>
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-white mb-2 tracking-wide">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/35 text-xs leading-relaxed font-light">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 text-center">
                    <Link to = "/signup">
                    <button className="group relative inline-flex items-center gap-3 px-10 py-4 border border-white/20 text-white/70 text-sm tracking-[0.2em] uppercase font-medium hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                        Begin Your Journey
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                    </Link>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </section>
    );
}

export default Choose_us;
