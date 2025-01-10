import React from "react";
import  Image  from "next/image";

export default function Footer() {
 return (
   <div className="border-t border-t-violet-700 mt-10 flex justify-between items-center">

      <Image src={"/Icon-White.svg"} alt={"Logo"} className="h-28 mt-2" height={500} width={50}/>

      <p className="text-right font-bold">DESIGNED BY<br/>DARKSPIRE STUDIO</p>

   </div>
 );
}