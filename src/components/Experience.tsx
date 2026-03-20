import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const experiences = [
  {
    role: "Instrutor de Tecnologia",
    company: "Instituto Besouro",
    period: "09/2025 – Atual",
    highlights: [
      "Ensino de lógica de programação e desenvolvimento de sistemas",
      "Mentoria técnica em projetos de inovação tecnológica",
      "Orientação na construção de soluções digitais aplicadas",
    ],
  },
  {
    role: "Analista de Sistemas / Desenvolvedor Fullstack",
    company: "Centro Educacional Betel",
    period: "10/2024 – 09/2025",
    highlights: [
      "Desenvolvimento do sistema Ativix (React, Vite, PostgreSQL)",
      "Implementação de firewall pfSense e hardening Linux",
      "Redução de incidentes operacionais em ~50%",
      "APIs REST para gestão de chamados e relatórios",
    ],
  },
  {
    role: "Assistente Administrativo / TI",
    company: "Dicon Atacadão",
    period: "05/2022 – 06/2024",
    highlights: [
      "Automação de rotinas administrativas com scripts e banco de dados",
      "Administração de SQL Server, MySQL e PostgreSQL",
      "Integração entre sistemas internos e processos operacionais",
    ],
  },
  {
    role: "Tech Risk Trainee",
    company: "Ernst & Young (EY)",
    period: "06/2021 – 01/2022",
    highlights: [
      "Monitoramento e triagem de alertas em ambiente SOC",
      "Incident Response e análise inicial de ameaças",
      "Risk Assessment e conformidade LGPD / ISO 27001",
    ],
  },
  {
    role: "Técnico em Infraestrutura e Segurança",
    company: "TechLight (Ricatel)",
    period: "01/2019 – 05/2021",
    highlights: [
      "Segmentação segura de redes e proteção perimetral",
      "Administração segura de ambientes Linux",
      "Configuração de serviços de rede e telefonia IP",
    ],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-32 px-6">
      <div ref={ref} className="container max-w-4xl mx-auto">
        <div className={`mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Trajetória</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Experiência profissional</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.company}-${exp.period}`}
                className={`relative pl-8 md:pl-20 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 + i * 0.1}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1.5 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/80 border-2 border-background" />

                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-3">
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <span className="text-sm text-primary font-medium">{exp.company}</span>
                </div>
                <p className="font-mono text-xs text-muted-foreground mb-3">{exp.period}</p>
                <ul className="space-y-1.5">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-sm text-secondary-foreground flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary/60 mt-2 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
