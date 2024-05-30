"use client";

import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Introduction() {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
                <Image src="/perfil-circular.png" alt="Profile picture" priority width="400" height="400" className=" md:mx-40"></Image>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo,
                        <TypeAnimation sequence={["puedes programarlo", 1000, "puedes optimizarlo", 1000, "puedes implementarlo", 1000, "puedes desarrollarlo", 1000]} wrapper="span" speed={50} repeat={Infinity} className="block font-bold text-secondary"></TypeAnimation>
                    </h1>
                    {/* <p className="text-center md:text-left"> */}
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Soy Carlos Cancinos, un entusiasta de la programación con una curiosidad insaciable y una mente creativa. Desde que tengo memoria, siempre he estado fascinado por la forma en que la tecnología transforma nuestras vidas y cómo podemos utilizarla para crear cosas que, en el pasado, nunca hubiéramos imaginado!. 
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10 mb-20">
                        <Link href={"/projects"} className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/25">
                            Proyectos
                        </Link>
                        <Link href={"mailto:carloscancinos12@gmail.com"} className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md text-secondary border-secondary text-md w-fit rounded-xl hover:shadow-xl hover:shadow-secondary/25">
                            Contacto
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}