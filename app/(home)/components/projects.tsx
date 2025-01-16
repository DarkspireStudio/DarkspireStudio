import React from "react";
import Title from "./titles";
import Link from "next/link";
import { projects } from "../data/data";
import Image from 'next/image'


export default function Projects() {
 
    return (
        <div className="py-10 p-5 sm:p-0 ">
            <Title text={"P R O J E T O S"} className="flex flex-col items-center justify-center"/>
            <div className="justify-center">

            </div>


            <div className="grid grid-cols-1 pt-20 py-10 p-5 gap-4">

                {projects.map((project, index)=>{
                    return (
                        <Link href={project.Link} key={index} className="border-2 bg-purple-700 border-violet-700 cursor-pointer hover:shadow-md hover:shadow-purple-700 rounded-xl">
                            <div>
                                <div className="bg-purple-700 p-2 text-center lg:text-left rounded-t-xl">
                                    <h1 className="font-bold text-3xl">{project.title}</h1>
                                </div>

                            <div className="flex flex-col-reverse lg:gap-0 lg:flex-row items-end">

                                <div className="sm:w-1/2 ">
                                    <div className="p-2 text-center lg:text-justify bg-black sm:h-60 border-t-2 border-t-violet-700 lg:border-r-2 lg:border-r-violet-700">
                                        <p className="text-lg text-white hyphens-auto">
                                            {project.resume}
                                        </p>
                                    </div>

                                    <div className="bg-black p-2 border-t-2 border-t-violet-700 lg:border-r-2 lg:border-r-violet-700">
                                        <div  className="flex items-center gap-1 justify-center lg:justify-start">
                                        {project.type.map((Txt, idx) =>{
                                            return (
                                                <p key={idx} className="bg-purple-700 rounded-md text-sm flex items-center gap-2 px-2">{Txt}</p>
                                            )
                                        })}
                                        </div>
                                    </div>

                                    <div className="bg-black p-2 border-t-2  border-t-violet-700 lg:border-r-2 lg:border-r-violet-700 md:rounded-bl-xl rounded-b-xl">
                                        <div className="flex items-center justify-center lg:justify-start gap-4">
                                            {project.tech.map((Icon, idx) =>{
                                                return (
                                                    <Icon key={idx} className="w-10 h-10"/>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="sm:w-1/2 ">
                                    <Image src={project.cover} alt={project.title} height={1080} width={1360} className="lg:rounded-br-xl" />
                                </div>

                            </div>

                            </div>
                        </Link>
                    )

                })}

            </div>

        </div>
    );
}