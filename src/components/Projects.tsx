import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Ativix",
    subtitle: "Sistema de Help Desk / Gestão Operacional",
    description:
      "Plataforma fullstack para gestão de chamados e ordens de serviço com painel administrativo, autenticação de usuários e relatórios. Implantada e utilizada em ambiente produtivo.",
    stack: ["React", "Vite", "PostgreSQL", "REST API", "Linux"],
    liveUrl: "https://ativix.com.br",
    repoUrl: "https://github.com/pacote009",
  },
  {
    title: "Autoatendimento Escolar",
    subtitle: "Sistema integrado com hardware",
    description:
      "Aplicação em Python para totens de autoatendimento com controle de saldo, carrinho de compras, emissão de comprovantes e integração com impressoras térmicas Zebra.",
    stack: ["Python", "Integração de Hardware", "Zebra", "SQL"],
    liveUrl: null,
    repoUrl: "https://github.com/pacote009",
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="container max-w-5xl mx-auto">
        <div className={`mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Projetos</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Soluções em produção</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group rounded-xl p-8 bg-card border border-border hover:glow-border hover:glow-sm transition-all duration-500 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
              </div>

              <p className="text-sm text-secondary-foreground leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.stack.map((tech) => (
                  <span key={tech} className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver projeto
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium border border-border hover:border-primary/30 hover:text-primary transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    Código
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
