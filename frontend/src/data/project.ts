export type Project = {
    title: string;
    description: string;
    techStack: string[];
    repo?: string;
    demo?: string;
    image?: string;
};

export const projects: Project[] = [
  {
    title: "API Integration Hub",
    description: "A Node.js + PostgreSQL backend app for syncing external APIs into a centralized DB.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Docker"],
    repo: "https://github.com/yourname/api-integration-hub",
    demo: "https://api.yourdomain.com",
    image: "/placeholder.png"
  },
  {
    title: "Portfolio Website",
    description: "This portfolio site built with Next.js, Express, and Docker.",
    techStack: ["Next.js", "TypeScript", "Docker Compose"],
    repo: "https://github.com/yourname/portfolio",
    image: "/placeholder.png"
  },
  {
    title: "Test",
    description: "This is a test entry",
    techStack: ["Next.js", "TypeScript", "Docker Compose"],
    repo: "https://github.com/yourname/portfolio",
    image: "/placeholder.png"
  },
    {
    title: "Test",
    description: "This is a test entry",
    techStack: ["Next.js", "TypeScript", "Docker Compose"],
    repo: "https://github.com/yourname/portfolio",
    image: "/placeholder.png"
  }    
];