"use client"
import React from 'react';
import { motion, Variants } from 'motion/react';
import { BarChart3, Building2, Users2, Leaf, ShieldCheck, PieChart } from 'lucide-react';

const services = [
  {
    title: "Sustainability Branding",
    description: "Do you want sustainability to be your differentiator? We create unique value propositions that resonate.",
    icon: <Users2 className="w-8 h-8" />,
  },
  {
    title: "Sustainability Reporting",
    description: "Navigate the complex landscape of regulators and eco-plans. We help you leverage data for transparency.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Green Building",
    description: "Professional teams with global green building ratings. We ensure your infrastructure meets the future.",
    icon: <Building2 className="w-8 h-8" />,
  },
  {
    title: "Eco-Compliance",
    description: "Stay ahead of environmental norms and ecological landscapes with our localized help and strategy.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    title: "Corporate Consulting",
    description: "In-depth experience with international standards and ratings to lead your market relocation.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    title: "Market Analysis",
    description: "Having national green building standings and data-driven insights for whatever your goal may be.",
    icon: <PieChart className="w-8 h-8" />,
  },
];

const ServicesSection = () => {
  // Container variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
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
            Our Services
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mt-4 mb-6"
          >
            Sustainability Branding & Marketing
          </motion.h2>
          <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mb-6" />
          <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed">
            Do you want sustainability to be your differentiator and your unique value? 
            If your response is yes, your search ends here.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.3 } 
              }}
              className="group relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 border border-gray-100"
            >
              {/* Icon Container */}
              <div className="relative mb-8">
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                  {service.icon}
                </div>
                {/* Decorative floating number like the original */}
                <span className="absolute -top-2 -right-2 text-4xl font-black text-orange-200 group-hover:text-orange-300 group-hover:z-10 transition-all duration-500 -z-1">
                  0{index + 1}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-600 rounded-full group-hover:w-1/3 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;