import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 lg:auto-rows-[18rem] lg:grid-cols-3",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md p-4 transition duration-200 hover:bg-white/10 hover:border-white/20",
        className
      )}>
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div
          className="mt-2 mb-2 font-sans font-bold text-white">
          {title}
        </div>
        <div
          className="font-sans text-xs font-normal text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
