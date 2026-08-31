import Link from "next/link";

const quickLinks = [
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Office Hub", href: "/#products" },
  { label: "Process", href: "/#process" },
  { label: "Blog", href: "/blog" },
];

export function Footer() {
  return (
    <footer className="bg-[#FFFFFF] border-t border-black/5 py-8 sm:py-12 md:py-16">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 sm:gap-10 mb-8 sm:mb-12">
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-2 text-xl sm:text-2xl font-semibold tracking-tight mb-2 sm:mb-4">
              Zealix
            </Link>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              A technology partner for any business, any size — full-stack SaaS, AI, and custom software.
            </p>
          </div>

          <div className="flex gap-10 sm:gap-16">
            <div>
              <h4 className="font-semibold text-[#171512] mb-3 sm:mb-4 text-sm sm:text-base">Quick links</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-500 hover:text-[#2F5FCF] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#171512] mb-3 sm:mb-4 text-sm sm:text-base">Follow us</h4>
              <ul className="flex flex-col gap-2 sm:gap-3">
                <li>
                  <a
                    href="https://www.instagram.com/zealixgroup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-[#2F5FCF] transition-colors"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-black/5 pt-4 sm:pt-6 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-gray-400">
            © Zealix {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
