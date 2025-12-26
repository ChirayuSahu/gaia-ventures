"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, Grid2X2, Camera, Maximize2 } from 'lucide-react';

const categories = ["All", "Events", "BuzzOnEarth", "EarthGeeks", "Sustainability"];

const fullGallery = [
  { id: 1, title: "TEDx Sustainability Talk", cat: "Events", img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800" },
  { id: 2, title: "Eco-Innovation Coverage", cat: "BuzzOnEarth", img: "https://images.unsplash.com/photo-1536697246787-1f7ad502a1c6?q=80&w=800" },
  { id: 3, title: "School Outreach", cat: "EarthGeeks", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800" },
  { id: 4, title: "Green Building Visit", cat: "Sustainability", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800" },
  { id: 5, title: "Global Climate Forum", cat: "Events", img: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?q=80&w=800" },
  { id: 6, title: "Student Leader Meet", cat: "EarthGeeks", img: "https://images.unsplash.com/photo-1529070532901-ba8c182cd47c?q=80&w=800" },
];

const FullGalleryPage = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = activeTab === "All" 
    ? fullGallery 
    : fullGallery.filter(item => item.cat === activeTab);

  return (
    <main className="min-h-screen pt-32 pb-24 bg-white font-varela">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Page Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-50 rounded-3xl text-orange-600 mb-6">
            <Camera size={32} />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6">Our Visual <span className="text-orange-600">Legacy</span></h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            A chronicle of our journey across 183 countries, mainstreaming sustainability through action and media.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-8 py-3 rounded-full font-bold text-sm transition-all ${
                activeTab === cat 
                ? "bg-orange-600 text-white shadow-xl shadow-orange-600/30 scale-105" 
                : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Animated Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-4/5 overflow-hidden rounded-[3rem] bg-slate-100 shadow-lg">
                  <img 
                    src={item.img} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                    alt={item.title} 
                  />
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="w-14 h-14 bg-orange-600 text-white rounded-2xl flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform">
                      <Maximize2 size={24} />
                    </div>
                  </div>
                </div>
                <div className="mt-6 px-4">
                  <span className="text-orange-600 font-bold text-xs uppercase tracking-tighter">{item.cat}</span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Mockup */}
        <div className="mt-20 text-center">
          <button className="px-10 py-4 border-2 border-slate-900 text-slate-900 font-black rounded-2xl hover:bg-slate-900 hover:text-white transition-all uppercase tracking-widest text-xs">
            Load More Stories
          </button>
        </div>
      </div>
    </main>
  );
};

export default FullGalleryPage;