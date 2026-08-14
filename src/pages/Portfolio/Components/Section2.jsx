"use client";
import { useMemo } from "react";
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
    () => shuffle(Array.from({ length: 8 }, () => projects).flat()),
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
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 tracking-tight">
          {content.content.title}
        </h1>
      </div>

     <ThreeDMarqueeDemo projects={content.projects}/>
    </div>
  );
};

export default Section2;
