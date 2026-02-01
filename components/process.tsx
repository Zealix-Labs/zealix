"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, TestTube, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Lightbulb,
    title: "Discover and Define",
    description: "We dive deep into your vision, requirements, and market to define a clear roadmap."
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design and Prototype",
    description: "Creating high-fidelity interactive prototypes to visualize the end product early."
  },
  {
    number: "03",
    icon: Code2,
    title: "Build and Train",
    description: "Agile development sprints combined with rigorous AI model training and tuning."
  },
  {
    number: "04",
    icon: TestTube,
    title: "Test and Launch",
    description: "Comprehensive testing ensures a bug-free, secure, and performant launch."
  },
  {
    number: "05",
    icon: Rocket,
    title: "Scale and Optimize",
    description: "Post-launch monitoring, feature iterations, and infrastructure scaling."
  }
];

export function Process() {
  return (
    <section id="process" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#EFF6FF] to-white">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#4880ED] rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-[#4880ED] uppercase tracking-wider">Our Workflow</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111]">
            From concept to scale
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col items-center text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#4880ED] rounded-xl flex items-center justify-center text-white mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <step.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <span className="text-xs font-semibold text-[#4880ED] mb-2">STEP {step.number}</span>
                <h4 className="text-sm sm:text-base font-semibold text-[#111111] mb-2">{step.title}</h4>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
