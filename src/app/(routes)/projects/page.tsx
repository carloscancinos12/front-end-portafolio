"use client";
import CircleImage from "@/app/components/circle-image";
import TransPage from "@/app/components/trans-page";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

interface Project {
    title: string;
    tools: string;
    role: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        title: "Proyecto 1",
        tools: "React, TailwindCSS, Firebase",
        role: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.",
        image: "/imagen_prueba_blogs.jpg",
    },
    {
        title: "Proyecto 1",
        tools: "React, TailwindCSS, Firebase",
        role: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.",
        image: "/imagen_prueba_blogs.jpg",
    },
    {
        title: "Proyecto 1",
        tools: "React, TailwindCSS, Firebase",
        role: "Frontend Developer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, libero ac aliquam.",
        image: "/imagen_prueba_blogs.jpg",
    },
]

export default function ProjectsPage(){
    return(
        <>
            <TransPage></TransPage>
            <div className="flex flex-col justify-center h-lvh">
                <CircleImage></CircleImage>
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Algunos proyectos <span className="block font-bold text-secondary"> en los que he participado</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper breakpoints={{
                            320:{
                                slidesPerView:1,
                                spaceBetween:15,
                            },
                        }} freeMode={true} pagination={{clickable:true,}} modules={[Pagination]} className="h-[380px] md:h-[360px] w-[270px] md:w-[600px]"
                        >{
                            projects.map((project, index) => (
                                <SwiperSlide key={index}> 
                                    <Image src={project.image} alt={project.title} width={150} height={150} className="mx-auto rounded-2xl"></Image>
                                    <h4 className="text-center">{project.title}</h4>
                                    <p className=" mt-5 text-center">{project.description}</p>
                                </SwiperSlide>
                            ))
                        
                        }</Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}