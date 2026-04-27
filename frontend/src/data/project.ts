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
   title: "OpenGL Graphics Engine",
   description: "Creating a graphics engine for 2d and 3d applications",
   techStack: ["C++", "OpenGL", "GLFW", "GLM"],
   repo: "https://github.com/henzg/OpenGLRenderer",
   image: "/shaderart.png" 
  },
  {
   title: "Nova Renderer V2",
   description: "A redesigned OpenGL rendering engine with a modular architecture, ImGui debug UI for real-time parameter editing, and improved shader and scene management.",
   techStack: ["C++", "OpenGL", "GLFW", "GLM", "ImGui", "CMake"],
   repo: "https://github.com/henzg/Renderer-V2",
   image: "/RendererV2.png"
  },
  {
   title: "DwarfEngine",
   description: "A lightweight C++ CLI engine playground where I build and test subsystems that will eventually feed into Nova.",
   techStack: ["C++", "CLI", "CMake", "Engine Architecture"],
   repo: "https://github.com/henzg/DwarfEngine",
   image: "/DwarfEnginePlaceholder.svg"
  },
  {
   title: "PONG Game",
   description: "A complete recreation of the classic PONG game built from scratch using SFML for graphics and input handling.",
   techStack: ["C++", "SFML", "Game Development"],
   repo: "https://github.com/henzg/Pong",
   image: "/pong01.png" 
  },
  {
    title: "Raytracing in a Weekend",
    description: "Learning how raytracing works at a high-ish level with RT in a weekend book!",
    techStack: ["C++", "NVIM", "G++", "Linux"],
    repo: "https://github.com/henzg/Raytracing-in-a-Weekend",
    image: "/rtrendercomplete.png"
  },
];
