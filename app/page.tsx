"use client"

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/Floatingnavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
   <main  className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
   <FloatingNav navItems={navItems} />
    <Hero />
   </main>
  );
}
