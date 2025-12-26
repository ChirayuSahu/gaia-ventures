"use client"
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      title: "Email Us",
      value: "hello@gaiaventures.com", // temp email
      icon: <Mail className="w-6 h-6" />,
      sub: "Direct support for your queries"
    },
    {
      title: "Call Us",
      value: "+91 99999 99999", // temp phone number
      icon: <Phone className="w-6 h-6" />,
      sub: "Mon - Fri, 9am - 6pm"
    },
    {
      title: "Our Location",
      value: "Bengaluru, India", // temp location
      icon: <MapPin className="w-6 h-6" />,
      sub: "Mainstreaming sustainability worldwide"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 font-varela">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* --- Left Column: Info --- */}
          <div className="lg:col-span-5">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-600 font-bold tracking-[0.2em] uppercase text-sm"
            >
              Get In Touch
            </motion.span>
            <h2 className="text-4xl font-black text-slate-900 mt-4 mb-6">
              Let's build a <span className="text-orange-600">greener</span> future together.
            </h2>
            <p className="text-slate-500 text-lg mb-10 leading-relaxed">
              Ready to mainstream sustainability in your business? Reach out to our team of passionate professionals.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <motion.div 
                  key={i}
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"
                >
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{info.title}</h4>
                    <p className="text-orange-600 font-medium mb-1">{info.value}</p>
                    <p className="text-slate-400 text-sm">{info.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Form --- */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-gray-100"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-slate-50 text-slate-700  border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 text-slate-700  border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                <select className="w-full px-6 py-4 bg-slate-50 text-slate-700  border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all appearance-none">
                  <option>Sustainability Branding</option>
                  <option>Green Building Consulting</option>
                  <option>Media Inquiry (BuzzOnEarth)</option>
                  <option>General Inquiry</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full px-6 py-4 bg-slate-50 text-slate-700  border-none rounded-2xl focus:ring-2 focus:ring-orange-500 outline-none transition-all resize-none"
                />
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-orange-600 text-white font-bold rounded-2xl shadow-lg shadow-orange-600/20 hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center gap-3 text-slate-400 text-sm justify-center">
              <MessageSquare className="w-4 h-4" />
              <span>We usually respond within 24 hours</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;