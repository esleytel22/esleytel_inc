import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  AlignRight as IconBoxAlignRightFilled,
  ClipboardCopy as IconClipboardCopy,
  FileX as IconFileBroken,
  Signature as IconSignature,
  Columns as IconTableColumn,
  Smartphone as IconSmartphone,
} from "lucide-react";

import { motion } from "framer-motion";

const shiftingGradient = {
  backgroundImage:
    "linear-gradient(90deg, #ec4899, #a855f7, #6366f1, #a855f7, #ec4899)",
  backgroundSize: "300% auto",
};

export function BentoGridThirdDemo() {
  return (
    <BentoGrid className=" mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={cn("[&>p:text-lg]", item.className)}
          icon={item.icon} />
      ))}
    </BentoGrid>
  );
}

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/20 backdrop-blur-sm p-2  items-center space-x-2 bg-white/10">
        <div
          className="h-6 w-6 rounded-full shrink-0 animate-gradient-shift"
          style={shiftingGradient} />
        <div
          className="w-full h-5 rounded-full animate-gradient-shift"
          style={shiftingGradient} />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/20 backdrop-blur-sm p-2 items-center space-x-2 w-3/4 ml-auto bg-white/10">
        <div
          className="w-full h-5 rounded-full animate-gradient-shift"
          style={shiftingGradient} />
        <div
          className="h-6 w-6 rounded-full shrink-0 animate-gradient-shift"
          style={shiftingGradient} />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row rounded-full border border-white/20 backdrop-blur-sm p-2 items-center space-x-2 bg-white/10 ">
        <div
          className="h-6 w-6 rounded-full shrink-0 animate-gradient-shift"
          style={shiftingGradient} />
        <div
          className="w-full h-5 rounded-full animate-gradient-shift"
          style={shiftingGradient} />
      </motion.div>
    </motion.div>
  );
};

const SkeletonFour = () => {
  const opinions = [
    {
      text: "Just code in Vanilla Javascript",
      tag: "Delusional",
      tagClass: "bg-red-500/20 text-red-50 border-red-200/40",
    },
    {
      text: "Tailwind CSS is cool, you know",
      tag: "Sensible",
      tagClass: "bg-green-500/20 text-green-50 border-green-200/40",
    },
    {
      text: "I love angular, RSC, and Redux.",
      tag: "Helpless",
      tagClass: "bg-orange-500/20 text-orange-50 border-orange-200/40",
    },
  ];

  const container = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.6,
        repeat: Infinity,
        repeatDelay: 1.5,
      },
    },
  };

  const row = {
    initial: { x: 0 },
    animate: {
      x: [0, 8, 0],
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl p-5 flex-col justify-center gap-3 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
      {opinions.map((opinion) => (
        <motion.div
          key={opinion.tag}
          variants={row}
          whileHover={{ scale: 1.03 }}
          className="flex items-center justify-between gap-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-3">
          <span className="sm:text-sm text-xs font-semibold text-white">
            {opinion.text}
          </span>
          <span
            className={cn(
              "text-[10px] font-semibold px-2 py-0.5 rounded-full border whitespace-nowrap",
              opinion.tagClass
            )}>
            {opinion.tag}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
};

const SkeletonSix = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-2xl items-center justify-center overflow-hidden bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
    <motion.div
      className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-white/10 blur-xl"
      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-white/10 blur-xl"
      animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.9, 0.5] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="relative flex items-center justify-center h-20 w-12 rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur-sm shadow-lg"
      animate={{ y: [0, -10, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <IconSmartphone className="h-6 w-6 text-white" />
    </motion.div>
  </div>
);


const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: "100%",
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ["0%", "100%"],
      transition: {
        duration: 2,
      },
    },
  };
  const arr = new Array(6).fill(0);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex flex-1 w-full h-full min-h-[6rem] bg-dot-white/[0.2] flex-col space-y-2">
      {arr.map((_, i) => (
        <motion.div
          key={"skelenton-two" + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + "%",
            ...shiftingGradient,
          }}
          className="flex flex-row rounded-full border border-black dark:border-white/[0.2] items-center space-x-2 w-full h-4 animate-gradient-shift" />
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  const variants = {
    initial: {
      backgroundPosition: "0% 50%",
    },
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] rounded-lg bg-dot-black/[0.2] flex-col space-y-2"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}>
      <motion.div className="h-full w-full rounded-lg"></motion.div>
    </motion.div>
  );
};

const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-2xl p-4 flex-col justify-center space-y-2 bg-gradient-to-br from-pink-600 via-fuchsia-600 to-indigo-600">
      <motion.div
        variants={variants}
        className="flex flex-row rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm p-2  items-start space-x-2">
        <div
          className="h-6 w-6 rounded-full shrink-0 animate-gradient-shift"
          style={shiftingGradient} />
        <p className="text-xs text-white/90">
          There are a lot of cool framerworks out there like React, Angular,
          Vue, Svelte that can make your life ....
        </p>
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="flex flex-row rounded-full border border-white/20 bg-white/10 backdrop-blur-sm p-2 items-center justify-end space-x-2 w-3/4 ml-auto">
        <p className="text-xs text-white/90">Use PHP.</p>
        <div
          className="h-6 w-6 rounded-full shrink-0 animate-gradient-shift"
          style={shiftingGradient} />
      </motion.div>
    </motion.div>
  );
};




const items = [
  {
    title: "Conversational Interfaces",
    description: (
      <span className="text-sm">
        Human-like UI patterns that feel natural, intuitive, and branded — just like chatting with Esleytel LLC.
      </span>
    ),
    header: <SkeletonOne />,
    className: "md:col-span-1",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Dynamic Data Systems",
    description: (
      <span className="text-sm">
        We engineer adaptive data flows and reactive UIs that respond to user interaction in real time.
      </span>
    ),
    header: <SkeletonTwo />,
    className: "md:col-span-1",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Creative Visual Identity",
    description: (
      <span className="text-sm">
        Our designs are more than static screens — they're living brand experiences with color, rhythm, and motion.
      </span>
    ),
    header: <SkeletonThree />,
    className: "md:col-span-1",
    icon: <IconSignature className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Full-Stack Engineering",
    description: (
      <span className="text-sm">
        From backend APIs to frontend animations — we craft performant, scalable platforms from top to bottom.
      </span>
    ),
    header: <SkeletonFour />,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Real-Time Product Experiences",
    description: (
      <span className="text-sm">
        We build interactive interfaces that respond, adapt, and engage — fast, fluid, and always in sync.
      </span>
    ),
    header: <SkeletonFive />,
    className: "md:col-span-1",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-300" />,
  },
  {
    title: "Mobile-First Experiences",
    description: (
      <span className="text-sm">
        Native-feel apps and responsive interfaces that work beautifully on every screen, from phone to desktop.
      </span>
    ),
    header: <SkeletonSix />,
    className: "md:col-span-1",
    icon: <IconSmartphone className="h-4 w-4 text-neutral-300" />,
  },
];
