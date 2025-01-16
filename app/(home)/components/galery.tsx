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
                <div key={index} className="border-2 rounded-xl bg-purple-700 border-violet-700 cursor-pointer hover:shadow-md hover:shadow-purple-700">
                      <div className="bg-purple-700 p-2 rounded-t-xl">
                        <h1 className="font-bold text-2xl text-center">{image.txt}</h1>
                      </div>

                      <Image src={image.src} alt={image.txt} height={500} width={500}/>

                      <div className="bg-slate-700 p-2 border-t-2 border-t-violet-700">
                        <div  className="flex items-center gap-1 justify-center">
                          {image.type.map((Txt, idx) =>{
                            return (
                                <p key={idx} className="bg-black rounded-md text-sm flex items-center gap-2 px-2">{Txt}</p>
                            )
                          })}
                        </div>
                      </div>

                      <div className="bg-slate-950 p-2 rounded-b-xl border-t-2 border-t-violet-700">
                        <div  className="justify-center">
                          <div className="flex items-center gap-2 justify-center">
                            {image.tech.map((Icon, idx) =>{
                              return (
                                <Icon key={idx} className="w-6 h-6"/>
                              )
                            })}
                          </div>
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