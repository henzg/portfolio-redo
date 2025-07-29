import { FaBriefcase, FaGamepad, FaCode, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-16 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.05fr_1fr] gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 items-start">
        {/* Left: About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-[var(--color-accent-black)]">
            I&apos;m a <span className="font-semibold">Software Engineer</span> and <span className="font-semibold">Game Developer</span> passionate about creating immersive experiences through low-level programming and real-time graphics.
          </p>
          <p className="text-lg leading-relaxed secondary-text">
            With expertise in <span className="font-semibold">C++</span>, <span className="font-semibold">OpenGL</span>, and <span className="font-semibold">Unreal Engine</span>, I build everything from graphics engines to complete game systems — turning ideas into interactive realities.
          </p>
        </div>

        {/* Divider */}
        <div className="hidden md:block h-full border-l border-[var(--color-card-border)] mx-auto" />

        {/* Right: Mini Resume */}
        <div className="bg-white/80 shadow-lg rounded-2xl p-6 sm:p-8 border border-[var(--color-card-border)] backdrop-blur-sm mt-8 md:mt-0">
          <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-6">Professional Highlights</h3>
          <ul className="space-y-6 text-left text-[var(--color-accent-black)]">
            <li className="flex items-start gap-3">
              <FaBriefcase className="text-[var(--color-accent-coral)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Platform Engineer</p>
                <p className="secondary-text">Managed deployments, built REST integrations, and maintained a risk application.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaGamepad className="text-[var(--color-primary)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Data Engineer</p>
                <p className="secondary-text">Created and maintained ETL processes, and automated reports for stakeholders.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCode className="text-[var(--color-accent-coral)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Graphics Programming</p>
                <p className="secondary-text">Building real-time rendering systems and learning advanced graphics techniques.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaTools className="text-[var(--color-primary)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Favorite Technologies</p>
                <p className="secondary-text">C++, OpenGL, Unreal Engine, Visual Studio, Python,SQL</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
