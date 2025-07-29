import { blogPosts } from '../data/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPostProps {
    postId: string;
}

export default function BlogPost({ postId }: BlogPostProps) {
    const post = blogPosts.find(p => p.id === postId);
    
    if (!post) {
        notFound();
    }

    // Simple markdown to HTML conversion for basic formatting
    const renderContent = (content: string) => {
        return content
            .split('\n')
            .map((line, index) => {
                if (line.startsWith('# ')) {
                    return <h1 key={index} className="text-3xl font-bold text-[var(--color-primary)] mb-4 mt-8">{line.substring(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={index} className="text-2xl font-bold text-[var(--color-primary)] mb-3 mt-6">{line.substring(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={index} className="text-xl font-bold text-[var(--color-primary)] mb-2 mt-4">{line.substring(4)}</h3>;
                }
                if (line.startsWith('- ')) {
                    return <li key={index} className="ml-6 mb-1">{line.substring(2)}</li>;
                }
                if (line.startsWith('1. ')) {
                    return <li key={index} className="ml-6 mb-1">{line.substring(3)}</li>;
                }
                if (line.trim() === '') {
                    return <br key={index} />;
                }
                if (line.includes('**') && line.includes('**')) {
                    const parts = line.split('**');
                    return (
                        <p key={index} className="mb-4 text-[var(--color-accent-black)]">
                            {parts.map((part, i) => 
                                i % 2 === 1 ? <strong key={i}>{part}</strong> : part
                            )}
                        </p>
                    );
                }
                return <p key={index} className="mb-4 text-[var(--color-accent-black)]">{line}</p>;
            });
    };

    return (
        <section className="bg-[var(--color-accent-cream)] text-[var(--color-accent-black)] py-16 px-2 sm:px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Back to blog link */}
                <Link 
                    href="/blog"
                    className="inline-flex items-center gap-2 text-[var(--color-accent-coral)] hover:text-[var(--color-primary)] mb-8 transition-colors duration-200"
                >
                    ← Back to Game Dev Log
                </Link>

                {/* Article header */}
                <article className="bg-white/80 shadow-lg rounded-2xl p-8 border border-[var(--color-card-border)] backdrop-blur-sm">
                    <header className="mb-8">
                        <div className="flex items-center gap-2 text-sm text-[var(--color-accent-coral)] mb-4">
                            <span>{new Date(post.date).toLocaleDateString('en-US', { 
                                year: 'numeric', 
                                month: 'long', 
                                day: 'numeric' 
                            })}</span>
                            <span>•</span>
                            <span>{post.readTime}</span>
                        </div>
                        
                        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-4">
                            {post.title}
                        </h1>
                        
                        <p className="text-xl text-[var(--color-accent-black)] opacity-80 mb-6">
                            {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span 
                                    key={tag}
                                    className="px-3 py-1 bg-[var(--color-primary)] text-white text-sm rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </header>

                    {/* Article content */}
                    <div className="prose prose-lg max-w-none">
                        {renderContent(post.content)}
                    </div>
                </article>
            </div>
        </section>
    );
} 