"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-32 md:pb-32 bg-[#FEFFFE]">
      <div className="container max-w-6xl mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">
        
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
          className="mx-auto max-w-5xl text-5xl md:text-7xl font-medium tracking-tight text-[#111111] mb-8 leading-[1.1]"
        >
          AI development{" "}
          <span className="inline-flex align-middle justify-center items-center w-14 h-14 bg-white rounded-2xl shadow-sm border border-gray-100 mx-2 rotate-3 hover:rotate-6 transition-transform">
             <Zap className="h-7 w-7 text-black fill-black" />
          </span>{" "}
         company enabling
          <br className="hidden md:block" />
          innovation and rapid development
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-2xl text-xl text-gray-500 mb-10 leading-relaxed font-normal"
        >
          Automate workflows, streamline processes, and drive growth with intelligent solutions built for the future
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
        >
          <Button 
            className="bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-full h-14 pl-8 pr-2 text-lg font-medium min-w-[200px] shadow-lg shadow-blue-100/50 transition-all duration-300 hover:scale-105 flex items-center justify-between gap-4"
          >
            Get started
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-[#4880ED]">
               <ArrowRight className="h-5 w-5" />
            </div>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
