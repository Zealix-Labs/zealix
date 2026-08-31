"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { ContactDialog } from "@/components/contact-dialog";

export function CTA() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <section className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF]">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white via-[#EFF6FF] to-blue-100/60 border border-black/5 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden">

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#171512] mb-4 sm:mb-6 tracking-tight leading-tight px-4 sm:px-0">
                    Got a problem worth solving? Let's talk about it.
                </h2>
                <p className="text-gray-500 mb-8 max-w-lg">
                  Any business, any size — no pitch deck needed. Tell us what's broken, we'll tell you honestly if we're the right fit to fix it.
                </p>

                <Button
                    onClick={() => setIsContactOpen(true)}
                    className="bg-[#2F5FCF] hover:bg-[#24499E] text-white rounded-lg h-12 sm:h-14 px-7 sm:px-9 text-base sm:text-lg font-medium shadow-sm transition-colors duration-200 flex items-center justify-center gap-2"
                >
                    Start a project
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
            </div>
        </div>
      </div>
    </section>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
