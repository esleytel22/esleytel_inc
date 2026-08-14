import React from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import HomeButton from "../HomeButton/HomeButton";
import { scrollToHash } from "@/lib/scrollToHash";

export function ScrollBasedVelocityDemo({ is_reverse = false }) {
  return (
    <div className="relative w-full flex-col items-center justify-center overflow-hidden ">
      <VelocityScroll
        numRows={1}
        defaultVelocity={2}
        reverse={is_reverse}
        className={""}
      >
        <span className="text-xl text-gray-400 opacity-70">
          {" "}
          Every Detail Matters <span className="text-light-cream">.</span>
        </span>
      </VelocityScroll>
    </div>
  );
}

export default function Section7({content}) {
  const titleParts = content.title.split(/(Next)/i);

  return (
    <section className="bg-white text-black">
      <ScrollBasedVelocityDemo />
      <div className="md:px-section-lg py-25 px-section-sm text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          {titleParts.map((part, i) =>
            part.toLowerCase() === "next" ? (
              <span key={i} className="text-light-cream">
                {part}
              </span>
            ) : (
              part
            )
          )}
        </h2>
        <p className="mb-6 text-gray-600">
          {content.description}
        </p>
<div className="flex justify-center">
<a
  href="#contact"
  onClick={(e) => scrollToHash(e, "#contact")}
  className="bg-black text-white font-medium px-5 py-4 text-sm md:text-base lg:text-lg rounded-xl shadow transition-all duration-300 ease-in-out hover:bg-neutral-800 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 active:scale-95"
>
  {content.first_button}
</a>
</div>

      </div>
      <ScrollBasedVelocityDemo is_reverse={true} />
    </section>
  );
}
