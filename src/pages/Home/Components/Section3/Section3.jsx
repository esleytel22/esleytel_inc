import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, CheckCircle2, Code2, FolderKanban, MonitorCog, Sparkles } from "lucide-react";
import { scrollToHash } from "@/lib/scrollToHash";

const ICONS = [Code2, FolderKanban, MonitorCog];

function Detail({ icon: Icon, label, children }) {
  return (
    <div>
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-light-cream">
        <Icon className="h-4 w-4" aria-hidden="true" />
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-300">{children}</p>
    </div>
  );
}

export default function Section3({ content }) {
  const reduceMotion = useReducedMotion();

  const reveal = (delay = 0) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-60px" },
          transition: { duration: 0.6, delay, ease: "easeOut" },
        };

  return (
    <div className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-10">
        <motion.div {...reveal()} className="max-w-3xl">
          <p className="mb-5 flex items-center gap-4 text-sm uppercase tracking-[0.3em] text-light-cream">
            <span className="h-px w-10 bg-light-cream" />
            What we do
          </p>
          <h2 className="font-hahmlet text-3xl leading-tight sm:text-4xl md:text-5xl">
            {content.heading}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-5">
          {content.cards.map((card, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <motion.article
                key={card.title}
                {...reveal(idx * 0.08)}
                className="group relative grid gap-8 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 transition-colors duration-300 hover:border-light-cream/40 md:p-9 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-0"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-hahmlet text-8xl font-semibold leading-none text-white/[0.04]"
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>

                <div className="flex flex-col lg:pr-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e0b352] to-[#86602c] shadow-lg">
                      <Icon className="h-6 w-6 text-black" aria-hidden="true" />
                    </span>
                    {card.category && (
                      <span className="rounded-full border border-light-cream/30 bg-light-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-light-cream">
                        {card.category}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold leading-snug md:text-2xl">{card.title}</h3>
                  {card.intro && (
                    <p className="mt-3 text-base leading-relaxed text-neutral-300">{card.intro}</p>
                  )}

                  <a
                    href="#contact"
                    onClick={(e) => scrollToHash(e, "#contact")}
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-6 text-sm font-semibold text-light-cream transition hover:gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-cream"
                  >
                    Discuss this service
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                {card.capabilities && (
                  <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:px-10 lg:pt-0">
                    <Detail icon={CheckCircle2} label="Core capabilities">
                      {card.capabilities}
                    </Detail>
                  </div>
                )}
                {card.services && (
                  <div className="border-t border-white/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <Detail icon={Sparkles} label="Strategic services">
                      {card.services}
                    </Detail>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
