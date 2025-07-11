export default function Hero() {
    return (
        <section className="relative py-32 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)' }}>
            {/* Animated background blob */}
            <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[var(--color-accent-cream)] opacity-20 rounded-full blur-3xl animate-pulse z-0" />
            <div className="max-w-3xl mx-auto relative z-10">
                <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4 text-[var(--color-accent-white)] drop-shadow-lg">
                    Hi, I&apos;m <span className="text-[var(--color-accent-coral)]">Zac</span>
                </h1>
                <p className="text-xl md:text-2xl font-light mb-8 text-[var(--color-text-light)] opacity-90">
                    I make integrating systems painless for you.
                </p>
                <p className="text-xl md:text-2xl font-light mb-8 text-[var(--color-text-light)] opacity-80">
                    My website is currently under construction so please be patient!
                </p>
                <a href="#projects" className="inline-block px-8 py-3 rounded-lg bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] font-semibold shadow-lg transition-transform duration-200 hover:scale-105 hover:bg-[var(--color-primary)] hover:text-white">
                    View My Work
                </a>
            </div>
        </section>
    );
}