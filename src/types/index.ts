export type Project = {
  name: string;
  description?: string;
  href: string;
  badge?: string;
};

export type Experience = {
  title: string;
  jobType?: string;
  technologies: string[];
  company: string;
  startDate: string;
  endDate?: string;
};

export type PostMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

export type Post = {
  metadata: PostMetadata;
  slug: string;
  tweetIds: any;
  content: string;
};
