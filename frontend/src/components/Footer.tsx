export default function Footer(){
    return (
        <footer className="bg-[var(--color-bg-dark)] border-t border-[var(--color-primary)] border-opacity-20 text-[var(--color-text-secondary)] py-8">
            <div className="container mx-auto text-center text-sm space-y-2">
                <div className="flex justify-center gap-6 mb-3">
                    <a href="https://github.com/henzg" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-coral)] transition-colors">GitHub</a>
                    <a href="https://www.linkedin.com/in/zac-henry/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-accent-coral)] transition-colors">LinkedIn</a>
                </div>
                <p>&copy; {new Date().getFullYear()} Zac Henry. All rights reserved.</p>
            </div>
        </footer>
    );
}