"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const industries = [
  "FinTech",
  "HealthTech",
  "E-commerce",
  "EdTech",
  "Logistics",
  "Real Estate",
  "Enterprise Software",
  "Startups"
];

export function Industries() {
  return (
    <section id="industries" className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 sm:gap-10 md:gap-12 items-start md:items-center justify-between">
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 bg-[#2F5FCF] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-[#2F5FCF] uppercase tracking-wider">Industries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111] mb-4 sm:mb-6 leading-tight">
              Transforming industries with intelligent technology
            </h2>
            <p className="text-base sm:text-lg text-gray-500 mb-6 sm:mb-8 max-w-lg">
              We bring deep domain expertise to every project, ensuring your product isn't just built well, but solves real industry challenges.
            </p>
          </div>
          
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full">
            {industries.map((industry, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-100 transition-all"
              >
                <div className="flex-shrink-0 text-[#7FA6E8]">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <span className="text-base sm:text-lg font-medium text-[#111111]">{industry}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
