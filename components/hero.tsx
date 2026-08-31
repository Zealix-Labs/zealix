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
      <section className="relative overflow-hidden pt-16 pb-34 sm:pt-28 sm:pb-20 md:pt-32 md:pb-34 bg-[#FFFFFF]">
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
          className="mx-auto max-w-5xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-[#171512] mb-6 md:mb-8 leading-[1.1] px-4 sm:px-0"
        >
          We build the software{" "}
          <br className="hidden sm:block" />
          your team{" "}
          <span className="text-[#2F5FCF] relative inline-block">
            actually needs
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-1 left-0 h-1 bg-[#2F5FCF]/25 rounded-full"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto max-w-2xl text-lg sm:text-xl text-gray-500 mb-14 md:mb-10 leading-relaxed font-normal px-4 sm:px-6 md:px-0"
        >
          Zealix is a technology partner for ambitious businesses — building and shipping full-stack SaaS, AI-powered solutions, and custom software, engineered from the ground up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0"
        >
          <Button
            onClick={() => setIsContactOpen(true)}
            className="bg-[#2F5FCF] hover:bg-[#24499E] text-white rounded-lg h-12 sm:h-14 px-7 sm:px-9 text-base sm:text-lg font-medium w-full sm:w-auto shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Start a project
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </motion.div>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
