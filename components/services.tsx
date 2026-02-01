"use client";

import { Card } from "@/components/ui/card";
import { Brain, Code2, Smartphone, Layers, Palette, Cloud } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Brain,
    title: "AI Development",
    description: "Custom LLMs, NLP solutions, and intelligent automation pipelines."
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
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white relative">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#4880ED] rounded-full"></span>
            <span className="text-sm font-medium text-[#4880ED] uppercase tracking-wider">Our Capabilities</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-medium text-[#111111]">
            Comprehensive digital solutions
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full bg-[#EFF6FF] border border-blue-200/60 shadow-none hover:shadow-lg transition-all duration-300 group rounded-2xl flex flex-col items-center text-center">
                
                <div className="h-14 w-14 bg-[#4880ED] rounded-full flex items-center justify-center mb-4 text-white shadow-md shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7" />
                </div>
                
                <h4 className="text-lg font-medium text-[#111111] mb-2">
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
