import { FaBriefcase, FaGamepad, FaCode, FaTools } from 'react-icons/fa';

const coreTech = ['C++', '.NET', 'OpenGL', 'TypeScript', 'Docker', 'Python'];
const favTech = ['C++', 'OpenGL', 'Unreal Engine', 'Python', 'SQL', 'Visual Studio'];

export default function About() {
  return (
    <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-12 px-2 sm:px-4 md:px-8">
      <div className="section-fade max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.05fr_1fr] gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 items-start">

        {/* Left: About Text */}
        <div>
          <p className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent-coral)] opacity-75 mb-3">
            01 — About
          </p>
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-[var(--color-accent-black)]">
            I&apos;m a <span className="font-semibold">Software Engineer</span> and <span className="font-semibold">Game Developer</span> passionate about creating immersive experiences through low-level programming and real-time graphics.
          </p>
          <p className="text-lg leading-relaxed secondary-text mb-6">
            With expertise in <span className="font-semibold">C++</span>, <span className="font-semibold">OpenGL</span>, and <span className="font-semibold">Unreal Engine</span>, I build everything from graphics engines to complete game systems — turning ideas into interactive realities.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="text-sm px-3 py-1 rounded-full font-medium border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/8 text-[var(--color-primary)]"
              >
                {tech}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/henzg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] font-semibold text-sm hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
          >
            View GitHub →
          </a>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-full border-l border-[var(--color-card-border)] mx-auto" />

        {/* Right: Mini Resume */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-6 sm:p-8 border border-[var(--color-card-border)] backdrop-blur-sm mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Professional Highlights</h3>
          <ul className="space-y-6 text-left text-[var(--color-accent-black)]">
            <li className="flex items-start gap-3">
              <FaBriefcase className="text-[var(--color-accent-coral)] text-xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Software Engineer — Blended Realities LLC</p>
                <p className="secondary-text">Designed .NET backend infrastructure for a mixed reality platform — Blazor portal, REST APIs, and PostgreSQL containerized with Docker, with CI/CD automation through Azure DevOps.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaGamepad className="text-[var(--color-primary)] text-xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Data Engineer</p>
                <p className="secondary-text">Created and maintained ETL processes, and automated reports for stakeholders.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCode className="text-[var(--color-accent-coral)] text-xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold">Graphics Programming</p>
                <p className="secondary-text">Building real-time rendering systems and learning advanced graphics techniques.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaTools className="text-[var(--color-primary)] text-xl mt-1 shrink-0" />
              <div>
                <p className="font-semibold mb-2">Favorite Technologies</p>
                <div className="flex flex-wrap gap-1.5">
                  {favTech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2.5 py-0.5 rounded-full font-medium border border-[var(--color-card-border)] bg-[var(--color-accent-coral)]/10 text-[var(--color-accent-black)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
