import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Projects from "../components/Project";
import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-dark)] text-black">
      <Nav />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="blog"><BlogList /></div>
      <div id="footer"><Footer /></div>
    </main>
  );
}
