import { blogPosts } from '../data/blog';
import Link from 'next/link';

interface BlogListProps {
    showAll?: boolean;
}

export default function BlogList({ showAll = false }: BlogListProps) {
    // Sort posts by date (newest first) and then slice for display
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const postsToShow = showAll ? sortedPosts : sortedPosts.slice(0, 3);

    return (
        <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-12 px-2 sm:px-4 md:px-8">
            <div className="section-fade max-w-6xl mx-auto">
                <p className="text-xs font-mono tracking-widest uppercase text-[var(--color-accent-coral)] opacity-75 mb-3 text-center">
                    03 — Dev Log
                </p>
                <h2 className="text-4xl font-bold mb-8 text-center text-[var(--color-primary)]">
                    Game Dev Log
                </h2>
                <p className="text-lg text-center mb-12 text-[var(--color-accent-black)] opacity-80 max-w-3xl mx-auto">
                    Documenting my journey in game development, graphics programming, and software engineering. 
                    From OpenGL basics to Unreal Engine projects, here&apos;s what I&apos;m learning along the way.
                </p>
                
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {postsToShow.map((post) => (
                        <article 
                            key={post.id} 
                            className="bg-white/80 shadow-lg rounded-2xl p-6 border border-[var(--color-card-border)] backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="mb-4">
                                <div className="flex items-center gap-2 text-sm text-[var(--color-accent-coral)] mb-2">
                                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                        year: 'numeric', 
                                        month: 'long', 
                                        day: 'numeric' 
                                    })}</span>
                                    <span>•</span>
                                    <span>{post.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-[var(--color-accent-black)] opacity-80 line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag) => (
                                    <span 
                                        key={tag}
                                        className="px-3 py-1 bg-[var(--color-primary)] text-white text-xs rounded-full"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            <Link 
                                href={`/blog/${post.id}`}
                                className="inline-block px-4 py-2 bg-[var(--color-accent-coral)] text-white rounded-lg font-semibold hover:bg-[var(--color-primary)] transition-colors duration-200"
                            >
                                Read More
                            </Link>
                        </article>
                    ))}
                </div>

                {!showAll && blogPosts.length > 3 && (
                    <div className="text-center mt-12">
                        <Link 
                            href="/blog"
                            className="inline-block px-8 py-3 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-[var(--color-accent-coral)] transition-colors duration-200"
                        >
                            View All Posts
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
} 