"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { blogPosts, categories } from "@/lib/blog-posts";

export function BlogList() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
        {["All", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              activeCategory === category
                ? "bg-[#2F5FCF] text-white border-[#2F5FCF]"
                : "bg-white text-gray-600 border-black/10 hover:border-[#2F5FCF]/40 hover:text-[#2F5FCF]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {filteredPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts in this category yet — check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white border border-black/5 rounded-2xl p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
            >
              <span className="inline-block w-fit text-xs font-medium text-[#2F5FCF] bg-[#EFF6FF] px-3 py-1 rounded-full mb-4">
                {post.category}
              </span>
              <h3 className="text-lg font-medium text-[#171512] mb-2 leading-snug group-hover:text-[#2F5FCF] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between text-xs text-gray-400 mt-auto pt-4 border-t border-black/5">
                <span>{post.readTime}</span>
                <span className="inline-flex items-center gap-1 text-[#2F5FCF] font-medium">
                  Read <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
