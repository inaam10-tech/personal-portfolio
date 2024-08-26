import Hero from "@/components/Hero";
import RecentProjects from "@/components/recentproj";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Secret from "@/components/Secret";


export default function Home() {
  return (
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav navItems={navItems}/>
          <Hero />
          <Grid />
          <RecentProjects />
          <Experience />
          {/* <Secret /> */}
          <Footer />

        </div>
      </main>
    );
}
