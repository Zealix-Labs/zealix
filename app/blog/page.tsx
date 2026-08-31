import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogList } from "@/components/blog-list";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on AI, cyber security, databases, and engineering — written by the team building Zealix.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#171512] overflow-x-hidden">
      <Navbar />
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-2 h-2 bg-[#2F5FCF] rounded-full"></span>
              <span className="text-xs sm:text-sm font-medium text-[#2F5FCF] uppercase tracking-wider">Blog</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium mb-4">
              Notes from the work
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Practical, opinionated write-ups on AI, security, databases, and engineering — from actual project decisions, not theory.
            </p>
          </div>

          <BlogList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
