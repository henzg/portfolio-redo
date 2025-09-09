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
    description: "A modern Next.js portfolio showcasing my software engineering and game development projects.",
    techStack: ["Next.js", "TypeScript", "React"],
    repo: "https://github.com/henzg/portfolio-redo",
    demo: "https://portfolio-redo-psi.vercel.app/",
    image: "/PortfolioPic.PNG"
  },
  {
    title: "Stock Market Dashboard",
    description: "A web application for creating stock portfolios with live trading data and real-time updates.",
    techStack: ["Next.js", "TypeScript", "Node.js", "Docker"],
    repo: "https://github.com/henz/StockDashboardv2",
    demo: "Coming soon",
    image: "/StockDashBoard.PNG"
  },
  {
   title: "OpenGL Graphics Engine",
   description: "Creating a graphics engine for 2d and 3d applications",
   techStack: ["C++", "OpenGL", "GLFW", "GLM"],
   repo: "https://github.com/henzg/OpenGLRenderer",
   image: "/openglproject03.png" 
  },
  {
   title: "PONG Game",
   description: "A complete recreation of the classic PONG game built from scratch using SFML for graphics and input handling.",
   techStack: ["C++", "SFML", "Game Development"],
   repo: "https://github.com/henzg/Pong",
   image: "/pong01.png" 
  },
  {
   title: "RTS Game in Unreal Engine",
   description: "Developing a real-time strategy game prototype with custom camera systems and game mechanics in UE5.",
   techStack: ["C++", "Unreal Engine 5", "Blueprints", "Game Design"],
   repo: "https://github.com/henzg/ue5_rtscamera/tree/main",
   image: "/rtspic1.png"
  },
  {
    title: "Raytracing in a Weekend",
    description: "Learning how raytracing works at a high-ish level with RT in a weekend book!",
    techStack: ["C++", "NVIM", "G++", "Linux"],
    repo: "https://github.com/henzg/Raytracing-in-a-Weekend",
    image: "/rtrendercomplete.png"
  },
];
