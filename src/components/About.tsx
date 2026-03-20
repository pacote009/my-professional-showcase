import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Shield, Code, Settings } from "lucide-react";

const areas = [
  {
    icon: Code,
    title: "Fullstack Developer",
    description:
      "Sistemas completos com React, Python, APIs REST e PostgreSQL. Do frontend à implantação em produção Linux.",
    tags: ["React", "TypeScript", "Python", "Node.js", "PostgreSQL"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Analyst",
    description:
      "SOC operations, incident response, hardening de servidores e conformidade LGPD. Experiência na EY.",
    tags: ["SOC", "Incident Response", "pfSense", "LGPD", "ISO 27001"],
  },
  {
    icon: Settings,
    title: "Solutions Engineer",
    description:
      "Tradução de demandas operacionais em soluções técnicas, integração entre sistemas e automação de processos.",
    tags: ["Integração", "APIs", "Automação", "Linux", "Arquitetura"],
  },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-32 px-6">
      <div ref={ref} className="container max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isVisible ? "animate-reveal-up" : "opacity-0"}`}>
          <p className="font-mono text-sm text-primary mb-3 tracking-wider uppercase">Áreas de atuação</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Três disciplinas,
            <br />
            uma visão integrada.
          </h2>
          <p className="text-secondary-foreground max-w-2xl mb-16 text-balance">
            Combino desenvolvimento, segurança e arquitetura de soluções para entregar
            sistemas que funcionam, escalam e protegem.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <div
              key={area.title}
              className={`group relative rounded-xl p-6 bg-card border border-border hover:glow-border hover:glow-sm transition-all duration-500 ${
                isVisible ? "animate-reveal-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <area.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-105 transition-transform" />
              <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
              <p className="text-sm text-secondary-foreground mb-4 leading-relaxed">{area.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {area.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-secondary text-secondary-foreground"
                  >
                    {tag}
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

export default About;
