"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
          >
            <div className="aspect-square max-w-md mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-blue-100/60 via-[#EFF6FF] to-white p-4 sm:p-6 border border-blue-100/60">
              <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl flex items-center justify-center border border-gray-50">
                <div className="text-center p-6 sm:p-8">
                  <span className="text-2xl sm:text-3xl font-medium text-[#171512] block mb-2">
                    Founder-led,
                  </span>
                  <span className="text-gray-500 font-medium text-base sm:text-lg">every project gets full attention — not a bench of juniors.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 bg-[#2F5FCF] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-[#2F5FCF] uppercase tracking-wider">Why Zealix</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111] mb-4 sm:mb-6 leading-tight">
              A partner, not just a vendor
            </h3>
            
            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              Whether you're a solo founder, a growing team, or an established enterprise, we partner with you to turn ambitious ideas into production-ready digital products — combining AI engineering with modern web development for speed, quality, and scale.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                "We focus on speed without compromising quality",
                "Deep expertise in both AI and Classic Web Engineering",
                "Scalable architecture from Day 1",
                "Transparency and constant communication"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#2F5FCF] rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm sm:text-base text-[#111111] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
