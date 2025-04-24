"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { TinyWaveFormIcon } from "../ui/TinyWaveFormIcon";

export function PromptForm() {
  const [description, setDescription] = useState("");

  return (
    <div className="text-center  lg:text-left w-[330px]">
      <div className="text-xl font-bold text-slate-900">
        <div className="flex flex-row items-center">
          <TinyWaveFormIcon
            colors={["fill-violet-300", "fill-pink-300"]}
            className="h-3 w-3 mt-1 mr-2"
          />
          <span>Describe the music you imagine</span>
        </div>
      </div>

      <div className="mt-4 w-full">
        <Textarea
          className="resize-none overflow-y-auto h-40 text-base p-4"
          id="sound-description"
          placeholder="e.g. Dreamy lo-fi melody with soft piano and gentle beats."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="secondary" className="mt-4 w-full">
          Create my track
        </Button>
      </div>
    </div>
  );
}
