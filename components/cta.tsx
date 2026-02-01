"use client";

import { Button } from "@/components/ui/button";
import { Zap, ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-16 bg-[#FEFFFE]">
      <div className="container max-w-6xl mx-auto px-4 md:px-8">
        <div className="rounded-[3rem] bg-gradient-to-br from-[#8BB4FF] to-[#4880ED] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-blue-200">
            
            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/30">
                  <Zap className="h-8 w-8 text-white fill-white" />
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                    Transform the way you manage <br className="hidden md:block"/>
                    AI tasks with Zealix
                </h2>
                
                <div className="mt-8">
                    <Button 
                        size="lg" 
                        className="bg-white text-[#4880ED] hover:bg-white/90 rounded-full h-14 pl-8 pr-2 text-lg font-medium min-w-[200px] shadow-lg flex items-center justify-between gap-4"
                    >
                        Get started
                        <div className="h-10 w-10 bg-[#4880ED] rounded-full flex items-center justify-center text-white">
                           <ArrowRight className="h-5 w-5" />
                        </div>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
