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
    title: "Personal Portfolio",
    description: "A Next.js frontend app for syncing external APIs into a centralized DB.",
    techStack: ["Next.js", "Vercel"],
    repo: "https://github.com/henzg/portfolio-redo",
    demo: "https://portfolio-redo-psi.vercel.app/",
    image: "/PortfolioPic.PNG"
  },
  {
    title: "Stock Market Dashboard",
    description: "A webapp utilizing technologies so users can create their stock portfolios with live trading data.2 Demo coming soon",
    techStack: ["Next.js", "TypeScript", "Node.js", "Docker", ],
    repo: "https://github.com/henz/StockDashboardv2",
    image: "/StockDashBoard.PNG"
  },
  //   {
  //   title: "Test",
  //   description: "This is a test entry",
  //   techStack: ["Next.js", "TypeScript", "Docker Compose"],
  //   repo: "https://github.com/yourname/portfolio",
  //   image: "/placeholder.png"
  // }    
];