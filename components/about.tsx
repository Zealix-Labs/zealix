"use client";

import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function About() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = 98;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Side - Visual Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:w-1/2 relative"
            ref={ref}
          >
            <div className="aspect-square max-w-md mx-auto rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#E9D5FF]/40 via-[#F5E9FF]/30 to-white p-4 sm:p-6 border border-purple-100/50">
              <div className="w-full h-full bg-white rounded-[1.5rem] sm:rounded-[2rem] shadow-xl flex items-center justify-center border border-gray-50">
                <div className="text-center p-6 sm:p-8">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-semibold text-[#4880ED] block mb-2 sm:mb-3">
                    {count}%
                  </span>
                  <span className="text-gray-500 font-medium text-base sm:text-lg">Project Success Rate</span>
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
              <span className="w-2 h-2 bg-[#4880ED] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-[#4880ED] uppercase tracking-wider">Why Zealix</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111] mb-4 sm:mb-6 leading-tight">
              A partner, not just a vendor
            </h3>
            
            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 leading-relaxed">
              We partner with founders and enterprises to turn ambitious ideas into production-ready digital products. By combining elite AI engineering with modern web development, we deliver solutions that are built for speed, quality, and infinite scalability.
            </p>
            
            <div className="space-y-3 sm:space-y-4">
              {[
                "We focus on speed without compromising quality",
                "Deep expertise in both AI and Classic Web Engineering",
                "Scalable architecture from Day 1",
                "Transparency and constant communication"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-[#4880ED] rounded-full flex items-center justify-center">
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
