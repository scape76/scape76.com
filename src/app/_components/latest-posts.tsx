import * as React from "react";
import { getBlogPosts } from "@/db/blog";
import Link from "next/link";
import { Post } from "@/components/post";

export function LatestPosts() {
  const blogs = getBlogPosts();

  return (
    <React.Fragment>
      {blogs.slice(0, 5).map((post) => (
        <Post {...post} key={post.slug} />
      ))}
    </React.Fragment>
  );
}
