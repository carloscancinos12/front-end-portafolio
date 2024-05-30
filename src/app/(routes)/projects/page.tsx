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
        title: "Sky Kings",
        tools: "Python, Pygame, Piskel",
        role: "Diseñador de personajes y Fullstack Developer",
        description: "Videojugo donde los jugadores se sumergen en un vibrante mundo de pixel art, donde valientes personajes luchan en intensos combates cuerpo a cuerpo. El objetivo es ser el último en pie o alcanzar la última plataforma antes que tus oponentes. Con un backend desarrollado en Python, incluyendo físicas realistas y precisas hitboxes, cada movimiento cuenta. Los personajes, diseñados y animados meticulosamente en pixel art.",
        image: "/sky-kings.png",
    },
    {
        title: "Pagina Web para Hotel",
        tools: "Nest, PostgreSQL, NodeJS, Insonmia",
        role: "Lider de grupo de Backend Developers",
        description: "Este programa hecho con fines academicos es una solución integral para la gestión eficiente de hoteles hecha a la medida, diseñada para facilitar el control de reservaciones, habitaciones, pagos y usuarios. En este proyecto desempeñe el rol de lider de grupo de Backend Developers, encargandome de la creación de la base de datos, la creación de los endpoints y la documentación de la API.",
        image: "/programa-hotel.png",
    },
    {
        title: "Cerradura Inteligente",
        tools: "Python, OpenCV, C++, Arduino, Firebase",
        role: "Fullstack Developer",
        description: "Este proyecto es una innovadora solución de IoT que combina multiples tipos de tecnologias. Esta cerradura inteligente integra tecnología de vanguardia utilizando Arduino para controlar una cerradura solenoide, Python con OpenCV para un preciso reconocimiento facial y Firebase para almacenamiento seguro en la nube. Lideré el desarrollo de este proyecto, asegurando una perfecta integración de hardware y software.",
        image: "/cerradura inteligente.png",
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
                        }} freeMode={true} pagination={{clickable:true,}} modules={[Pagination]} className="h-[600px] md:h-[420px] w-[270px] md:w-[650px]"
                        >{
                            projects.map((project, index) => (
                                <SwiperSlide key={index} className=" items-center"> 
                                    <Image src={project.image} alt={project.title} width={150} height={150} className="mx-auto rounded-2xl"></Image>
                                    <h4 className="text-center font-extrabold">{project.title}</h4>
                                    <h5 className="mt-5 text-center font-semibold text-emerald-600 bg-emerald-100 rounded-full">{project.role}</h5>
                                    <h6 className="text-center font-semibold  text-rose-600 bg-rose-100 rounded-full">{project.tools}</h6>
                                    <p className=" text-justify">{project.description}</p>
                                </SwiperSlide>
                            ))
                        
                        }</Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}