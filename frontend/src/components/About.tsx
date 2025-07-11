import { FaBriefcase, FaDatabase, FaCode, FaTools } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-16 px-2 sm:px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_0.05fr_1fr] gap-x-8 gap-y-10 md:gap-x-16 md:gap-y-12 items-start">
        {/* Left: About Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[var(--color-primary)]">About Me</h2>
          <p className="text-lg leading-relaxed mb-4 text-[var(--color-accent-black)]">
            I'm a <span className="font-semibold">Backend Developer</span> and <span className="font-semibold">Platform Engineer</span> who thrives on building efficient, scalable APIs and deploying applications through modern DevOps practices.
          </p>
          <p className="text-lg leading-relaxed secondary-text">
            With hands-on experience in <span className="font-semibold">Docker</span>, <span className="font-semibold">CI/CD pipelines</span>, and cloud infrastructure, I create systems that power products from the ground up — and keep them running smoothly.
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
                <p className="font-semibold">Platform Engineer — 53rd Bank</p>
                <p className="secondary-text">Managed deployments, built REST integrations, and maintained CI/CD systems.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaDatabase className="text-[var(--color-primary)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Data Engineer — FIS</p>
                <p className="secondary-text">Created and maintained ETL processes, and automated reports for stakeholders.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaCode className="text-[var(--color-accent-coral)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Backend Developer — Freelance</p>
                <p className="secondary-text">Built APIs and automated workflows for fintech and logistics projects.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <FaTools className="text-[var(--color-primary)] text-xl mt-1" />
              <div>
                <p className="font-semibold">Favorite Technologies</p>
                <p className="secondary-text">Python, Node.js, Express, PostgreSQL, MySql, Docker, Azure, Bash</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
