"use client";
import Spline from "@splinetool/react-spline";
import { InputField } from "./inputField";
import {
  StarIcon,
  FaceSmileIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/solid";
import Marquee from "react-fast-marquee";
import medal from "../public/medal.svg";
import Image from "next/image";
import flower from "../public/flower.svg";
import dots from "../public/dots.svg";
import flower2 from "../public/flower-2.svg";

export default function HeroSection() {
  return (
    <div className=" flex items-center text-white justify-center">
      <div className="border border-white mt-8 max-w-6xl">
        <div className="p-6 md:p-12">
          <span
            className="text-4xl md:text-8xl font-bold flex items-center"
            style={{ fontFamily: "var(--font-righteous), sans-serif" }}
          >
            From Words to Waves.
          </span>
        </div>
        <div className="border-t border-white" />

        {/* Marquee Effect */}
        <div className=" w-full mt-4 text-lg">
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

        <div className="border-t mt-4 border-white" />

        <div className="flex flex-col md:flex-row h-screen">
          <div className="w-full md:w-1/2 flex">
            {" "}
            <InputField />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <Spline
              scene="https://prod.spline.design/s3Ttdsg2nGekwQhN/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
