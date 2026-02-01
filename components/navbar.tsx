"use client";

import Link from "next/link";
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
import { Menu, ArrowRight, Brain, Code2, Smartphone, Layers, Palette, Cloud, Briefcase, Users, BookOpen, FileText } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const servicesItems = [
  { icon: Brain, title: "AI Development", description: "Custom LLMs, NLP, and automation", href: "#services" },
  { icon: Code2, title: "Web Development", description: "Modern, scalable web applications", href: "#services" },
  { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform apps", href: "#services" },
  { icon: Layers, title: "SaaS Engineering", description: "Multi-tenant architectures", href: "#services" },
];

const industriesItems = [
  { title: "FinTech", description: "Financial technology solutions", href: "#industries" },
  { title: "HealthTech", description: "Healthcare innovations", href: "#industries" },
  { title: "E-commerce", description: "Online retail platforms", href: "#industries" },
  { title: "EdTech", description: "Educational technology", href: "#industries" },
];

const resourcesItems = [
  { icon: BookOpen, title: "Blog", description: "Latest insights and articles", href: "#" },
  { icon: FileText, title: "Case Studies", description: "Success stories from clients", href: "#" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
          Zealix<span className="text-[#4880ED] text-4xl leading-[0]">.</span>
        </Link>
        
        {/* Desktop Nav with Popovers */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-[#4880ED] bg-transparent">Services</NavigationMenuTrigger>
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
                            <div className="h-10 w-10 bg-[#4880ED] rounded-lg flex items-center justify-center text-white">
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
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-[#4880ED] bg-transparent">Industries</NavigationMenuTrigger>
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
              <Link href="#process" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#4880ED] bg-transparent")}>
                  Process
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-sm font-medium text-gray-600 hover:text-[#4880ED] bg-transparent">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4">
                  {resourcesItems.map((item) => (
                    <li key={item.title}>
                      <NavigationMenuLink asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block select-none rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-[#EFF6FF] focus:bg-[#EFF6FF]"
                          )}
                        >
                          <div className="flex items-center gap-3">
                             <div className="h-9 w-9 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500">
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
              <Link href="#about" legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-sm font-medium text-gray-600 hover:text-[#4880ED] bg-transparent")}>
                  About
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-4">
          <Button 
            className="hidden md:inline-flex bg-[#4880ED] hover:bg-[#3b6cc9] text-white rounded-full h-11 pl-6 pr-1.5 py-1 text-sm font-medium min-w-[140px] shadow-md transition-all hover:scale-105 flex items-center justify-between gap-2"
          >
            Get in touch
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center text-[#4880ED]">
               <ArrowRight className="h-4 w-4" />
            </div>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
              <div className="flex flex-col gap-6 mt-8">
                <Link href="#services" onClick={() => setIsOpen(false)} className="text-lg font-medium">Services</Link>
                <Link href="#industries" onClick={() => setIsOpen(false)} className="text-lg font-medium">Industries</Link>
                <Link href="#process" onClick={() => setIsOpen(false)} className="text-lg font-medium">Process</Link>
                <Link href="#" onClick={() => setIsOpen(false)} className="text-lg font-medium">Resources</Link>
                <Link href="#about" onClick={() => setIsOpen(false)} className="text-lg font-medium">About</Link>
                <Button className="w-full bg-[#4880ED] text-white hover:bg-blue-700 rounded-full mt-4 h-12">
                  Get in touch
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
