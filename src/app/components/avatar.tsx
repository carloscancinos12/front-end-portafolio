"use client";
import TransComponent from "./trans-component";
import Image from "next/image";

export default function Avatar(){
    return(
        <TransComponent position={"bottom"} className=" bottom-0 right-0 hidden md:inline-block md:absolute">
            <Image src={"/avatar-1.png"} alt={"Foto de perfil"} width={350} height={350} className=" w-full h-full"></Image>
        </TransComponent>
    )
}