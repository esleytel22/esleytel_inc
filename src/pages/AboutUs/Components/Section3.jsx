import React from 'react';

import { BentoGridThirdDemo } from './BentoGridDemo';
import { AuroraText } from "@/components/magicui/aurora-text";

const Section3 = ({content}) => {
  return (
    <div className="bg-black text-white font-sans h-full  py-20 px-10">
      <div className="max-w-6xl mx-auto py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-mona-sans tracking-tight">
          <AuroraText
            colors={["#fff3c4", "#c18b13", "#86602c", "#ffe29a", "#e0b352"]}
            className="inline"
          >
            {content.title}
          </AuroraText>
        </h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 text-center font-mona-sans">
        <p className="text-2xl md:text-3xl font-semibold whitespace-pre-line leading-snug">
          {content.tagline}
        </p>
      </div>
      <BentoGridThirdDemo/>
    </div>
  );
};

export default Section3;