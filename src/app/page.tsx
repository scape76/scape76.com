import { Shell } from "@/components/shell";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { AboutMe } from "./_components/about-me";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/config/projects";
import { LatestPosts } from "./_components/latest-posts";

export default function Home() {
  return (
    <Shell variant={"markdown"}>
      <AboutMe />
      <section>
        <h2
          className={cn(
            "prose prose-zinc text-xl font-semibold dark:prose-invert tracking-tighter"
          )}
        >
          <Link
            href={siteConfig.links.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline transition-colors hover:text-foreground/90"
          >
            Projects
          </Link>
        </h2>
        <ul className="space-y-4 py-4">
          {projects.map((project, i) => (
            <li key={i}>
              <Link className="flex flex-col scape-y-1.5" href={project.href}>
                <div>
                  <span className="font-medium underline underline-offset-4">
                    {project.name}
                    {project.badge && (
                      <Badge className="ml-2">{project.badge}</Badge>
                    )}
                  </span>
                </div>
                <span className="text-muted-foreground">
                  {project.description}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="space-y-4">
        <h2 className="prose prose-zinc text-xl font-semibold dark:prose-invert tracking-tighter">
          My work experience
        </h2>
        <div className="">
          <ul className="mx-auto max-w-[1280px]">
            {experience.map((exp, i) => (
              <ExperienceTimeline key={i} experience={exp} />
            ))}
          </ul>
        </div>
      </section> */}
      <Separator />
      <section className="space-y-4">
        <h2 className="prose prose-zinc text-xl font-semibold dark:prose-invert tracking-tighter">
          <Link
            href="/blog"
            className="no-underline transition-colors hover:text-foreground/90 "
          >
            Blog
            <span className="sr-only">Blog</span>
          </Link>
        </h2>
        <div className="flex flex-col space-y-6">
          <LatestPosts />
        </div>
      </section>
    </Shell>
  );
}
