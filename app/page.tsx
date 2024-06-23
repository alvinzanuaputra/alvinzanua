"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/About";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className=" bg-black-100 flex justify-center items-center flex-col">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        {/* <Experience /> */}
        {/* <Clients /> */}
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
