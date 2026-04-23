import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, ExternalLink, Pause, Play } from "lucide-react";
import { getProject } from "@/data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProject(id) : undefined;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
        <div className="max-w-[560px] mx-auto space-y-4">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground">
            <ArrowLeft size={12} /> Back to projects
          </Link>
          <h1 className="text-base font-semibold">Project not found</h1>
          <p className="text-xs text-muted-foreground">The case study you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Client", value: project.client },
    { label: "Industry", value: project.industry },
    { label: "Duration", value: project.duration },
    { label: "Platform", value: project.platform },
  ];

  return (
    <div className="min-h-screen px-5 py-10 sm:px-6 sm:py-12">
      <div className="max-w-[560px] mx-auto space-y-10">
        {/* Back */}
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={12} /> Back to projects
        </Link>

        {/* Header */}
        <header>
          <div className="flex items-center gap-3">
            {project.icon}
            <span className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{project.industry}</span>
          </div>
          <h1 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{project.name}</h1>
          <p className="mt-1.5 text-xs leading-5 text-muted-foreground">{project.tagline}</p>

          {/* Live links */}
          {(project.liveUrl || project.secondaryUrl) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br ${project.accentClass} px-3 py-1.5 text-[11px] font-medium text-white transition-opacity hover:opacity-90`}
                >
                  <ExternalLink size={11} /> {project.liveLabel ?? "Visit live site"}
                </a>
              )}
              {project.secondaryUrl && (
                <a
                  href={project.secondaryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <ExternalLink size={11} /> {project.secondaryLabel ?? "Secondary site"}
                </a>
              )}
            </div>
          )}
        </header>

        {/* Hero visual */}
        {project.heroVideo ? (
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[16/9] bg-card group">
            <video
              ref={videoRef}
              src={project.heroVideo}
              className="h-full w-full object-cover"
              playsInline
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onEnded={() => setIsPlaying(false)}
              onClick={togglePlay}
            />
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
              }`}
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-md ring-1 ring-white/20 transition-transform hover:scale-105 active:scale-95">
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" className="ml-0.5" />}
              </span>
            </button>
          </div>
        ) : project.heroImage ? (
          <div className="relative overflow-hidden rounded-2xl border border-border aspect-[16/9] bg-card">
            <img
              src={project.heroImage}
              alt={`${project.name} hero`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className={`relative overflow-hidden rounded-2xl border border-border aspect-[16/9] bg-gradient-to-br ${project.accentClass}`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_60%)]" />
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div className="text-white/90">
                <p className="text-[10px] uppercase tracking-[0.14em] opacity-80">Case Study</p>
                <p className="mt-0.5 text-sm font-semibold">{project.name}</p>
              </div>
              <span className="text-[10px] text-white/70">{project.year}</span>
            </div>
          </div>
        )}

        {/* Meta */}
        <section className="grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3">
          {meta.map((m) => (
            <div key={m.label}>
              <p className="text-[10px] uppercase tracking-[0.1em] text-muted-foreground/70">{m.label}</p>
              <p className="mt-0.5 text-[12px] text-foreground">{m.value}</p>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Overview</h2>
          <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{project.overview}</p>
        </section>

        {/* Problem & Solution */}
        <section className="grid gap-6 sm:grid-cols-2">
          <div>
            <h2 className="text-[13px] font-semibold text-foreground">The Problem</h2>
            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{project.problem}</p>
          </div>
          <div>
            <h2 className="text-[13px] font-semibold text-foreground">The Solution</h2>
            <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{project.solution}</p>
          </div>
        </section>

        {/* Design Thinking */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Design Thinking</h2>
          <p className="mt-2 text-[11px] leading-5 text-muted-foreground">{project.designThinking}</p>
        </section>

        {/* Website Overview */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Website Overview</h2>
          <ul className="mt-3 space-y-2">
            {project.websiteOverview.map((line) => (
              <li key={line} className="flex items-start gap-2 text-[11px] leading-5 text-muted-foreground">
                <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br ${project.accentClass}`} />
                {line}
              </li>
            ))}
          </ul>
        </section>

        {/* Typography */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Typography</h2>
          <div className="mt-3 space-y-2">
            {project.typography.map((t) => (
              <div key={t.family} className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-[14px] font-medium text-foreground">{t.family}</p>
                  <p className="text-[10px] text-muted-foreground/70">{t.weights}</p>
                </div>
                <p className="mt-1 text-[11px] leading-5 text-muted-foreground">{t.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Color Palette */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Color Palette</h2>
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
            {project.colorPalette.map((c) => (
              <div key={c.hex} className="rounded-xl border border-border bg-card p-2.5">
                <div
                  className="h-12 w-full rounded-md border border-border/50"
                  style={{ backgroundColor: c.hex }}
                />
                <p className="mt-2 text-[11px] font-medium text-foreground">{c.name}</p>
                <p className="text-[10px] uppercase tracking-[0.06em] text-muted-foreground/70">{c.hex}</p>
                <p className="mt-1 text-[10px] leading-4 text-muted-foreground">{c.usage}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Process</h2>
          <div className="mt-3 space-y-3">
            {project.process.map((step, i) => (
              <div key={step.title} className="rounded-xl border border-border bg-card p-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground/70">0{i + 1}</span>
                  <h3 className="text-[12px] font-medium text-foreground">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-[11px] leading-5 text-muted-foreground">{step.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Outcomes */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Outcomes</h2>
          <ul className="mt-3 space-y-2">
            {project.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-[11px] leading-5 text-muted-foreground">
                <span className={`mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gradient-to-br ${project.accentClass}`} />
                {o}
              </li>
            ))}
          </ul>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-[13px] font-semibold text-foreground">Tools</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tools.map((t) => (
              <span key={t} className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Visit live (footer CTA) */}
        {project.liveUrl && (
          <section className={`rounded-2xl border border-border bg-gradient-to-br ${project.accentClass} p-5`}>
            <p className="text-[10px] uppercase tracking-[0.14em] text-white/80">Proof of work</p>
            <p className="mt-1 text-[13px] font-semibold text-white">See {project.name} live</p>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
            >
              <ExternalLink size={11} /> {project.liveLabel ?? project.liveUrl}
            </a>
            {project.secondaryUrl && (
              <a
                href={project.secondaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 mt-3 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur transition-colors hover:bg-white/25"
              >
                <ExternalLink size={11} /> {project.secondaryLabel}
              </a>
            )}
          </section>
        )}

        {/* Footer nav */}
        <footer className="flex items-center justify-between border-t border-border pt-6">
          <Link to="/projects" className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-foreground">
            <ArrowLeft size={12} /> All projects
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-1.5 text-[11px] text-foreground hover:opacity-80">
            Start a project <ArrowUpRight size={12} />
          </Link>
        </footer>
      </div>
    </div>
  );
}
