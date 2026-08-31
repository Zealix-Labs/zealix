"use client";

import { Instagram, CalendarCheck, DoorOpen, Wallet, Users, Car, Boxes } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  { icon: Wallet, label: "Payroll approvals" },
  { icon: DoorOpen, label: "Meeting room booking" },
  { icon: Car, label: "Desk & parking booking" },
  { icon: Boxes, label: "Asset management" },
  { icon: Users, label: "Employee management" },
  { icon: CalendarCheck, label: "Day-to-day office ops" },
];

export function Products() {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 bg-[#FFFFFF] relative">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 px-4 sm:px-0">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-2 h-2 bg-[#2F5FCF] rounded-full"></span>
            <span className="text-xs sm:text-sm font-medium text-[#2F5FCF] uppercase tracking-wider">Coming soon</span>
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#111111]">
            Office Hub — one place for your entire office
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto mt-4 leading-relaxed">
            We built Office Hub because we kept seeing the same mess at every company we talked to:
            payroll approvals buried in email, meeting rooms double-booked, no one knowing which desk
            or parking spot is free, and asset records scattered across spreadsheets. Office Hub brings
            all of it into one simple app.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-[#EFF6FF] border border-black/5 rounded-2xl p-6 sm:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {modules.map((m, i) => (
              <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-4 border border-black/5">
                <div className="h-9 w-9 shrink-0 bg-[#2F5FCF]/10 rounded-lg flex items-center justify-center text-[#2F5FCF]">
                  <m.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-medium text-[#111111]">{m.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              We're building this in the open — follow along and get early access first.
            </p>
            <a
              href="https://www.instagram.com/zealixgroup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#2F5FCF] hover:bg-[#24499E] text-white rounded-lg h-11 px-6 text-sm font-medium shadow-sm transition-colors duration-200"
            >
              <Instagram className="h-4 w-4" />
              Follow @zealixgroup
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
