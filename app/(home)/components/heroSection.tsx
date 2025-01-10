import Image from "next/image";
import Link from "next/link";
import React from "react";


export default function HeroSection() {

 return (
   <div className="min-h-[65vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">

        <div className="space-y-4 text-center lg:text-justify">

            <h1 className="text-4xl lg:text-7x1 font-bold">
                Bem-vindo ao meu Portfólio! 👋<br/>
                
                <span className="underline underline-offset-8 decoration-purple-700">{"Meu nome é Pablo Diogo"}</span>
            </h1>

            <p className="md:w-96 text-lg text-gray-300 hyphens-auto">
                {"Aqui você encontra projetos que refletem minha paixão por criar soluções visuais impactantes e funcionais. Com experiência em design gráfico, identidade visual, UI/UX e ilustração, busco transformar ideias em experiências únicas, aliando criatividade e técnica."}
            </p>

            <Link href={"mailto:pablocontato214@gmail.com"} className="inline-block group" >

            <button
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-semibold hover:text-purple-700"
            >
                Contato 📫
            </button>
            
            </Link>

        </div>

        <div className="relative animate-wiggle">

                <Image src={"/IconSticker.png"} alt={"IconSticker"} width={500} height={200}/>

            <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
            


   </div>
 );
}