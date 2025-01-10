'use client'

import React from "react";
import Title from "./titles";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { SiAdobephotoshop, SiAdobepremierepro, SiAdobeindesign, SiAdobeillustrator, SiKrita, SiCanva } from "react-icons/si";

export default function Skills() {

    const skills = [
        {
            text: "Photoshop",
            Icon: SiAdobephotoshop,
            desc:"Manipulação de Imagens",
        },

        {
            text: "Illustrator",
            Icon: SiAdobeillustrator,
            desc:"Criação de vetores",
        },

        {
            text: "InDesign",
            Icon: SiAdobeindesign,
            desc:"Diagramação",
        },

        {
            text: "Premiere Pro",
            Icon: SiAdobepremierepro,
            desc:"Edição de Vídeos",
        },

        {
            text: "Krita",
            Icon: SiKrita ,
            desc:"Ilustrações",
        },

        {
            text: "Canva",
            Icon: SiCanva,
            desc:"Apresentações",
        },
    ]

 return (
   <div className="max-w-5x1 mx-auto px-8">
        <Title text="H A B I L I D A D E S" className="flex flex-col items-center justify-center"/>
            
        <HoverEffect items={skills}/>
   </div>
 );
}