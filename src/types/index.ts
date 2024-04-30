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
