import * as React from "react";
import { type Metadata } from "next";
import { env } from "@/env";

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
// import { Posts } from "@/components/posts";
import { Shell } from "@/components/shell";
import { getBlogPosts } from "@/db/blog";
import Link from "next/link";
import { Post } from "@/components/post";
// import { PostCardSkeleton } from "@/components/skeletons/post-card-skeleton";

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  title: "Blog",
  description: "My blog posts",
};

export default async function BlogPage() {
  const blogs = getBlogPosts();

  return (
    <Shell variant="markdown">
      <PageHeader>
        <PageHeaderHeading size="sm">Personal Blog</PageHeaderHeading>
        <PageHeaderDescription>Just sharing my thoughts.</PageHeaderDescription>
      </PageHeader>
      <section className="flex flex-col space-y-6">
        {blogs.map((post) => (
          <Post {...post} key={post.slug} />
        ))}
      </section>
    </Shell>
  );
}
