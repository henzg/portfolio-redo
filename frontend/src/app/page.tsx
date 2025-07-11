import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Projects from "../components/Project";

export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-[var(--color-primary-dark)] text-black">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Portfolio site for a backend/devops engineer" />
      </Head>
      <Nav />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="projects"><Projects /></div>
      <div id="contact" className="pt-8"><Contact /></div>
      <div id="footer"><Footer /></div>
    </main>
    </>
  );
}
