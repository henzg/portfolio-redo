import BlogPost from '../../../components/BlogPost';

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;
    
    return (
        <main>
            <BlogPost postId={id} />
        </main>
    );
} 