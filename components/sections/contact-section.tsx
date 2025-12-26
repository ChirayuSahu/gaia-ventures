"use client"
import React from 'react';
import { motion, Variants } from 'motion/react';
import { Mail, Phone, MapPin, Globe, ArrowRight } from 'lucide-react';

const contactDetails = [
  {
    title: "Email Us",
    value: "hello@gaiaventures.com",
    sub: "For general inquiries and partnerships",
    icon: <Mail className="w-8 h-8" />,
    link: "mailto:hello@gaiaventures.com"
  },
  {
    title: "Call Us",
    value: "+91 000 000 0000",
    sub: "Mon - Fri, 9:00 AM to 6:00 PM",
    icon: <Phone className="w-8 h-8" />,
    link: "tel:+910000000000"
  },
  {
    title: "Our Location",
    value: "Bengaluru, India",
    sub: "Serving 183 countries through BuzzOnEarth",
    icon: <MapPin className="w-8 h-8" />,
    link: "#"
  }
];

const ContactInfoSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="py-24 bg-white font-varela">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm"
          >
            Connect With Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6">
            Let’s start a conversation.
          </h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full" />
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {contactDetails.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              variants={cardVariants}
              className="group p-10 bg-slate-50 rounded-[2.5rem] border border-transparent hover:border-orange-100 hover:bg-white hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-orange-600 shadow-sm group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500 mb-8">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {item.title}
              </h3>
              
              <p className="text-orange-600 font-bold text-lg mb-4 wrap-break-words">
                {item.value}
              </p>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {item.sub}
              </p>

              <div className="flex items-center gap-2 text-slate-400 group-hover:text-orange-600 font-bold text-xs uppercase tracking-widest transition-colors">
                Contact Now <ArrowRight className="w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-20 p-12 bg-slate-900 rounded-[3rem] text-center relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Join the movement to mainstream sustainability.
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto mb-8">
              Whether you are a student, a professional, or a business leader, there is a place for you at GAIA Ventures.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="flex items-center gap-2 text-orange-500 font-semibold px-4 py-2 bg-orange-500/10 rounded-full text-sm">
                <Globe className="w-4 h-4" /> 183 Countries
              </span>
              <span className="flex items-center gap-2 text-orange-500 font-semibold px-4 py-2 bg-orange-500/10 rounded-full text-sm">
                <Globe className="w-4 h-4" /> 5,800+ Cities
              </span>
            </div>
          </div>
          {/* Decorative Background Element */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(234,88,12,0.1),transparent)] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
