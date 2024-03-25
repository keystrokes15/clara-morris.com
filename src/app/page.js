import MainSection from "./components/MainSection"
import Navbar from "./components/Navbar";
import About from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainSection />
        <About />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
