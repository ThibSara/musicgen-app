import { Container } from "./Container";
import { EpisodePlayButton } from "./EpisodePlayButton";
import { type Episode } from "@/lib/episodes";
import { PlayIcon } from "../ui/playIcon";
import { PauseIcon } from "../ui/pauseIcon";

export function EpisodeEntry({ episode }: { episode: Episode }) {
  let date = new Date(episode.published);

  return (
    <article aria-labelledby={`episode-${episode.id}-title`}>
      <Container>
        <div className=" pb-4 flex flex-col items-start">
          <p className="text-base/7 text-slate-700">{episode.description}</p>
          <div className="mt-4 flex items-center gap-4">
            <EpisodePlayButton
              episode={episode}
              className="flex items-center gap-x-3 text-sm/6 font-bold text-pink-500 hover:text-pink-700 active:text-pink-900"
              playing={
                <>
                  <PauseIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
              paused={
                <>
                  <PlayIcon className="h-2.5 w-2.5 fill-current" />
                  <span aria-hidden="true">Listen</span>
                </>
              }
            />
          </div>
        </div>
      </Container>
    </article>
  );
}
