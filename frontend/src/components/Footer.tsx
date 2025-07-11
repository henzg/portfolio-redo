export default function Footer(){
    return (
        <footer className="bg-black text-white py-6 mt-3">
            <div className="container mx-auto text-center text-sm">
                <p>&copy; {new Date().getFullYear()} Zac H. All rights reserverd.</p>
            </div>
        </footer>
    );
}