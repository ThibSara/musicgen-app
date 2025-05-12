"use client";
import { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { TinyWaveFormIcon } from "../ui/TinyWaveFormIcon";
import { PlayIcon } from "../ui/playIcon";
import { PauseIcon } from "../ui/pauseIcon";

export function PromptForm() {
  const [description, setDescription] = useState("");
  const [audioUrl, setAudioUrl] = useState<string | null>(null); // State to hold audio URL
  const audioRef = useRef<HTMLAudioElement | null>(null); // Ref to control the audio element

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:5001/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ descriptions: [description] }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        setAudioUrl(url); // Set the audio URL to play it

        console.log("done");
      } else {
        console.error("Response error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  return (
    <div className="text-center lg:text-left w-[330px]">
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
        <Button
          variant="secondary"
          className="mt-4 w-full"
          onClick={handleSubmit}
        >
          Create my track
        </Button>

        {audioUrl && (
          <div className="flex flex-col items-center mt-4">
            <audio ref={audioRef} src={audioUrl} preload="auto"></audio>
            <Button
              variant="secondary"
              className="mt-2 w-full"
              onClick={handlePlayPause}
            >
              {audioRef.current?.paused ? (
                <PlayIcon className="h-5 w-5 fill-current" />
              ) : (
                <PauseIcon className="h-5 w-5 fill-current" />
              )}
              <span className="ml-2">
                {audioRef.current?.paused ? "Play" : "Pause"}
              </span>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
