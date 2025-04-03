import Marquee from "react-fast-marquee";
import Image from "next/image";
import flower from "../public/flower.svg";
import flower2 from "../public/flower-2.svg";
import { Gradient } from "./ui/gradient";

function MarqueeContent() {
  return (
    <div className="my-2">
      <Marquee pauseOnHover speed={10} autoFill>
        <div className="flex items-center">
          <span> EVERYTHING FOR YOU </span>
          <Image
            src={flower}
            alt="flower"
            className="h-8 w-8 text-yellow-500 mx-4 "
            width={32}
            height={32}
          />
        </div>

        <div className="flex items-center">
          <span> EVERYTHING FOR MUSICIAN </span>
          <Image
            src={flower2}
            alt="dots"
            className="h-8 w-8 text-yellow-500 mx-4"
            width={30}
            height={32}
          />
        </div>
      </Marquee>
    </div>
  );
}

export default function HeroSection() {
  return (
    <div>
      <div className="flex items-center text-white justify-center relative max-w-7xl mx-auto">
        <Gradient className="absolute max-w-7xl mx-auto inset-0 z-0 rounded-4xl ring-1 ring-black/5 ring-inset mt-8" />

        <div className="mt-12 max-w-7xl relative z-10">
          <div className="p-6 md:p-12">
            <span
              className="text-4xl md:text-8xl font-bold flex items-center text-white"
              style={{ fontFamily: "var(--font-righteous), sans-serif" }}
            >
              From Words to Waves.
            </span>
          </div>
          <div className="border-t border-white" />
          <MarqueeContent />
          <div className="border-t pb-10 border-white" />
        </div>
      </div>
    </div>
  );
}
