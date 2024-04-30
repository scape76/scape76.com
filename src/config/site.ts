import { Experience, Project } from "@/types";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "scape76",
  position: "software engineer",
  description: "Personal website of scape76",
  url: "https://scape76.com",
  ogImage: "https://scape76.com/opengraph-image.png",
  links: {
    githubProfile: "https://github.com/scape76",
    discord: "https://discord.com/users/scape76",
  },
};

export const projects = [
  {
    name: "sharerecipe",
    href: "https://sharerecipe.scape76.com",
    description: "open source app built using next.js 14",
    badge: "🚧 Under construction",
  },
] satisfies Project[];

export const experience = [
  // {
  //   company: "freelance",
  //   technologies: [],
  //   title: "software engineer",
  //   startDate: "2024-03-01",
  // },
  {
    company: "radency",
    technologies: [
      "react",
      "express",
      "nest.js",
      "next.js",
      "google cloud",
      "aws",
    ],
    title: "fullstack developer",
    startDate: "2023-09-20",
    endDate: "2024-03-01",
  },
  {
    company: "radency",
    technologies: ["react", "nest.js"],
    title: "internship",
    startDate: "2023-08-24",
    endDate: "2023-09-20",
  },
] satisfies Experience[];
