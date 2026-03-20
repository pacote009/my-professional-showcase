import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const skillGroups = [
  {
    label: "Desenvolvimento",
    skills: ["React", "TypeScript", "JavaScript", "Python", "Node.js", "REST APIs", "HTML/CSS"],
  },
  {
    label: "Banco de Dados",
    skills: ["PostgreSQL", "SQL Server", "MySQL"],
  },
  {
    label: "Segurança",
    skills: ["SOC Operations", "Incident Response", "Vulnerability Analysis", "pfSense", "Fortinet", "Nmap", "Wireshark", "Nessus"],
  },
  {
    label: "Infraestrutura",
    skills: ["Linux", "Docker", "Git", "Hardening", "Network Segmentation"],
  },
  {
    label: "Frameworks & Normas",
    skills: ["LGPD", "ISO 27001", "Risk Assessment"],
  },
];

const certifications = [
  "Cisco — Introduction to Cybersecurity",
  "IBSEC — Cybersecurity Foundations",
  "Fundação Bradesco — Segurança da Informação",
  "CertiProf — Business Intelligence Foundation",
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-32 px-6">
      <div ref={ref} className="container max-w-5xl mx-auto">
        <div className={`mb-16 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Competências</p>
          <h2 className="text-3xl sm:text-4xl font-bold">Stack & certificações</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Skills */}
          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <div
                key={group.label}
                className={`${isVisible ? "animate-reveal-left" : "opacity-0"}`}
                style={{ animationDelay: `${0.15 + gi * 0.08}s` }}
              >
                <h3 className="text-sm font-semibold text-foreground mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications + Education */}
          <div>
            <div
              className={`mb-10 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">Certificações</h3>
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2 text-sm text-secondary-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`${isVisible ? "animate-reveal-right" : "opacity-0"}`}
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">Formação</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium">Pós-Graduação em Segurança da Informação</p>
                  <p className="text-xs text-muted-foreground">Estácio — Em andamento</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Análise e Desenvolvimento de Sistemas</p>
                  <p className="text-xs text-muted-foreground">UNIABEU</p>
                </div>
              </div>
            </div>

            <div
              className={`mt-10 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}
              style={{ animationDelay: "0.4s" }}
            >
              <h3 className="text-sm font-semibold text-foreground mb-2">Idiomas</h3>
              <p className="text-sm text-secondary-foreground">Inglês — Profissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
