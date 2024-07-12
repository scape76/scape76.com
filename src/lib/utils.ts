import { env } from "@/env";
import { Post } from "@/types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatDate(
  dateStr: string | Date,
  locale: string = "en"
): string {
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(new Date(dateStr));
}

export function getBlogJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.metadata.title,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    description: post.metadata.summary,
    image: post.metadata.image
      ? `https://scape76.com${post.metadata.image}`
      : `https://scape76.com/og?title=${post.metadata.title}`,
    url: `https://scape76.com/blog/${post.slug}`,
    author: {
      "@type": "Person",
      name: "Danya Olekh",
    },
  };
}
