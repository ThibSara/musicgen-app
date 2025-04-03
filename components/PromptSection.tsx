import { TinyWaveFormIcon } from "./ui/TinyWaveFormIcon";
import Image from "next/image";
import flower2 from "../public/flower-2.svg";

export default function PromptSection() {
  return (
    <div className="flex max-w-7xl mx-auto ">
      {/* Left Section */}
      <div className="w-full md:w-1/3 p-6 flex flex-col items-start border-r mt-8 border-slate-200">
        <div className="mt-10 text-center lg:text-left">
          <div className="text-xl font-bold text-slate-900">
            <div className="flex flex-row items-center">
              <Image
                className="w-6 md:w-8 mr-2"
                src={flower2}
                alt="Poster Image"
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
                priority
              />
              <span>Generate your music</span>
            </div>
          </div>
          <p className="mt-3 text-lg/8 font-medium text-slate-700">
            Conversations with the most tragically misunderstood people of our
            time. Conversations with the most tragically misunderstood people of
            our time. Conversations with the most tragically misunderstood
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
  );
}
