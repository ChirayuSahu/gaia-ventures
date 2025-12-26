"use client"
import React from 'react';
import { motion, Variants } from 'motion/react';
import { Linkedin, Mail, Twitter, Plus } from 'lucide-react';

const team = [
  {
    name: "Gayatri Chauhan",
    role: "Founder & CEO",
    specialty: "Sustainability Strategist",
    image: "/api/placeholder/400/500", // Replace with actual image
    bio: "Alumnus of IIT Roorkee & ISB Hyderabad. TEDx speaker and USGBC Faculty member with 14+ years of expertise.",
    isLeader: true
  },
  {
    name: "Core Team Member",
    role: "Sustainability Consultant",
    specialty: "Green Building Specialist",
    image: "/api/placeholder/400/500",
    bio: "Focused on global green building ratings and ecological landscapes.",
    isLeader: false
  },
  {
    name: "Media Lead",
    role: "BuzzOnEarth Editor",
    specialty: "Environmental Journalism",
    image: "/api/placeholder/400/500",
    bio: "Managing audiences across 183 countries to mainstream eco-consciousness.",
    isLeader: false
  },
  {
    name: "Community Head",
    role: "EarthGeeks Initiative",
    specialty: "Youth Leadership",
    image: "/api/placeholder/400/500",
    bio: "Building the next generation of sustainability leaders through hands-on education.",
    isLeader: false
  }
];

const TeamSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <section className="py-24 bg-white font-varela">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            The Movement Makers
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
            Meet the <span className="text-orange-600">Passion</span> behind GAIA.
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            We are a young team of professionals who believe sustainability is no longer an option—it’s the mission of our lives.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative ${member.isLeader ? 'lg:col-span-2 md:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden rounded-[2.5rem] bg-slate-100 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 ${member.isLeader ? 'flex flex-col md:flex-row' : 'h-full'}`}>
                
                {/* Image Wrapper */}
                <div className={`relative ${member.isLeader ? 'md:w-1/2 h-100 md:h-auto' : 'h-87.5'} overflow-hidden`}>
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Overlay for social icons */}
                  <div className="absolute bottom-4 left-4 flex flex-col gap-2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a href="#" className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                    <a href="#" className="w-10 h-10 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                      <Twitter size={18} />
                    </a>
                  </div>
                </div>

                {/* Content Wrapper */}
                <div className={`p-8 bg-white flex flex-col justify-center ${member.isLeader ? 'md:w-1/2' : 'w-full'}`}>
                  <span className="text-orange-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                    {member.role}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-slate-400 text-sm font-medium mb-4 italic">
                    {member.specialty}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    {member.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join the Team Card */}
          <motion.div
            variants={itemVariants}
            className="group relative h-full min-h-100"
          >
            <div className="h-full rounded-[2.5rem] border-2 border-dashed border-orange-200 bg-orange-50/50 flex flex-col items-center justify-center p-8 text-center hover:bg-orange-50 hover:border-orange-600 transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500 mb-6">
                <Plus className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Join the Movement</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Are you passionate about Mother Earth? We are always looking for fresh talent.
              </p>
              <button className="px-6 py-3 bg-slate-900 text-white text-xs font-bold rounded-xl uppercase tracking-widest hover:bg-orange-600 transition-colors">
                Open Roles
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* Simple Team Stats */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-100">
          <div className="text-center">
            <h4 className="text-3xl font-black text-slate-900">14+</h4>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Years Experience</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-black text-slate-900">183</h4>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Countries Reached</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-black text-slate-900">5k+</h4>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Cities Impacted</p>
          </div>
          <div className="text-center">
            <h4 className="text-3xl font-black text-slate-900">100%</h4>
            <p className="text-slate-400 text-sm uppercase tracking-widest mt-1">Passion Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;