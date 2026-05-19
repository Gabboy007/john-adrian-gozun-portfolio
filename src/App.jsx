import { useEffect, useState } from 'react';
import {
  ArrowRight,
  ChevronUp,
  CircuitBoard,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import {
  contactLinks,
  education,
  experiences,
  expertise,
  highlights,
  navItems,
  photos,
  skills,
  stats,
} from './data/portfolio.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition ${
        isScrolled ? 'border-b border-white/10 bg-obsidian/90 shadow-lg backdrop-blur-xl' : 'bg-obsidian/60 backdrop-blur-md'
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex min-h-11 items-center gap-3 rounded-full pr-3 text-white" onClick={closeMenu}>
          <span className="grid h-10 w-10 place-items-center rounded-full border border-circuit/40 bg-circuit/10 text-circuit">
            <CircuitBoard className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-sm font-semibold tracking-wide sm:text-base">John Adrian Gozun</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={`mailto:${contactLinks[0].label}`}
          className="hidden min-h-11 items-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-4 text-sm font-semibold text-electric transition hover:bg-electric hover:text-obsidian md:inline-flex"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Contact
        </a>

        <button
          type="button"
          className="grid min-h-11 min-w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-obsidian/[0.96] px-4 pb-4 pt-2 backdrop-blur-xl md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-12 rounded-lg px-4 py-3 text-base font-medium text-slate-200 transition hover:bg-white/[0.08] hover:text-white"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function PhotoShowcase() {
  return (
    <div className="grid min-w-0 gap-3" data-visual-root>
      <div className="relative overflow-hidden rounded-lg border border-white/10 bg-panel shadow-electric">
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          className="h-[24rem] w-full object-cover sm:h-[31rem] lg:h-[34rem]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(7,16,20,0.86))]" />
        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-circuit">{photos.hero.label}</p>
          <h2 className="mt-2 max-w-xl text-2xl font-bold leading-tight text-white sm:text-3xl">
            {photos.hero.title}
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {photos.tiles.map((photo) => (
          <figure key={photo.label} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.045]">
            <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover" />
            <figcaption className="px-3 py-3 text-xs font-semibold text-slate-200 sm:text-sm">
              {photo.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-24 sm:pt-28 lg:min-h-screen lg:pt-28">
      <div className="absolute inset-0 bg-grid bg-[size:38px_38px] opacity-40" />
      <div className="absolute inset-x-0 top-0 h-52 bg-[linear-gradient(180deg,rgba(46,211,255,0.18),transparent)]" />
      <div className="relative mx-auto grid w-full max-w-[82rem] items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-8 lg:pb-20">
        <div className="min-w-0 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-circuit/30 bg-circuit/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-circuit sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-circuit shadow-[0_0_18px_rgba(32,242,166,0.9)]" />
            Hardware + Software Builder
          </div>
          <h1 className="mt-6 text-5xl font-bold leading-none text-white sm:text-6xl lg:text-[4.4rem] xl:text-[4.85rem]">
            John Adrian Gozun
          </h1>
          <p className="mt-5 text-balance text-2xl font-semibold leading-snug text-slate-100 sm:text-3xl lg:text-[2rem]">
            Building practical systems across code, circuits, data, and operations.
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            Computer Engineering student with hands-on experience in Microsoft Dynamics 365, Arduino development,
            hardware troubleshooting, mentoring, and field-ready technical work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#experience"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-circuit px-6 text-sm font-bold text-obsidian shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Experience
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-electric/40 bg-electric/10 px-6 text-sm font-bold text-electric transition hover:-translate-y-0.5 hover:bg-electric hover:text-obsidian"
            >
              Start a Conversation
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.045] p-4">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:pl-2">
          <PhotoShowcase />
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-electric">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative border-y border-white/10 bg-steel/[0.35] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          eyebrow="Core expertise"
          title="Equally at home with dashboards and hardware benches."
          text="John's edge is the mix: software logic, electrical training, practical repair, student mentoring, and operations work all feeding the same builder mindset."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {expertise.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-white/10 bg-obsidian/70 p-5 shadow-glow sm:p-6">
                <div className="flex items-start gap-4">
                  <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/5 ${item.accent}`}>
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{item.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {item.points.map((point) => (
                    <div key={point} className="rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200">
                      {point}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="flex gap-4 rounded-lg border border-white/10 bg-white/[0.045] p-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-electric/10 text-electric">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{item.period}</p>
                  <h3 className="mt-1 text-lg font-bold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{item.school}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <Icon className="h-6 w-6 text-warning" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          eyebrow="Experience timeline"
          title="A practical path through data, electronics, support, robotics, and operations."
          text="Each role adds a different layer: analytical systems, embedded projects, diagnostics, automation, and real-world coordination."
        />

        <div className="relative mx-auto mt-12 max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-electric via-circuit to-transparent sm:left-7" />
          <div className="grid gap-5">
            {experiences.map((item) => {
              const Icon = item.icon;
              return (
                <article key={`${item.role}-${item.period}`} className="relative pl-16 sm:pl-20">
                  <div className="absolute left-0 top-1 grid h-11 w-11 place-items-center rounded-full border border-circuit/40 bg-obsidian text-circuit shadow-glow sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                  </div>
                  <div className="rounded-lg border border-white/10 bg-panel/[0.78] p-5 transition hover:border-electric/40 hover:bg-panel sm:p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">{item.period}</p>
                        <h3 className="mt-2 text-xl font-bold text-white">{item.role}</h3>
                        <p className="mt-1 text-sm font-medium text-slate-400">{item.company}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{item.details}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-xs font-semibold text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="border-y border-white/10 bg-steel/[0.35] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionLabel
          eyebrow="Skill matrix"
          title="Organized for projects that need both logic and hands."
          text="A focused stack for prototypes, system maintenance, student research support, and operational improvement."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="rounded-lg border border-white/10 bg-obsidian/[0.72] p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-circuit/10 text-circuit">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{group.title}</h3>
                </div>
                <div className="mt-5 grid gap-3">
                  {group.items.map((skill) => (
                    <div key={skill} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-electric" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-20" />
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg border border-white/10 bg-panel/[0.86] p-5 shadow-glow backdrop-blur md:grid-cols-[1.2fr_0.8fr] sm:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-circuit">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Ready to build, troubleshoot, or prototype.</h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
              Open to opportunities where software, electronics, and real-world execution meet. Based in Bocaue, Bulacan,
              working in English and Filipino.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${contactLinks[0].label}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-electric px-6 text-sm font-bold text-obsidian transition hover:bg-white"
              >
                Email John
                <Mail className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="#home"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-6 text-sm font-bold text-white transition hover:border-circuit hover:text-circuit"
              >
                Back to Top
                <ChevronUp className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid content-start gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex min-h-14 items-center gap-3 rounded-md border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200 transition hover:border-electric/40 hover:text-white"
                >
                  <Icon className="h-5 w-5 shrink-0 text-electric" aria-hidden="true" />
                  <span className="break-words">{link.label}</span>
                </a>
              );
            })}
            <div className="rounded-md border border-warning/20 bg-warning/10 p-4 text-sm leading-6 text-slate-200">
              Languages: English and Filipino
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 John Adrian Gozun. Hardware, software, and systems portfolio.</p>
          <a href="#home" className="inline-flex min-h-11 items-center gap-2 text-slate-400 transition hover:text-circuit">
            <ChevronUp className="h-4 w-4" aria-hidden="true" />
            Back to start
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-obsidian text-slate-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
