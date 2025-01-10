import Link from "next/link";
import React from "react";
import { extTimeless } from "../../data/data";

export default function ExternaLTimeless() {
 return (
   <div className="space-y-4">

    {extTimeless.map((ext, index)=>{

        const Icon = ext.ico;

        return (
        <Link key={index} href={ext.href} target="_blank" className="border-2 border-white flex justify-center p-2 rounded-xl gap-2 hover:border-purple-700 items-center hover:scale-125 group">

          <Icon className="h-6 w-6 group-hover:fill-purple-700"/>
          <p className=" group-hover:text-purple-700">{ext.label}</p>
        </Link>
        )
    })}

        
   </div>
 );
}