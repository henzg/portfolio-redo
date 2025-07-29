import { blogPosts } from '../data/blog';
import Link from 'next/link';

interface BlogListProps {
    showAll?: boolean;
}

export default function BlogList({ showAll = false }: BlogListProps) {
    const postsToShow = showAll ? blogPosts : blogPosts.slice(0, 3);

    return (
        <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-16 px-2 sm:px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold mb-12 text-center text-[var(--color-primary)]">
                    Game Dev Log
                </h2>
                <p className="text-lg text-center mb-12 text-[var(--color-accent-black)] opacity-80 max-w-3xl mx-auto">
                    Documenting my journey in game development, graphics programming, and software engineering. 
                    From OpenGL basics to Unreal Engine projects, here's what I'm learning along the way.
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