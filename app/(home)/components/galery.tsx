"use client";
import React from "react";
import Title from "./titles";
import useMasonry from "@/components/ui/useMansory";
import { galery } from "../data/data";
import Image from 'next/image'


export default function Galeria() {
  
  const masonryContainer = useMasonry();

 return (
   <div className="py-10 p-5 sm:p-0 px-8">
        <Title text={"G A L E R I A"} className="flex flex-col items-center justify-center"/>

        <div className="pt-20 gap-4">
          <div
            ref={masonryContainer}
            className="grid items-start gap-4 sm:grid-cols-3 md:gap-6"
          >          
            {galery.map((image, index)=>{
              return (
                <div key={index} className="hover:scale-150 transition-all  bg-black p-2 rounded-md border-gray-700 border-2 cursor-pointer">
                  <Image src={image.src} alt={image.txt} height={500} width={500}/>
                  <h1 className="text-3xl font-mono font-bold text-gray-500">{image.txt}</h1>
                  <div className=" border-t-slate-700 border-t mt-2">
                  <div  className="flex items-center gap-1">
                    {image.type.map((Txt, idx) =>{
                      return (
                          <p key={idx} className="text-black bg-gray-600 rounded-md text-sm mt-2 flex items-center gap-2 px-2">{Txt}</p>
                      )
                    })}
                    </div>
                    <div className="flex items-center gap-1 mt-1">
                      <p className="text-sm font-mono text-gray-700">Feito com:</p>
                      {image.tech.map((Icon, idx) =>{
                        return (
                          <Icon key={idx} className="w-4 h-4 fill-gray-700"/>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
 
        </div>
   </div>
 );
}