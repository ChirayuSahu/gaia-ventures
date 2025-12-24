"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Gallery', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Our Team', href: '#' },
    ];

    return (
        <nav className={`font-varela fixed w-full z-50 transition-all duration-500 bg-white h-fit ${
            scrolled ? 'py-3 shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'py-5 border-b border-gray-100'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                
                {/* Logo with Hover Scale */}
                <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                >
                    <Image src="/logo.png" alt="GAIA Ventures Logo" width={180} height={40} className='w-40 md:w-45' draggable={false} />
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-10">
                    <div className="flex gap-8">
                        {navLinks.map((link, idx) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative text-sm font-semibold text-slate-600 hover:text-orange-600 transition-colors tracking-wide group"
                            >
                                {link.name}
                                {/* Animated Underline */}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-6 border-l pl-10 border-gray-100">
                        <Link href="tel:+919198117891" className="flex items-center gap-2 text-sm font-bold text-slate-900 group">
                            <motion.div 
                                whileHover={{ rotate: 15 }}
                                className="bg-orange-50 p-1.5 rounded-lg group-hover:bg-orange-100 transition-colors"
                            >
                                <Phone size={16} className="text-orange-600" />
                            </motion.div>
                            <span className="hidden xl:block">+91 91981 17891</span>
                        </Link>
                        
                        <Link href={"#"}>
                            <motion.button
                                whileHover={{ 
                                    scale: 1.05,
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-orange-600 text-white px-7 py-3 rounded-xl text-sm font-bold cursor-pointer shadow-lg shadow-orange-600/20"
                            >
                                CONTACT US
                            </motion.button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle with Rotation */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-slate-900 overflow-hidden">
                    <motion.div
                        initial={false}
                        animate={{ rotate: isOpen ? 90 : 0 }}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </motion.div>
                </button>
            </div>

            {/* Enhanced Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 w-full bg-white border-t border-gray-100 lg:hidden overflow-hidden"
                    >
                        <div className="p-8 flex flex-col gap-6 shadow-2xl">
                            {navLinks.map((link, idx) => (
                                <motion.a 
                                    key={link.name} 
                                    href={link.href}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="text-lg font-bold text-slate-800 border-b border-gray-50 pb-2 flex justify-between items-center group"
                                >
                                    {link.name}
                                    <ArrowRight size={18} className="text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </motion.a>
                            ))}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col gap-4 mt-4"
                            >
                                <Link href="tel:+919198117891" className="flex items-center gap-3 text-md font-bold text-slate-900">
                                    <Phone size={20} className="text-orange-600" />
                                    <span>+91 91981 17891</span>
                                </Link>
                                <motion.button
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-orange-600 text-white w-full py-4 rounded-2xl font-bold shadow-xl shadow-orange-600/20"
                                >
                                    Get in Touch
                                </motion.button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;