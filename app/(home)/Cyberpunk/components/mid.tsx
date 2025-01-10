"use client";
import React from "react";

import useMasonry from "@/components/ui/useMansory";
import { midCyberpunk } from "../../data/data";
import Image from "next/image";

export default function OutherMidias() {
    
    const masonryContainer = useMasonry();
    
 return (
   <div>
        <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
        >          
            {midCyberpunk.map((image, index)=>{
                return (
                    <div key={index} className="hover:scale-150 transition-all  bg-black p-2 rounded-md border-gray-700 border-2 cursor-pointer">
                        <Image src={image.src} alt={image.title} height={500} width={500}/>
                    </div>
                )
            })}
        </div>
    </div>
 );
}