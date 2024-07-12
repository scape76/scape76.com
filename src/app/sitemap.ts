import { type MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/utils";
import { getBlogPosts } from "@/db/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `https://scape76.com/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/blog"].map((route) => ({
    url: absoluteUrl(route),
    lastModified: new Date().toISOString(),
  }));

  return [...routes, ...blogs];
}
