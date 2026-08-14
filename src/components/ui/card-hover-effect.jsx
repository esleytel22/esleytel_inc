import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  FolderKanban,
  MonitorCog,
  Sparkles,
} from "lucide-react";

const ICONS = [Code2, FolderKanban, MonitorCog];
const CATEGORIES = ["Development", "Documents", "Support"];

export const HoverEffect = ({
  items,
  heading,
  className
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const goToDetail = (direction) => {
    setOpenIndex((current) => {
      if (current === null) {
        return direction === 1 ? 0 : items.length - 1;
      }
      return (current + direction + items.length) % items.length;
    });
  };

  return (
    <div className={cn("mx-auto w-full max-w-6xl", className)}>
      <div className="flex items-end justify-between gap-6">
        {heading && (
          <h1 className="max-w-2xl font-hahmlet text-2xl leading-snug sm:text-3xl md:text-4xl">
            {heading}
          </h1>
        )}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => goToDetail(-1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-light-cream/50 hover:text-light-cream"
            aria-label="View previous service's details"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => goToDetail(1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-light-cream/50 hover:text-light-cream"
            aria-label="View next service's details"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {items.map((item, idx) => {
          const Icon = ICONS[idx % ICONS.length];
          const category = CATEGORIES[idx % CATEGORIES.length];
          const isOpen = openIndex === idx;
          const hasDetails = Boolean(item.capabilities || item.services);

          return (
            <div
              key={idx}
              onClick={() => hasDetails && setOpenIndex(isOpen ? null : idx)}
              onKeyDown={(e) => {
                if (hasDetails && (e.key === "Enter" || e.key === " ")) {
                  e.preventDefault();
                  setOpenIndex(isOpen ? null : idx);
                }
              }}
              role={hasDetails ? "button" : undefined}
              tabIndex={hasDetails ? 0 : undefined}
              aria-expanded={hasDetails ? isOpen : undefined}
              className={cn(
                "group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-7 backdrop-blur-md transition-all duration-300 hover:border-light-cream/40 hover:shadow-[0_0_30px_-10px_rgba(193,139,52,0.4)]",
                hasDetails && "cursor-pointer"
              )}
            >
              {/* Header: icon + category */}
              <div className="flex items-center gap-3">
                <motion.div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#e0b352] to-[#86602c] shadow-lg"
                  animate={{ rotate: [-3, 3, -3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Icon className="h-6 w-6 text-black" />
                </motion.div>
                <span className="rounded-full border border-light-cream/30 bg-light-cream/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-light-cream">
                  {category}
                </span>
              </div>

              <h4 className="mt-5 text-xl font-bold leading-snug text-white">
                {item.title}
              </h4>

              {item.intro && (
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                  {item.intro}
                </p>
              )}

              {hasDetails && (
                <span className="mt-4 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-light-cream/80 transition-colors group-hover:text-light-cream">
                  {isOpen ? "Hide details" : "View details"}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />
                </span>
              )}

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3">
                      {item.capabilities && (
                        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-light-cream">
                            <CheckCircle2 className="h-3.5 w-3.5" />
                            Core Capabilities
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                            {item.capabilities}
                          </p>
                        </div>
                      )}
                      {item.services && (
                        <div className="rounded-xl border border-white/10 bg-black/30 p-4">
                          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-light-cream">
                            <Sparkles className="h-3.5 w-3.5" />
                            Strategic Services
                          </span>
                          <p className="mt-2 text-sm leading-relaxed text-neutral-300">
                            {item.services}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Position indicator, pinned to the bottom */}
              <div className="mt-auto flex items-center gap-1.5 pt-6">
                {items.map((_, dotIdx) => (
                  <span
                    key={dotIdx}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      dotIdx === idx ? "w-6 bg-light-cream" : "w-1.5 bg-white/20"
                    )}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
