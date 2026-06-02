import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Mail, Phone, Linkedin, Github, MapPin, MessageCircle, FileText } from "lucide-react";

const Contact = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-32 px-6">
      <div ref={ref} className="container max-w-3xl mx-auto text-center">
        <div className={`${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Contato</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Vamos conversar?</h2>
          <p className="text-secondary-foreground mb-12 max-w-md mx-auto text-balance">
            Estou disponível para oportunidades em desenvolvimento, segurança ou arquitetura de soluções.
          </p>
        </div>

        <div
          className={`grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <a
            href="mailto:vitor_melloleite@outlook.com"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:glow-border hover:glow-sm transition-all active:scale-[0.97]"
          >
            <Mail className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium">vitor_melloleite@outlook.com</p>
            </div>
          </a>
          <a
            href="tel:+5521988240361"
            className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:glow-border hover:glow-sm transition-all active:scale-[0.97]"
          >
            <Phone className="w-5 h-5 text-primary" />
            <div className="text-left">
              <p className="text-xs text-muted-foreground">Telefone</p>
              <p className="text-sm font-medium">(21) 98824-0361</p>
            </div>
          </a>
        </div>

        <div
          className={`flex flex-wrap items-center justify-center gap-3 mb-10 ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.25s" }}
        >
          <a
            href="https://wa.me/5521988240361"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:brightness-110 transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/vitor-mello-analista"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium hover:border-primary/30 hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            Ver perfil profissional
          </a>
        </div>

        <div
          className={`flex items-center justify-center gap-4 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="https://linkedin.com/in/vitor-mello-analista"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all active:scale-[0.97]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/pacote009"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg border border-border hover:border-primary/30 hover:text-primary transition-all active:scale-[0.97]"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>

        <div
          className={`mt-8 flex items-center justify-center gap-1.5 text-xs text-muted-foreground ${
            isVisible ? "animate-reveal-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <MapPin className="w-3 h-3" />
          Rio de Janeiro, Brasil
        </div>
      </div>
    </section>
  );
};

export default Contact;
