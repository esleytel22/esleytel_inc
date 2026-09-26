"use client";
import { useMemo } from "react";
import { MousePointerClick } from "lucide-react";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function ThreeDMarqueeDemo({projects}) {
  // Repeat the curated project list so the 3D grid reads as full,
  // since we only ever show real, clickable projects here, then shuffle
  // so the same order doesn't repeat in every column (memoized so it
  // doesn't reshuffle on every re-render).
  const repeated = useMemo(
    () => shuffle(Array.from({ length: 14 }, () => projects).flat()),
    [projects]
  );

  return (
    <div
      className="mx-auto my-10  bg-white p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee projects={repeated} />
    </div>
  );
}

const Section2 = ({content}) => {
  return (
    <div className="bg-white text-black font-sans">
      <div className="max-w-2xl mx-auto py-20 px-4 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-400 mb-5">
          Our Work
        </p>
        <h1 className="font-hahmlet text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.15] tracking-tight text-neutral-900 mb-5">
          {content.content.title}
        </h1>
        <p className="flex items-center justify-center gap-2 text-sm text-neutral-500">
          <MousePointerClick className="size-4" />
          {content.content.hint}
        </p>
      </div>

     <ThreeDMarqueeDemo projects={content.projects}/>
    </div>
  );
};

export default Section2;
