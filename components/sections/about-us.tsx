"use client"
import { motion, Variants } from 'motion/react';
import {Globe2, Heart, Trophy, Target, Lightbulb, GraduationCap, Users2, ShieldCheck} from 'lucide-react';
import Image from 'next/image';
import ContactSection from './contact-section';

const values = [
    { title: "High Integrity", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "High Customer Orientation", icon: <Users2 className="w-6 h-6" /> },
    { title: "High Attention to Detail", icon: <Target className="w-6 h-6" /> },
    { title: "Prioritise SDGs", icon: <Globe2 className="w-6 h-6" /> },
    { title: "Stay Hungry, Stay Foolish", icon: <Lightbulb className="w-6 h-6" /> },
];

const AboutSection = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const fadeInUp: Variants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section className="py-24 bg-white font-varela overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                {/* --- BRAND STORY SECTION --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm">Our Origin</span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-8">
                            Mother Earth <br /><span className="text-orange-600">is our Gaia.</span>
                        </h2>
                        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                            <p>
                                <strong className="text-slate-900">GAIA</strong> is the Greek word for Mother Earth. GAIA Ventures is a multipronged movement with a mission to mainstream Sustainability and Sustainable Development.
                            </p>
                            <p>
                                We are a young team of passionate professionals who believe Sustainability is no longer an option—it must take precedence in the goal sheets of businesses and individuals alike. Our dream?
                                <span className="text-slate-900 font-semibold italic"> To make sustainability accessible to all.</span>
                            </p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-orange-600">
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    <Globe2 className="w-5 h-5 text-orange-600" /> BuzzOnEarth
                                </h4>
                                <p className="text-sm mt-2 text-slate-900">Reaching 183 countries and 5,800+ cities globally.</p>
                            </div>
                            <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-orange-600">
                                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                                    <GraduationCap className="w-5 h-5 text-orange-600" /> EarthGeeks
                                </h4>
                                <p className="text-sm mt-2 text-slate-900">Building next-gen leaders through hands-on student involvement.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-square bg-orange-100 rounded-[3rem] relative overflow-hidden">
                            {/* Placeholder for Brand Image */}
                            <div className="absolute inset-0 flex items-center justify-center text-orange-200">
                                <Image src="/about/about-1.jpg" alt="Brand Image" layout="fill" objectFit="cover" />
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 max-w-xs">
                            <p className="text-slate-900 font-bold text-xl italic">"Mainstreaming sustainability globally."</p>
                        </div>
                    </motion.div>
                </div>

                {/* --- VALUES GRID --- */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-black text-slate-900">Our Core Values</h3>
                        <div className="w-16 h-1 bg-orange-600 mx-auto mt-4 rounded-full" />
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
                    >
                        {values.map((val, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300"
                            >
                                <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                    {val.icon}
                                </div>
                                <p className="font-bold text-slate-800 text-sm text-center">{val.title}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* --- FOUNDER SECTION --- */}
                <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-32 -mt-32 blur-3xl" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-4">
                            <div className="aspect-4/5 bg-slate-800 rounded-2xl overflow-hidden border-2 border-orange-600/30">
                                {/* Founder Image Placeholder */}
                                <div className="w-full h-full flex items-center justify-center text-slate-700">
                                    <Users2 size={100} />
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <span className="text-orange-500 font-bold tracking-widest uppercase text-sm">The Visionary</span>
                            <h2 className="text-4xl font-black mt-2 mb-2">GAYATRI CHAUHAN</h2>
                            <p className="text-orange-500 font-medium mb-8">Founder, GAIA Ventures</p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-slate-300 text-base leading-relaxed">
                                <p>
                                    Gayatri brings 14+ years of expertise across Sustainability Consulting, Brand Management, and Market Development.
                                    She is an alumnus of <span className="text-white font-semibold">IIT Roorkee</span> and <span className="text-white font-semibold">ISB Hyderabad</span>.
                                </p>
                                <p>
                                    A <span className="text-white font-semibold">TEDx speaker</span> and Swedish Institute Fellow, she is an accredited LEED professional and a faculty member at the <span className="text-white font-semibold">USGBC</span>.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">TEDx Speaker</div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">IIT Roorkee Alumnus</div>
                                <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm">USGBC Faculty</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
        </section>
    );
};

export default AboutSection;