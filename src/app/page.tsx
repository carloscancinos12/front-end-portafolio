import Image from "next/image";
import BgParticules from "./components/bgParticules";

export default function Home() {
  return (
    <main>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <BgParticules></BgParticules>
        <p>Introduccion</p>
      </div>
    </main>
  );
}
