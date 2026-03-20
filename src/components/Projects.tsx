import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Ativix",
    subtitle: "Sistema de Help Desk / Gestão Operacional",
    description:
      "Plataforma fullstack para gestão de chamados e ordens de serviço com painel administrativo, autenticação de usuários e relatórios. Implantada e utilizada em ambiente produtivo.",
    stack: ["React", "Vite", "PostgreSQL", "REST API", "Linux"],
  },
  {
    title: "Autoatendimento Escolar",
    subtitle: "Sistema integrado com hardware",
    description:
      "Aplicação em Python para totens de autoatendimento com controle de saldo, carrinho de compras, emissão de comprovantes e integração com impressoras térmicas Zebra.",
    stack: ["Python", "Hardware Integration", "Zebra Printers", "SQL"],
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
              <p className="text-sm text-secondary-foreground leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
