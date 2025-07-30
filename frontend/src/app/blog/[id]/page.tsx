import BlogPost from '../../../components/BlogPost';
import BlogNav from '../../../components/BlogNav';

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;
    
    return (
        <>
            <BlogNav />
            <main className="pt-20">
                <BlogPost postId={id} />
            </main>
        </>
    );
} 