"use client";
import { use } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination } from "swiper/modules";

interface habilitie {
    title: string;
    image: string;
}

const habilities: habilitie[] = [
    {
        title: "python",
        image: "/hab-python-ico.png",
    },
    {
        title: "java",
        image: "/hab-java-ico.png",
    },
    {
        title: "c++",
        image: "/hab-c++-ico.png",
    },
    {
        title: "TypeScript",
        image: "/hab-types-ico.png",
    },
    {
        title: "postgresql",
        image: "/hab-postgres-ico.png",
    },
    {
        title: "mysql",
        image: "/hab-mysql-ico.png",
    },
    {
        title: "mariadb",
        image: "/hab-mariadb-ico.png",
    },
    {
        title: "javascript",
        image: "/hab-js-ico.png",
    },
    {
        title: "arduino",
        image: "/hab-arduino-ico.png",
    },
];

export default function CountServices(){
    return(
        // <div className="grid justify-between max-w-3xl grid-cols-2 gap-3 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6">
        //     {habilities.map((service) => {
        //         const id = crypto.randomUUID();
        //         return(
        //             <div key={id} className={`${service.lineRight && 'ltr'}`}>
        //                 <div className={`${service.lineRight && 'px-4 border-2 border-transparent md:border-e-gray-100'} ${service.lineRightMobile && ' border-e-gray-100'}`}>
        //                     <p className="flex mb-2 text-2xl font-extrabold md:text-4xl text-secondary">+ <CountUp end={service.counter} start={0} duration={5}></CountUp></p>
        //                     <p className=" text-xs  uppercase max-w-[100px]">{service.title}</p>
        //                 </div>
        //             </div>
        //         )
        //     })}
        // </div>
        <div className="flex flex-col justify-center pt-10">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">
                    Mis principales <span className="block font-bold text-secondary">habilidades tecnicas</span>
                </h1>
                <div className="flex items-center justify-center">
                    <div>
                        <Swiper breakpoints={{
                            320:{
                                slidesPerView:3,
                                spaceBetween:1,
                            },
                            768:{
                                slidesPerView:6,
                                spaceBetween:1,
                            },
                            1024:{
                                slidesPerView:6,
                                spaceBetween:1,
                            },
                            
                        }} freeMode={true} pagination={{clickable:true,}} modules={[Pagination]} className="h-[150px] md:h-[130px] w-[400px] md:w-[900px]"
                        >{
                            habilities.map((data, index) => (
                                <SwiperSlide key={index}> 
                                    <Image src={data.image} alt={data.title} width={60} height={60} className="mx-auto rounded-2xl"></Image>
                                    <h4 className="sm:absolute left-0 translate-x-8 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">{data.title}</h4>
                                    {/* <p className=" mt-5 text-center">{project.description}</p> */}
                                </SwiperSlide>
                            ))
                        
                        }</Swiper>
                    </div>
                </div>
            </div>
    );
}