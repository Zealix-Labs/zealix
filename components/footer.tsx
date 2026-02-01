import Link from "next/link";
import { Twitter, Linkedin, Facebook, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-10 sm:py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-24 mb-12 sm:mb-14 md:mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight mb-4 sm:mb-6">
              Zealix<span className="text-[#4880ED] text-3xl sm:text-4xl leading-[0]"></span>
            </Link>
            <p className="text-gray-500 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed font-medium">
              AI powered solutions for automation and growth.
            </p>
            <Button className="bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-full h-11 sm:h-12 pl-5 sm:pl-6 pr-1.5 py-1 text-sm sm:text-base font-medium min-w-[140px] sm:min-w-[160px] w-full sm:w-auto max-w-[240px] shadow-md transition-all hover:scale-105 flex items-center justify-between gap-2">
              Get started 
              <div className="h-8 w-8 sm:h-9 sm:w-9 bg-white rounded-full flex items-center justify-center text-[#4880ED]">
                 <ArrowRight className="h-4 w-4" />
              </div>
            </Button>
          </div>
          
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-left">
            <div>
              <h4 className="font-semibold text-[#111111] mb-4 sm:mb-6 text-base sm:text-lg">Quick links</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">About us</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Services</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Features</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Pricing</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Testimonial</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#111111] mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Content Creation</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Development</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">Automation</Link></li>
                <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors font-medium">LLM Development</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#111111] mb-4 sm:mb-6 text-base sm:text-lg">Follow us</h4>
              <ul className="space-y-3 sm:space-y-4">
                 <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors block font-medium">Instagram</Link></li>
                 <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors block font-medium">Twitter</Link></li>
                 <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors block font-medium">Facebook</Link></li>
                 <li><Link href="#" className="text-sm sm:text-base text-gray-500 hover:text-[#4880ED] transition-colors block font-medium">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6 sm:pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-gray-400 font-medium text-center md:text-left">
            @ Zealix {new Date().getFullYear()}
          </p>
          <div className="flex gap-6">
             {/* Placeholder for legal links if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
