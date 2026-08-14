import React from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";



export function CardHoverEffectDemo({contents, heading}) {
  return (
    <div className="mx-auto max-w-6xl z-1">
      <HoverEffect items={contents} heading={heading} />
    </div>
  );
}


export default function Section3({content}) {

  return (
    <div className="bg-black text-white py-20">
      <div className="px-section-sm md:px-section-lg">
        <CardHoverEffectDemo contents={content.cards} heading={content.heading} />
      </div>
    </div>
  );
}
