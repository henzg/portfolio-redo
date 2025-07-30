import BlogList from '../../components/BlogList';
import BlogNav from '../../components/BlogNav';

export default function BlogPage() {
    return (
        <>
            <BlogNav />
            <main className="pt-20">
                <BlogList showAll={true} />
            </main>
        </>
    );
} 