import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const profileImageSrc = `${import.meta.env.BASE_URL}profile.svg`;

const heroStats = [
  { value: "+5", label: "anos em TI" },
  { value: "~50%", label: "menos incidentes" },
  { value: "2", label: "sistemas em produção" },
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,hsl(var(--primary)/0.12),transparent_34%),radial-gradient(circle_at_80%_20%,hsl(190_80%_45%/0.08),transparent_28%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.03)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full bg-primary/5 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex animate-reveal-up items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary" style={{ animationDelay: "0.1s" }}>
            <Sparkles className="h-3.5 w-3.5" />
            Fullstack · Cybersecurity · Solutions
          </div>

          <h1
            className="animate-reveal-up text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Sistemas web
            <br />
            <span className="text-gradient">seguros e prontos</span>
            <br />
            para operação.
          </h1>

          <p
            className="mx-auto mt-6 max-w-2xl animate-reveal-up text-lg leading-8 text-secondary-foreground text-balance lg:mx-0"
            style={{ animationDelay: "0.3s" }}
          >
            Sou Vitor de Mello Leite, desenvolvedor fullstack e analista de segurança. Construo aplicações,
            automações e ambientes Linux com foco em confiabilidade, proteção e resultado de negócio.
          </p>

          <div
            className="mt-8 flex animate-reveal-up flex-wrap items-center justify-center gap-3 lg:justify-start"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className={`${focusRing} inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.97]`}
            >
              Ver projetos
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className={`${focusRing} inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary active:scale-[0.97]`}
            >
              <Mail className="h-4 w-4" />
              Falar comigo
            </a>
            <a
              href="https://github.com/pacote009"
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:bg-secondary active:scale-[0.97]`}
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div
            className="mt-10 grid animate-reveal-up grid-cols-3 gap-3"
            style={{ animationDelay: "0.5s" }}
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-border bg-card/70 p-4 backdrop-blur-sm">
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-reveal-right" style={{ animationDelay: "0.35s" }}>
          <div className="relative mx-auto max-w-sm rounded-[2rem] border border-border bg-card/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur-md">
            <div className="absolute -right-5 -top-5 rounded-2xl border border-primary/20 bg-primary/10 p-3 text-primary backdrop-blur">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-background">
              <img
                src={profileImageSrc}
                alt="Avatar profissional de Vitor de Mello Leite"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="mt-4 space-y-3 rounded-2xl border border-border bg-background/70 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold">Vitor de Mello Leite</p>
                  <p className="text-xs text-muted-foreground">Fullstack · Segurança · Infra</p>
                </div>
                <a
                  href="https://linkedin.com/in/vitor-mello-analista"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} rounded-lg border border-border p-2 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary`}
                  aria-label="Perfil de Vitor de Mello Leite no LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5 rounded-lg bg-secondary px-2 py-1.5">
                  <MapPin className="h-3.5 w-3.5" /> Rio de Janeiro
                </span>
                <span className="flex items-center gap-1.5 rounded-lg bg-secondary px-2 py-1.5">
                  <BriefcaseBusiness className="h-3.5 w-3.5" /> Produção real
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className={`${focusRing} absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-muted-foreground transition-colors hover:text-primary`}
        aria-label="Ir para áreas de atuação"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
