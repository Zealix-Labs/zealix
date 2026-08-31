"use client";

import { Card } from "@/components/ui/card";
import { Brain, Code2, Smartphone, Layers, Palette, Cloud, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Agentic AI systems, LLM integrations, and intelligent automation pipelines."
  },
  {
    icon: Code2,
    title: "Web App Development",
    description: "Scalable, high-performance web applications using modern frameworks."
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile experiences for iOS and Android."
  },
  {
    icon: Layers,
    title: "SaaS Product Engineering",
    description: "End-to-end multi-tenant architectures built for infinite scalability."
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Intuitive, human-centric designs that drive user engagement."
  },
  {
    icon: Cloud,
    title: "Cloud and DevOps",
    description: "Secure cloud infrastructure and CI/CD automation for speed."
  },
  {
    icon: ShieldCheck,
    title: "Cyber Security",
    description: "Penetration testing, vulnerability assessments, and security audits to keep your product safe."
  }
];

export function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF] relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#2F5FCF] rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-[#2F5FCF] uppercase tracking-wider">Our Capabilities</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111]">
            Comprehensive digital solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-5 sm:p-6 h-full bg-[#EFF6FF] border border-black/5 shadow-none hover:shadow-lg transition-all duration-300 group rounded-xl sm:rounded-2xl flex flex-col items-center text-center">
                
                <div className="h-12 w-12 sm:h-14 sm:w-14 bg-[#2F5FCF] rounded-full flex items-center justify-center mb-3 sm:mb-4 text-white shadow-md shadow-black/5 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                
                <h4 className="text-base sm:text-lg font-medium text-[#111111] mb-2">
                  {service.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
