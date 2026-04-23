export default function Hero() {
    return (
        <section className="relative py-32 px-6 text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)' }}>
            {/* Left blob — blue tinted */}
            <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-[var(--color-primary)] opacity-25 rounded-full blur-3xl animate-pulse z-0" />
            {/* Right blob — coral tinted */}
            <div className="absolute -bottom-24 -right-24 w-[420px] h-[420px] bg-[var(--color-accent-coral)] opacity-15 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1.5s' }} />

            <div className="max-w-3xl mx-auto relative z-10">
                <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-accent-coral)] mb-4 opacity-90">
                    Software Engineer &amp; Game Developer
                </p>
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 text-[var(--color-accent-white)] drop-shadow-lg">
                    Hi, I&apos;m <span className="text-[var(--color-accent-coral)]">Zac</span>
                </h1>
                <p className="text-lg md:text-xl font-light mb-10 text-[var(--color-text-light)] opacity-75 max-w-xl mx-auto">
                    Crafting immersive experiences with C++, OpenGL, and Unreal Engine
                </p>
                <a href="#projects" className="inline-block px-8 py-3 rounded-lg bg-[var(--color-accent-coral)] text-white font-semibold shadow-lg transition-all duration-200 hover:scale-105 hover:brightness-110">
                    View My Work
                </a>
            </div>

            {/* Bottom fade into next section */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-[var(--color-accent-cream)] z-10" />
        </section>
    );
}
