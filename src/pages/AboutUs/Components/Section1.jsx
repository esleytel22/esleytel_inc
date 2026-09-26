import { AuroraText } from "@/components/magicui/aurora-text";
import { Target, Eye, Compass } from "lucide-react";

const pillarIcons = [Target, Eye, Compass];

export default function Section1({ content }) {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-hahmlet font-semibold leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            {content.title[0]}{" "}
            <AuroraText
              colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            >
              {content.title[1]}
            </AuroraText>
          </h2>

          {/* Subtitle/Paragraph */}
          {content.subtitle && (
            <p className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 text-base sm:text-lg md:text-xl max-w-3xl text-neutral-300">
              {content.subtitle}
            </p>
          )}
        </div>

        {/* Mission / Vision / Values */}
        {content.pillars && (
          <div className="mt-16 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3">
            {content.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index % pillarIcons.length];
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center sm:text-left"
                >
                  <Icon className="mx-auto size-6 text-light-cream sm:mx-0" />
                  <h3 className="mt-4 font-hahmlet text-xl font-semibold">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-400">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

