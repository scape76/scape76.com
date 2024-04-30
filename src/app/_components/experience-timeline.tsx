// credits to https://github.com/Fredkiss3/fredkiss.dev/blob/main/app/%5Blocale%5D/page.tsx

import { Experience } from "@/types";

// utils
import { Badge } from "@/components/ui/badge";
import { cn, formatDate } from "@/lib/utils";

export function ExperienceTimeline({
  experience: xp,
}: {
  experience: Experience;
}) {
  return (
    <>
      <div
        className={cn(
          "relative grid gap-8 pb-8 pl-10",
          "lg:grid-cols-2 lg:gap-10 lg:pl-0"
        )}
      >
        {/* Timeline  */}
        <div
          className={cn(
            "absolute top-0 left-0 flex items-center justify-center",
            "rounded-full border-2 border-dashed border-border p-2",
            "lg:left-1/2"
          )}
        >
          <div className={cn("h-3 w-3 rounded-full")} />
        </div>

        {/* Timeline  */}
        <div
          className={cn(
            "absolute border border-dashed border-border",
            "bottom-0 top-8 left-4",
            "lg:left-[calc(50%+1rem)]"
          )}
        />

        {/* Content */}
        <div className={cn("flex flex-col gap-3", "lg:pl-10")}>
          <h3 className="text-md font-semibold">{xp.title}</h3>
          <ul className="flex flex-wrap gap-2">
            {xp.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </ul>
        </div>

        {/* Date & type  */}
        <div className="lg:order-first">
          <h4 className="text-lg font-semibold">{xp.company}</h4>

          <p className="text-xs text-muted-foreground">
            {formatDate(xp.startDate)} -&nbsp;
            {xp.endDate ? formatDate(xp.endDate) : "today"}
          </p>
        </div>
      </div>
    </>
  );
}
