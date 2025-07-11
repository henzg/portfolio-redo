export default function Contact() {
  return (
    <section className="bg-[var(--color-accent-cream)] py-12 px-2 sm:px-4 md:px-8">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Left: Avatar and Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-4 mb-8 md:mb-0">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full bg-[var(--color-accent-coral)] flex items-center justify-center text-3xl font-bold text-white shadow-md mb-2">
            ZH
          </div>
          {/* Warm Message */}
          <div className="mb-2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[var(--color-accent-coral)] mb-1">Contact Me</h2>
            <p className="text-[var(--color-text-secondary)] text-base">I'd love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.</p>
          </div>
          {/* Contact Info */}
          <div className="space-y-1 text-[var(--color-accent-black)]">
            <p>
              <span className="font-semibold">Email:</span>{' '}
              <a href="mailto:zacghenry@yahoo.com" className="text-[var(--color-primary)] underline hover:text-[var(--color-accent-coral)] transition">
                zacghenry@yahoo.com
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{' '}
              <a href="https://www.linkedin.com/in/zac-henry/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] underline hover:text-[var(--color-accent-coral)] transition">
                linkedin.com/in/zac-henry/
              </a>
            </p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <form className="space-y-6 bg-white/80 rounded-2xl shadow-lg p-6 sm:p-8 border border-[var(--color-card-border)] backdrop-blur-sm">
          <div>
            <label className="block text-sm font-medium text-[var(--color-accent-black)] mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-[var(--color-card-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-accent-white)] text-[var(--color-accent-black)] transition"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-accent-black)] mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[var(--color-card-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-accent-white)] text-[var(--color-accent-black)] transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-accent-black)] mb-1">Message</label>
            <textarea
              rows={5}
              className="w-full px-4 py-2 border border-[var(--color-card-border)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-[var(--color-accent-white)] text-[var(--color-accent-black)] transition"
              placeholder="Your message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-primary w-full mt-2 shadow-md hover:scale-[1.03]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}