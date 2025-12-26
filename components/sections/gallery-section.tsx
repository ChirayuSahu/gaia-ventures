"use client"
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Maximize2 } from 'lucide-react';
import Link from 'next/link';

const previewItems = [
    { id: 1, title: "Eco-Summit 2024", cat: "Events", img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800" },
    { id: 2, title: "BuzzOnEarth Global", cat: "Media", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800" },
    { id: 3, title: "EarthGeeks Workshop", cat: "Education", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" },
];

const GalleryPreview = () => {
    return (
        <section className="py-24 bg-slate-50 font-varela">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
                        <h2 className="text-4xl font-black text-slate-900 mt-2">Impact in Pictures</h2>
                    </div>
                    <Link href="/gallery">
                        <motion.button
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
                        >
                            View Full Gallery <ArrowRight size={20} />
                        </motion.button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {previewItems.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ y: -10 }}
                            className="relative h-96 group overflow-hidden rounded-[2.5rem] shadow-xl"
                        >
                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent p-8 flex flex-col justify-end">
                                <span className="text-orange-500 text-xs font-bold uppercase mb-2">{item.cat}</span>
                                <h3 className="text-white text-xl font-bold">{item.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GalleryPreview;