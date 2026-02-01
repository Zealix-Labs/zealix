"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ContactDialog } from "@/components/contact-dialog";

export function Hero() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-34 sm:pt-28 sm:pb-20 md:pt-32 md:pb-34 bg-[#FEFFFE]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8 relative z-10 text-center flex flex-col items-center">
        
        {/* Rating/Trust Badge (Optional based on screenshot, but good to keep if fits) */}
         <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2"
        >
           {/* Placeholder for avatars if needed, otherwise just spacing */}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#111111] mb-6 md:mb-8 leading-[1.1] px-4 sm:px-0"
        >
          Building Cutting-Edge
          <br className="hidden sm:block" />
          AI Solutions for{" "}
          <span className="text-[#4880ED] relative inline-block">
            Modern Businesses
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-1 left-0 h-1 bg-[#4880ED]/30 rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-500 mb-14 md:mb-10 leading-relaxed font-normal px-4 sm:px-6 md:px-0"
        >
          We build cutting-edge AI solutions for startups, enterprises, and fast-growing businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
        >
          <Button 
            onClick={() => setIsContactOpen(true)}
            className="bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-full h-12 sm:h-14 pl-6 sm:pl-8 pr-1.5 sm:pr-2 text-base sm:text-lg font-medium min-w-[180px] sm:min-w-[200px] w-full sm:w-auto max-w-[280px] shadow-lg shadow-blue-100/50 transition-all duration-300 hover:scale-105 flex items-center justify-between gap-3 sm:gap-4"
          >
            Get started
            <div className="h-9 w-9 sm:h-10 sm:w-10 bg-white rounded-full flex items-center justify-center text-[#4880ED]">
               <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
            </div>
          </Button>
        </motion.div>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
