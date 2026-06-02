import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowRight, CheckCircle2, ExternalLink, Github, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Ativix",
    subtitle: "Sistema de Help Desk / Gestão Operacional",
    description:
      "Plataforma fullstack para centralizar chamados, ordens de serviço, autenticação, painel administrativo e relatórios operacionais.",
    problem: "Processos de suporte fragmentados, baixa rastreabilidade e controle manual de ordens de serviço.",
    outcome: "Sistema em produção para organizar demandas, reduzir retrabalho e dar visibilidade à operação.",
    stack: ["React", "Vite", "PostgreSQL", "REST API", "Linux"],
    status: "Produção",
    liveUrl: "https://ativix.vercel.app/",
    repoUrl: "https://github.com/pacote009",
    featured: true,
  },
  {
    title: "Autoatendimento Escolar",
    subtitle: "Sistema integrado com hardware",
    description:
      "Aplicação em Python para totens de autoatendimento com controle de saldo, carrinho de compras, comprovantes e integração com impressoras térmicas Zebra.",
    problem: "Atendimento presencial repetitivo e dependente de operação manual para compras e emissão de comprovantes.",
    outcome: "Fluxo de autoatendimento com integração entre software, banco de dados e periféricos físicos.",
    stack: ["Python", "Integração de Hardware", "Zebra", "SQL"],
    status: "Case técnico",
    liveUrl: null,
    repoUrl: "https://github.com/pacote009",
    featured: false,
  },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 px-6">
      <div ref={ref} className="container max-w-6xl mx-auto">
        <div className={`mb-16 max-w-3xl ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Projetos</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-balance">Soluções reais, com contexto e impacto.</h2>
          <p className="mt-4 text-secondary-foreground text-balance">
            Os projetos abaixo destacam problemas operacionais reais, escolhas técnicas e resultados entregues em ambientes práticos.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:glow-border hover:glow-sm ${
                project.featured ? "lg:row-span-2" : ""
              } ${isVisible ? "animate-reveal-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.2 + i * 0.12}s` }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.12),transparent_38%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        {project.status}
                      </span>
                      {project.featured && (
                        <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                          Projeto destaque
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.subtitle}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mt-1" />
                </div>

                <p className="text-sm text-secondary-foreground leading-relaxed mb-6">{project.description}</p>

                <div className="grid gap-3 mb-6">
                  <div className="rounded-xl border border-border bg-background/60 p-4">
                    <p className="mb-2 text-xs font-mono uppercase tracking-wider text-muted-foreground">Problema</p>
                    <p className="text-sm text-secondary-foreground leading-relaxed">{project.problem}</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                    <p className="mb-2 flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-primary">
                      <CheckCircle2 className="h-3.5 w-3.5" /> Resultado
                    </p>
                    <p className="text-sm text-secondary-foreground leading-relaxed">{project.outcome}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-7">
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
                      className={`${focusRing} inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-primary text-primary-foreground hover:brightness-110 transition-all`}
                    >
                      Ver projeto
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${focusRing} inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-border hover:border-primary/30 hover:text-primary transition-colors`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
