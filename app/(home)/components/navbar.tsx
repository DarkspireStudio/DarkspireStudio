import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import Image from "next/image";



export default function Navbar({className}:{className?:string}) {

    const socials = [
        {
            link: "https://www.instagram.com/darkspire.studio/",
            label: "Instagram",
            icon: FaInstagram,
        },

        {
            link: "https://www.instagram.com/mnfll.dsgn/",
            label: "LinkedIn",
            icon: FaLinkedin,
        },
    ]

 return (
   <nav className={cn("py-10  animate-move-down ", className)}>

    <div className="flex justify-between items-center" >
        <Link href="/" className="text-2xl font-bold underline underline-offset-8 decoration-purple-700">
            <Image src={"/White-Color.svg"} alt={"Logo"} width={250} height={200} className="h-20 w-52"/>        
        </Link>

        <div className="flex items-center gap-5">
            {socials.map((social, index)=>{
                
                const Icons = social.icon
                
                return <Link href={social.link} key={index} aria-label={social.label} target="_blank" >
            
                    <Icons className="w-5 h-5 hover:scale-125 transition-all hover:fill-purple-700"/>
                    
                </Link>

            })}
                
                <div className="group">
                    <Link href="https://drive.google.com/file/d/1osYCPA8xH_xVSKMBrtwWi_9lb1iyqHJS/view?usp=sharing" target="_blank" className="hover:scale-110 transition-all flex items-center border-2 rounded-xl p-2 border-white group-hover:border-purple-700">
                        <IoDocumentTextOutline className="w-5 h-5 group-hover:stroke-purple-700"/>
                    </Link>
                </div>

        </div>

    </div>

   </nav>
   
    
    );
}