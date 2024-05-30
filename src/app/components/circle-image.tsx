"use client";
import Image from "next/image"

export default function CircleImage(){
    return(
        <div className=" bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={"/circles.png"} alt={""} width={200} height={200} className=" w-full h-full"></Image>
        </div>
    )
}