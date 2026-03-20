import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <div className="line-accent" />
      <About />
      <div className="line-accent" />
      <Experience />
      <div className="line-accent" />
      <Projects />
      <div className="line-accent" />
      <Skills />
      <div className="line-accent" />
      <Contact />
      <footer className="py-8 text-center text-xs text-muted-foreground border-t border-border">
        © {new Date().getFullYear()} Vitor de Mello Leite. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Index;
