import { getAllEpisodes } from "@/lib/episodes";
import { EpisodeEntry } from "./PromptSectionComponents/EpisodeEntry";
import { PromptForm } from "./PromptSectionComponents/PromptForm";

export default async function PromptSection() {
  const episodes = await getAllEpisodes();

  return (
    <div className="flex max-w-6xl mx-auto mt-8">
      {/* Left */}
      <div className="w-full md:w-1/3 p-6 flex flex-col items-start border-r border-slate-200 ">
        <PromptForm />
      </div>

      {/* Right */}
      <div className="w-full md:w-2/3 p-6 overflow-y-auto max-h-[calc(100vh-4rem)]">
        <main>
          <div>
            {episodes.map((episode) => (
              <div key={episode.id}>
                <EpisodeEntry episode={episode} />
                <div className="relative divide-y divide-slate-100 pb-4 lg:border-t lg:border-slate-100" />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
