import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { blogPosts } from "@/lib/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
    },
  };
}

function renderParagraph(text: string, key: number) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <p key={key} className="text-base sm:text-lg text-gray-600 leading-relaxed mb-5">
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="text-[#171512] font-semibold">
            {part.slice(2, -2)}
          </strong>
        ) : (
          part
        )
      )}
    </p>
  );
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#FFFFFF] text-[#171512] overflow-x-hidden">
      <Navbar />
      <article className="py-12 sm:py-16 md:py-20">
        <div className="container max-w-3xl mx-auto px-4 sm:px-6 md:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#2F5FCF] transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <span className="inline-block text-xs font-medium text-[#2F5FCF] bg-[#EFF6FF] px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight mb-4">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 text-sm text-gray-400 mb-10">
            <span>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>

          <div>
            {post.content.map((paragraph, i) => renderParagraph(paragraph, i))}
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
