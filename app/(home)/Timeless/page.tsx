import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

import BannerTimeless from "./components/banner";
import TextTimeless from "./components/text";
import OutherMidias from "./components/mid";
import ExternaLTimeless from "./components/external";


export default function Timelles() {

 return (
  <div className="bg-black">
    <div className="max-w-7xl mx-auto p-5">

    <Navbar/>

      <div className="flex-col content-center space-y-4">

        <BannerTimeless />

        <TextTimeless />

        <h2 className="text-2xl lg:text-7x1 font-bold mt-5 text-gray-500">Links Externos</h2>

        <ExternaLTimeless />

        <h2 className="text-2xl lg:text-7x1 font-bold mt-5 text-gray-500">Outras mídias</h2>

        <OutherMidias />
      
    </div>
      
    <Footer/>
    </div>
  </div>
   
 );
}