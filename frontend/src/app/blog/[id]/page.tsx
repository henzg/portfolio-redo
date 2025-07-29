import BlogPost from '../../../components/BlogPost';

interface BlogPostPageProps {
    params: {
        id: string;
    };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    return (
        <main>
            <BlogPost postId={params.id} />
        </main>
    );
} 