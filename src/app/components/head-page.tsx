import Link from "next/link";
import TransComponent from "./trans-component";
import { Github } from "lucide-react";

interface SocialNetwork {
    logo: JSX.Element;
    src: string;
}

export const socialNetworks: SocialNetwork[] = [
    {
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/carloscancinos12",
    },
];

export default function HeadPage() {
    return (
        <TransComponent position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 md:px-10">
            <header>
                <div className="container justify-between max-w-6xl mx-auto md:flex">
                    <Link href={"/"}>
                        <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                            Carlos   
                            <span className="text-secondary">
                                {' Cancinos'}
                            </span>
                        </h1>
                    </Link>
                    <div className="flex items-center justify-center gap-7">
                        {socialNetworks.map((socialNetwork) => {
                            const id = crypto.randomUUID();
                            return (
                                <Link key={id} href={socialNetwork.src} target="_blank" className="transition-all duration-300 hover:text-secondary">
                                    {socialNetwork.logo}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </header>
        </TransComponent>
    )
}