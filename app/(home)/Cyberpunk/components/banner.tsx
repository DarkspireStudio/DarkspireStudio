import React from "react";
import { bannerCyberpunk, keyCyberpunk } from "../../data/data";
import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";
import Image from "next/image";


export default function BannerCyberpunk() {
 return (
   <div>
        {bannerCyberpunk.map((projet, index)=>{

            return (
            <div key={index}>
                <div className="flex gap-3 items-center">
                <Link href={"/"} >
                    <IoIosArrowDropleft className="w-8 h-8 hover:bg-purple-700 rounded-full hover:scale-125 transition-all" />
                </Link>

                <h1 className="text-4xl lg:text-7x1 font-bold py-5">{projet.title}</h1>
                </div>

                <Image src={projet.cover} alt="Thumb" className="rounded-xl border-4 border-purple-700 " height={1080} width={1920}/>

                <p className="text-gray-500 font-bold">Palavras-chave: <span className="text-gray-700 font-normal">{keyCyberpunk.words}.</span></p>

            </div>
            )

        })}
                        
   </div>
 );
}