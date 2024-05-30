
import Avatar from "@/app/components/avatar";
import ContainerPage from "@/app/components/container";
import CountServices from "@/app/components/count-services";
import TimeLine from "@/app/components/time-line";
import TransPage from "@/app/components/trans-page";

export default function AboutMePage(){
    return(
        <>
            <TransPage></TransPage>
            <ContainerPage>
                <Avatar></Avatar>
                <h1 className=" text-2xl leading-tight text-center md:text-left md:text-5xl md:mt-10">Toda mi
                    <span className=" font-bold text-secondary">{" trayectoria profesional"}</span>
                </h1>
                <CountServices></CountServices>
                <TimeLine></TimeLine>
            </ContainerPage>
        </>
    );
}