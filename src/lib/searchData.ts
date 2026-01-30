// src/lib/searchData.ts
export type SearchResult = {
  title: string;
  path: string;
  excerpt: string;
};

export const searchablePages: SearchResult[] = [
  {
    title: "About Life Link Academies",
    path: "/about",
    excerpt: "Empowering West African youth through practical, industry-aligned technical education since 2025."
  },
  {
    title: "Programs",
    path: "/programs",
    excerpt: "Digital Skills, Electronic Repairs, and Counting to Calculus (C2C) STEM program."
  },
  {
    title: "Admissions",
    path: "/admissions",
    excerpt: "How to apply, fees, requirements, and start dates for our vocational programs."
  },
  {
    title: "News & Updates",
    path: "/news",
    excerpt: "Latest announcements, student success stories, and program launches."
  },
  {
    title: "Contact Us",
    path: "/contact",
    excerpt: "Get in touch with our team in Ibadan, Oyo State, Nigeria."
  },
  {
    title: "Apply Now",
    path: "/apply",
    excerpt: "Submit your application for Digital Skills, Electronic Repairs, or C2C program."
  }
];