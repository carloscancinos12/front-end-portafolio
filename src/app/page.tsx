import Image from "next/image";
import BgParticules from "./components/bgParticules";
import TransPage from "./components/trans-page";
import Introduction from "./components/introduction";

export default function Home() {
  return (
    <main>
      <TransPage></TransPage>
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <BgParticules></BgParticules>
        <Introduction></Introduction>
      </div>
    </main>
  );
}
