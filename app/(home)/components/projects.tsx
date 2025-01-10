import React from "react";
import Title from "./titles";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { cn } from "@/lib/utils";
import { projects } from "../data/data";

export default function Projects() {
 
    return (
        <div className="py-10 p-5 sm:p-0 ">
            <Title text={"P R O J E T O S"} className="flex flex-col items-center justify-center"/>

            <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 py-10 p-5 gap-4">

                {projects.map((project, index)=>{
                    return (
                        <Link href={project.Link} key={index}>
                            <div className={cn("p-1 rounded-md", project.background)}>
                                <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">

                                    <div className="space-y-2 bg-opacity-50 bg-gray-950 rounded-sm p-2">

                                        <h1 className="text-4x1 font-bold">{project.title}</h1>

                                        <div className="flex items-center gap-4">
                                            {project.tech.map((Icon, idx) =>{
                                                return (
                                                    <Icon key={idx} className="w-6 h-6"/>
                                                )
                                            })}
                                        </div>

                                    </div>

                                </DirectionAwareHover>
                            </div>
                        </Link>
                    )

                })}

            </div>

        </div>
    );
}