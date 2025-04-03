"use client";
import Spline from "@splinetool/react-spline";
import { InputField } from "./inputField";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import flower from "../public/flower.svg";
import flower2 from "../public/flower-2.svg";
import { Gradient } from "./gradient";
import { TinyWaveFormIcon } from "./TinyWaveFormIcon";
import posterImage from "../public/poster.png";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      <div className="flex items-center text-white justify-center relative max-w-7xl mx-auto">
        {/* Gradient positioned behind everything and centered */}
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

          {/* Marquee Effect */}
          <div className="w-full my-3 text-lg">
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
          <div className="border-t pb-10 border-white" />
        </div>
      </div>

      {/* Flex Layout with Divider */}
      <div className="flex max-w-7xl mx-auto ">
        {/* Left Section: Image and Text (1/3 of the width) */}
        <div className="w-full md:w-1/3 p-6 flex flex-col items-start border-r mt-8 border-slate-200">
          <Link
            href="/"
            className="relative block w-48 overflow-hidden rounded-lg bg-slate-200 shadow-xl sm:w-64 lg:w-auto lg:rounded-2xl"
            aria-label="Homepage"
          >
            <Image
              className="w-40 md:w-48"
              src={posterImage}
              alt="Poster Image"
              sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
              priority
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-black/10 ring-inset sm:rounded-xl lg:rounded-2xl" />
          </Link>
          <div className="mt-10 text-center lg:text-left">
            <p className="text-xl font-bold text-slate-900">
              <Link href="/">Generate your music</Link>
            </p>
            <p className="mt-3 text-lg/8 font-medium text-slate-700">
              Conversations with the most tragically misunderstood people of our
              time. Conversations with the most tragically misunderstood people
              of our time. Conversations with the most tragically misunderstood
              people of our time.
            </p>
          </div>
          <section className="mt-10 lg:mt-12">
            <h2 className="sr-only flex items-center font-mono text-sm font-medium text-slate-900 lg:not-sr-only">
              <TinyWaveFormIcon
                colors={["fill-violet-300", "fill-pink-300"]}
                className="h-2.5 w-2.5"
              />
              <span className="ml-2.5">Generate</span>
            </h2>
            <div className="h-px bg-linear-to-r from-slate-200/0 via-slate-200 to-slate-200/0 lg:hidden" />
          </section>
        </div>

        {/* Right Section: Additional Content (2/3 of the width) */}
        <div className="w-full md:w-2/3 p-6">
          {/* Add your right-side content here */}
        </div>
      </div>
    </div>
  );
}
