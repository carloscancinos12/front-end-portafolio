import TransComponent from "./trans-component";
import Image from "next/image";

export default function AvatarBlog(){
    return(
        <TransComponent position={"right"} className=" bottom-0 left-0 hidden md:inline-block md:absolute">
            <Image src={"/pngwing.com.png"} alt={""} width={300} height={300} className=" w-[320px] h-full"></Image>
        </TransComponent>
    )
}