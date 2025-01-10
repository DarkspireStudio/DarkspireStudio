import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/heroSection";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Footer from "./components/footer";
import Galery from "./components/galery";

export default function page() {
 return (
   <div className="min-h-screen bg-black overflow-hidden font-mono">

    <div className="dark:bg-black bg-white  dark:bg-dot-white/[0.1] bg-dot-black/[0.2] relative">
      
      <div className="max-w-7xl mx-auto p-5">
        
        <Navbar/>


        <HeroSection/>

      </div>

      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 Xl:bottom-0 w-full"></div>

    </div>

    <div className="max-w-7xl mx-auto p-5 mt-20">
      <Skills/>

      <Projects/>

      <Galery/>

      <Footer/>
    </div>

   </div>
 );
}