import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zealix.in";
const title = "Zealix — Full-Stack SaaS, AI & Custom Software Development";
const description =
  "Zealix is a technology partner for founders and teams who need a real problem solved: full-stack SaaS apps, AI development, and custom software built and shipped by engineers, not a template.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Zealix",
  },
  description,
  keywords: [
    "Zealix",
    "SaaS development company",
    "custom SaaS apps",
    "AI development services",
    "full stack development",
    "technology partner",
    "Office Hub",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Zealix",
    title,
    description,
    images: [{ url: "/zealix.png", width: 512, height: 512, alt: "Zealix" }],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/zealix.png"],
  },
  icons: {
    icon: "/zealix.png",
    shortcut: "/zealix.png",
    apple: "/zealix.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zealix",
  url: siteUrl,
  logo: `${siteUrl}/zealix.png`,
  sameAs: ["https://www.instagram.com/zealixgroup"],
  description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased"
        style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
