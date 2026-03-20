import { Github, Linkedin, Mail, Phone, MapPin, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />
      
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="animate-reveal-up mb-6" style={{ animationDelay: "0.1s" }}>
          <div className="w-28 h-28 rounded-full bg-card border-2 border-primary/30 mx-auto flex items-center justify-center text-3xl font-bold text-primary shadow-lg shadow-primary/10">
            VM
          </div>
        </div>

        <div className="animate-reveal-up" style={{ animationDelay: "0.2s" }}>
          <p className="font-mono text-sm text-primary tracking-wider uppercase mb-6">
            Fullstack · Cybersecurity · Solutions
          </p>
        </div>

        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95] mb-6 animate-reveal-up"
          style={{ animationDelay: "0.25s" }}
        >
          Vitor de Mello
          <br />
          <span className="text-gradient">Leite</span>
        </h1>

        <p
          className="text-lg text-secondary-foreground max-w-xl mx-auto mb-8 animate-reveal-up text-balance"
          style={{ animationDelay: "0.4s" }}
        >
          Desenvolvedor e analista multidisciplinar — construindo sistemas robustos, 
          seguros e inteligentes do frontend ao servidor.
        </p>

        <div
          className="flex items-center justify-center gap-4 flex-wrap mb-12 animate-reveal-up"
          style={{ animationDelay: "0.55s" }}
        >
          <a
            href="https://linkedin.com/in/vitor-mello-analista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 active:scale-[0.97] transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/pacote009"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary active:scale-[0.97] transition-all"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>
          <a
            href="mailto:vitor_melloleite@outlook.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-foreground font-medium text-sm hover:bg-secondary active:scale-[0.97] transition-all"
          >
            <Mail className="w-4 h-4" />
            Contato
          </a>
        </div>

        <div
          className="flex items-center justify-center gap-6 text-sm text-muted-foreground animate-reveal-up"
          style={{ animationDelay: "0.65s" }}
        >
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" /> Rio de Janeiro
          </span>
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5" /> (21) 98824-0361
          </span>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
