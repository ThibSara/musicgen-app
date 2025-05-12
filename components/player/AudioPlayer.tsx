"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useAudioPlayer } from "@/components/AudioProvider";
import { ForwardButton } from "@/components/player/ForwardButton";
import { MuteButton } from "@/components/player/MuteButton";
import { PlaybackRateButton } from "@/components/player/PlaybackRateButton";
import { PlayButton } from "@/components/player/PlayButton";
import { RewindButton } from "@/components/player/RewindButton";
import { Slider } from "@/components/player/Slider";

function parseTime(seconds: number) {
  let hours = Math.floor(seconds / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  seconds = seconds % 60;
  return [hours, minutes, seconds];
}

function formatHumanTime(seconds: number) {
  let [h, m, s] = parseTime(seconds);
  return `${h} hour${h === 1 ? "" : "s"}, ${m} minute${
    m === 1 ? "" : "s"
  }, ${s} second${s === 1 ? "" : "s"}`;
}

export function AudioPlayer() {
  let player = useAudioPlayer();
  let wasPlayingRef = useRef(false);

  let [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    setCurrentTime(player.currentTime);
  }, [player.currentTime]);

  if (!player.episode) {
    console.log("AudioPlayer: No episode loaded, hiding UI.");
    return null;
  }

  return (
    <div className="flex items-center gap-6 px-4 py-4 ring-1 shadow-sm shadow-slate-200/80 ring-slate-900/5 backdrop-blur-xs md:px-6">
      {/* Play button for larger screens */}
      <div className="hidden md:block">
        <PlayButton player={player} />
      </div>

      {/* Episode Info & Controls */}
      <div className="mb-[env(safe-area-inset-bottom)] flex flex-1 flex-col gap-3 overflow-hidden p-1">
        <Link
          href={`/${player.episode.id}`} // 🛠 Fixed null issue with optional chaining
          className="truncate text-center text-sm/6 font-bold md:text-left"
          title={player.episode.title}
        >
          {player.episode.title}
        </Link>

        <div className="flex justify-between gap-6">
          {/* Mute Button (Only on mobile) */}
          <div className="flex items-center md:hidden">
            <MuteButton player={player} />
          </div>

          {/* Rewind, Play/Pause, Forward Buttons */}
          <div className="flex flex-none items-center gap-4">
            <RewindButton player={player} />
            <div className="md:hidden">
              <PlayButton player={player} />
            </div>
            <ForwardButton player={player} />
          </div>

          {/* Progress Slider */}
          <Slider
            label="Current time"
            maxValue={player.duration}
            step={1}
            value={[currentTime ?? player.currentTime]}
            onChange={([value]) => setCurrentTime(value)}
            onChangeEnd={([value]) => {
              player.seek(value);
              if (wasPlayingRef.current) {
                player.play();
              }
            }}
            numberFormatter={{ format: formatHumanTime } as Intl.NumberFormat}
            onChangeStart={() => {
              wasPlayingRef.current = player.playing;
              player.pause();
            }}
          />

          {/* Additional controls */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <PlaybackRateButton player={player} />
            </div>
            <div className="hidden items-center md:flex">
              <MuteButton player={player} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
