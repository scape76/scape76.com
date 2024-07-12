import Link from "next/link";
import type { Post } from "@/types";

export function Post({ slug, metadata }: Post) {
  return (
    <Link href={`/blog/${slug}`}>
      <div className="flex flex-col space-y-2">
        <span className="font-semibold text-sm">{metadata.title}</span>
        <span className="text-muted-foreground text-xs">
          {metadata.summary}
        </span>
      </div>
    </Link>
  );
}
