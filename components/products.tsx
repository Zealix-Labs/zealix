"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Product {
  name: string;
  description: string;
  image: string;
  url?: string;
  youtubeUrl?: string;
}

const products: Product[] = [
  {
    name: "FixPass",
    description: "A smart platform for engineering exam prep with chapter-wise previous year questions, verified answers, and YouTube explanation videos. Study smart, score better!",
    image: "/fixpass.png",
    url: "https://fixpass.education/",
    youtubeUrl: "https://www.youtube.com/@FixPass-k7z"
  },
  {
    name: "Smart EVM Simulator",
    description: "An electronic voting machine simulator used by 100+ local candidates to demonstrate the voting process. Interactive and easy to use for voter education.",
    image: "/smartevm.png",
    url: "https://evm-demo-iota.vercel.app/7y6n5j3h2g1f"
  },
  {
    name: "Trend2Reels",
    description: "Transform your photos into famous viral reels within minutes without any editing. Create engaging content effortlessly.",
    image: "/trend2reels.png"
  }
];

export function Products() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-[#FEFFFE] relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#4880ED] rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-[#4880ED] uppercase tracking-wider">Our Products</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111]">
            Innovative solutions we've built
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card 
                className="p-5 sm:p-6 h-full bg-[#EFF6FF] border border-blue-200/60 shadow-none hover:shadow-lg transition-all duration-300 group rounded-xl sm:rounded-2xl flex flex-col hover:scale-105"
              >
                <div className="relative w-full h-48 sm:h-56 mb-4 rounded-lg overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <h4 className="text-base sm:text-lg font-medium text-[#111111] mb-2">
                  {product.name}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {product.url && (
                  <Button
                    asChild
                    className="w-full bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-lg h-10 text-sm font-medium shadow-sm transition-all hover:scale-105"
                  >
                    <a 
                      href={product.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      Visit Application
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
