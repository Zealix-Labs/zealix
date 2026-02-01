"use client";

import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#FEFFFE]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#8BB4FF] to-[#4880ED] p-8 sm:p-12 md:p-16 lg:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shadow-inner border border-white/30">
                  <Zap className="h-7 w-7 sm:h-8 sm:w-8 text-white fill-white" />
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0">
                    Transform the way you manage <br className="hidden sm:block"/>
                    AI tasks with Zealix
                </h2>
                
                <div className="mt-6 sm:mt-8">
                    <Button 
                        size="lg" 
                        className="bg-white text-[#4880ED] hover:bg-white/90 rounded-full h-12 sm:h-14 pl-6 sm:pl-8 pr-1.5 sm:pr-2 text-base sm:text-lg font-medium min-w-[180px] sm:min-w-[200px] w-full sm:w-auto max-w-[280px] shadow-lg flex items-center justify-between gap-3 sm:gap-4"
                    >
                        Get started
                        <div className="h-9 w-9 sm:h-10 sm:w-10 bg-[#4880ED] rounded-full flex items-center justify-center text-white">
                           <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
