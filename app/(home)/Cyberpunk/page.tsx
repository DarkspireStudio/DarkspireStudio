import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";


import BannerCyberpunk from "./components/banner";
import OutherMidias from "./components/mid";
import TextCyberpunk from "./components/text";
import ExternalCyberpunk from "./components/external";


export default function Cyberpunk() {

 return (
  <div className="bg-black font-mono">
    <div className="max-w-7xl mx-auto p-5">

    <Navbar/>

      <div className="flex-col content-center space-y-4">

        <BannerCyberpunk />

        <TextCyberpunk />

        <h2 className="text-2xl lg:text-7x1 font-bold mt-5 text-gray-500">Links Externos</h2>

        <ExternalCyberpunk />

        <h2 className="text-2xl lg:text-7x1 font-bold mt-5 text-gray-500">Outras mídias</h2>

        <OutherMidias />
      
    </div>
      
    <Footer/>
    </div>
  </div>
   
 );
}