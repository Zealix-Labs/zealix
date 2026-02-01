"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X, Send, Loader2 } from "lucide-react";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactDialog({ open, onOpenChange }: ContactDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    
    // Using Web3Forms - Free service, no backend needed
    // Replace 'YOUR_ACCESS_KEY_HERE' with your actual Web3Forms access key
    // Get free key at: https://web3forms.com/
    formData.append("access_key", "c9d0d9c8-bb54-47d3-b264-5079f6cdf883");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        setTimeout(() => {
          onOpenChange(false);
          setSubmitStatus("idle");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto p-0 w-[calc(100%-2rem)]">
        <div className="p-4 sm:p-6 md:p-8">
          <DialogHeader className="space-y-3 mb-6">
            <DialogTitle className="text-2xl sm:text-3xl font-medium text-[#111111]">
              Let's Build Something Amazing
            </DialogTitle>
            <DialogDescription className="text-base text-gray-500">
              Tell us about your project and we'll get back to you within 24 hours.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-[#111111]">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] placeholder:text-gray-400"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-[#111111]">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] placeholder:text-gray-400"
                placeholder="john@example.com"
              />
            </div>

            {/* Phone (Optional) */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-[#111111]">
                Phone Number <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] placeholder:text-gray-400"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Project Type */}
            <div className="space-y-2">
              <label htmlFor="projectType" className="text-sm font-medium text-[#111111]">
                What are you looking for? <span className="text-red-500">*</span>
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] bg-white"
              >
                <option value="">Select a service</option>
                <option value="AI Development">AI Development</option>
                <option value="Web App Development">Web App Development</option>
                <option value="Mobile App Development">Mobile App Development</option>
                <option value="SaaS Product Engineering">SaaS Product Engineering</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Cloud & DevOps">Cloud & DevOps</option>
                <option value="Consultation">General Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Budget Range */}
            <div className="space-y-2">
              <label htmlFor="budget" className="text-sm font-medium text-[#111111]">
                Project Budget <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] bg-white"
              >
                <option value="">Select budget range</option>
                <option value="Under $10k">Under $10,000</option>
                <option value="$10k - $25k">$10,000 - $25,000</option>
                <option value="$25k - $50k">$25,000 - $50,000</option>
                <option value="$50k - $100k">$50,000 - $100,000</option>
                <option value="$100k+">$100,000+</option>
              </select>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-[#111111]">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] placeholder:text-gray-400 resize-none"
                placeholder="Describe your project, goals, timeline, and any specific requirements..."
              />
            </div>

            {/* Additional Information */}
            <div className="space-y-2">
              <label htmlFor="additional" className="text-sm font-medium text-[#111111]">
                Additional Information <span className="text-gray-400 text-xs">(Optional)</span>
              </label>
              <textarea
                id="additional"
                name="additional"
                rows={2}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#4880ED] focus:ring-2 focus:ring-[#4880ED]/20 outline-none transition-all text-[#111111] placeholder:text-gray-400 resize-none"
                placeholder="Any other details you'd like to share..."
              />
            </div>

            {/* Submit Status Messages */}
            {submitStatus === "success" && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm">
                ✗ Something went wrong. Please try again or email us directly.
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-lg h-12 text-base font-medium shadow-md transition-all hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
