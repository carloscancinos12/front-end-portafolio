"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TransComponent from "./trans-component";

type sectionNav = {
    name: string;
    href: string;
}

const sections: sectionNav[] = [
    { name: "Inicio", href: "/" },
    { name: "Sobre mi", href: "/about-me" },
    { name: "Proyectos", href: "/projects" },
    { name: "Blog", href: "/blog" },
];

export default function NavBar() {
    const router = usePathname();
    return(
        <TransComponent className={"fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-10"} position={"right"}>
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {sections.map((sectionN) => {
                        const id = crypto.randomUUID();
                        return(
                            <div key={id} className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === sectionN.href && "bg-secondary"}`}>
                                <Link href={sectionN.href}>{sectionN.name}</Link>
                            </div>
                        )
                    })}
                </div>
            </nav>
        </TransComponent>
    );
}