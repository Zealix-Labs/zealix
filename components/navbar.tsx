"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, Brain, Code2, Smartphone, Layers, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ContactDialog } from "@/components/contact-dialog";

const servicesItems = [
  { icon: Brain, title: "AI Development", description: "Agentic AI, LLM integrations, and automation", href: "/#services" },
  { icon: Code2, title: "Web Development", description: "Modern, scalable web applications", href: "/#services" },
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform apps", href: "/#services" },
  { icon: Layers, title: "SaaS Engineering", description: "Multi-tenant architectures", href: "/#services" },
  { icon: ShieldCheck, title: "Cyber Security", description: "Pen testing and vulnerability assessments", href: "/#services" },
];

const industriesItems = [
  { title: "FinTech", description: "Financial technology solutions", href: "/#industries" },
  { title: "HealthTech", description: "Healthcare innovations", href: "/#industries" },
  { title: "E-commerce", description: "Online retail platforms", href: "/#industries" },
  { title: "EdTech", description: "Educational technology", href: "/#industries" },
];


export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <>
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
          <Image src="/zealix.png" alt="Zealix" width={32} height={32} className="w-8 h-8" />
          Zealix<span className="text-[#2F5FCF] text-4xl leading-[0]"></span>
        </Link>
        
        {/* Desktop Nav with Popovers */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent">Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                  {servicesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block select-none space-y-1 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EFF6FF] focus:bg-[#EFF6FF]"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 bg-[#2F5FCF] rounded-lg flex items-center justify-center text-white">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-sm font-medium leading-none text-[#111111]">{item.title}</div>
                              <p className="line-clamp-1 text-sm leading-snug text-gray-500 mt-1">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent">Industries</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  {industriesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EFF6FF] focus:bg-[#EFF6FF]"
                          )}
                        >
                          <div className="text-sm font-medium leading-none text-[#111111]">{item.title}</div>
                          <p className="line-clamp-1 text-sm leading-snug text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent")}>
                <Link href="/#products">Product</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent")}>
                <Link href="/#process">Process</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent")}>
                <Link href="/blog">Blog</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#2F5FCF] bg-transparent")}>
                <Link href="/#about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => setIsContactOpen(true)}
            className="hidden md:inline-flex bg-[#2F5FCF] hover:bg-[#24499E] text-white rounded-lg h-10 px-5 text-sm font-medium shadow-sm transition-colors duration-200"
          >
            Start a project
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="px-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
              <div className="flex flex-col gap-6 mt-8 pl-2">
                <Link href="/#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</Link>
                <Link href="/#industries" onClick={() => setIsOpen(false)} className="text-lg font-medium">Industries</Link>
                <Link href="/#products" onClick={() => setIsOpen(false)} className="text-lg font-medium">Product</Link>
                <Link href="/#process" onClick={() => setIsOpen(false)} className="text-lg font-medium">Process</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="text-lg font-medium">Blog</Link>
                <Link href="/#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    setIsContactOpen(true);
                  }}
                  className="w-full bg-[#2F5FCF] text-white hover:bg-[#24499E] rounded-lg mt-4 h-12"
                >
                  Start a project
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>

    <ContactDialog open={isContactOpen} onOpenChange={setIsContactOpen} />
    </>
  );
}
