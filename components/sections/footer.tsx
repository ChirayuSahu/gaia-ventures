"use client"
import React from 'react';
import { motion } from 'motion/react';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowUpRight, 
  Globe2, 
  Heart 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: ["Home", "About Us", "Services", "Contact"]
    },
    {
      title: "Initiatives",
      links: ["BuzzOnEarth", "EarthGeeks", "Sustainability Leader Program", "TEDx Talks"]
    },
    {
      title: "Services",
      links: ["Sustainability Branding", "Reporting & Standards", "Green Building"]
    }
  ];

  return (
    <footer className="w-full bg-slate-900 text-white font-varela pt-24 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- Top Section: Brand & Links --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 mb-8"
            >
              <div className="w-10 h-10 bg-orange-600 rounded-xl flex items-center justify-center">
                <Globe2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black tracking-tight">
                GAIA<span className="text-orange-600">VENTURES</span>
              </span>
            </motion.div>
            
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm">
              Mainstreaming sustainability through passion, innovation, and global action. Making the dream of accessible sustainability a reality.
            </p>

            <div className="flex gap-4">
              {[Linkedin, Twitter, Instagram, Youtube].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#ea580c' }}
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-12">
            {footerLinks.map((group, i) => (
              <div key={i}>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">
                  {group.title}
                </h4>
                <ul className="space-y-4">
                  {group.links.map((link, j) => (
                    <li key={j}>
                      <a 
                        href="#" 
                        className="text-slate-400 hover:text-orange-500 transition-colors flex items-center group gap-1 text-sm"
                      >
                        {link}
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Middle Section: Newsletter / Quote --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="py-12 border-y border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Stay Hungry, Stay Foolish.</h3>
            <p className="text-slate-500 text-sm mt-1">Our guiding philosophy for a sustainable future.</p>
          </div>
          <div className="flex bg-white/5 p-2 rounded-2xl border border-white/10 w-full max-w-md">
            <input 
              type="email" 
              placeholder="Your email address"
              className="bg-transparent border-none outline-none px-4 py-2 w-full text-sm"
            />
            <button className="bg-orange-600 hover:bg-orange-700 px-6 py-2 rounded-xl text-sm font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </motion.div>

        {/* --- Bottom Section: Copyright --- */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-xs">
          <div className="flex items-center gap-1">
            © {currentYear} GAIA Ventures. Built with <Heart className="w-3 h-3 text-orange-600 fill-orange-600" /> for the Planet.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;