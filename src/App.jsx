import { useEffect, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  Mail,
  Menu,
  X,
} from 'lucide-react';
import {
  contactLinks,
  education,
  experiences,
  identityFacts,
  navItems,
  operatingModes,
  photos,
  proofPoints,
  skills,
  visualStories,
} from './data/portfolio.js';

const contactEmail = contactLinks[0]?.label ?? '';

function LogoMark({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 84 84" role="img" aria-label="JAG Signalworks logo">
      <path className="logo-mark__plate" d="M14 10h42l14 14v50H14z" />
      <path className="logo-mark__trace" d="M23 59h14c8 0 13-5 13-13V25" />
      <path className="logo-mark__trace logo-mark__trace--alt" d="M62 36H43c-8 0-14 6-14 14v9" />
      <path className="logo-mark__spark" d="M58 12v17h17" />
      <circle className="logo-mark__node" cx="23" cy="59" r="4" />
      <circle className="logo-mark__node" cx="50" cy="25" r="4" />
      <circle className="logo-mark__node logo-mark__node--alt" cx="62" cy="36" r="4" />
      <circle className="logo-mark__node logo-mark__node--alt" cx="29" cy="59" r="3" />
    </svg>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-header__inner" aria-label="Primary navigation">
        <a href="#home" className="brand-lockup" onClick={closeMenu}>
          <LogoMark className="brand-lockup__mark" />
          <span className="brand-lockup__text">
            <strong>JAG Signalworks</strong>
            <span>Logic + wire portfolio</span>
          </span>
        </a>

        <div className="site-header__links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="site-header__link">
              {item.label}
            </a>
          ))}
        </div>

        <a href={`mailto:${contactEmail}`} className="site-header__action">
          <Mail aria-hidden="true" />
          Talk
        </a>

        <button
          type="button"
          className="menu-button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="mobile-menu">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-menu__link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a href={`mailto:${contactEmail}`} className="mobile-menu__link mobile-menu__link--accent" onClick={closeMenu}>
            Email John
          </a>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function SignalBoard() {
  return (
    <div className="signal-board" aria-label="John Adrian Gozun operating snapshot">
      <div className="signal-board__topline">
        <span>bench / dashboard / field</span>
        <strong>JAG-1630</strong>
      </div>
      <svg className="signal-board__map" viewBox="0 0 640 300" aria-hidden="true">
        <path d="M66 76H212c49 0 75 27 75 75v32c0 49 26 73 78 73h207" />
        <path d="M66 221h101c39 0 60-20 60-58V86c0-38 22-57 65-57h147c42 0 64 20 64 60v95" />
        <g>
          <circle cx="66" cy="76" r="18" />
          <circle cx="227" cy="221" r="18" />
          <circle cx="287" cy="151" r="18" />
          <circle cx="503" cy="184" r="18" />
          <circle cx="572" cy="256" r="18" />
        </g>
      </svg>
      <div className="signal-board__labels">
        <span>Arduino</span>
        <span>D365</span>
        <span>Repair</span>
        <span>Mentoring</span>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="home-title">
      <figure className="hero-portrait">
        <img
          src={photos.hero.src}
          alt={photos.hero.alt}
          width="953"
          height="960"
          decoding="async"
          fetchPriority="high"
        />
        <figcaption>
          <span>{photos.hero.label}</span>
          {photos.hero.title}
        </figcaption>
      </figure>

      <div className="hero-copy">
        <p className="eyebrow">Computer Engineering / Systems Builder</p>
        <h1 id="home-title">John Adrian Gozun turns messy tech problems into working systems.</h1>
        <p>
          A hands-on builder from Bocaue working across Microsoft Dynamics 365, Power Platform,
          Arduino systems, computer repair, robotics, student mentoring, and practical operations.
        </p>
        <div className="hero-actions" aria-label="Primary actions">
          <a href="#experience" className="button button--primary">
            View work log
            <ArrowRight aria-hidden="true" />
          </a>
          <a href="#contact" className="button">
            Start a conversation
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>

      <SignalBoard />

      <div className="identity-strip" aria-label="Identity facts">
        {identityFacts.map((fact) => {
          const Icon = fact.icon;
          return (
            <article key={fact.label} className="identity-fact">
              <Icon aria-hidden="true" />
              <div>
                <span>{fact.label}</span>
                <strong>{fact.value}</strong>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Modes() {
  return (
    <section id="modes" className="section section--split" aria-labelledby="modes-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Operating modes"
          title="Four ways John usually becomes useful fast."
          text="The personality from the resume is not one narrow lane. It is the useful overlap between patient troubleshooting, pressure, teaching, and getting real equipment to cooperate."
        />

        <div className="mode-grid">
          {operatingModes.map((mode, index) => {
            const Icon = mode.icon;
            return (
              <article key={mode.title} className="mode-card">
                <div className="mode-card__index">0{index + 1}</div>
                <Icon aria-hidden="true" />
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <ul aria-label={`${mode.title} strengths`}>
                  {mode.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <div className="proof-strip" aria-label="Portfolio proof points">
      {proofPoints.map((point) => (
        <div key={point.label} className="proof-strip__item">
          <strong>{point.value}</strong>
          <span>{point.label}</span>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="section__inner">
        <div className="section-grid">
          <SectionHeading
            eyebrow="Work log"
            title="A path through dashboards, robots, labs, and real operations."
            text="The experience is intentionally varied: each stop adds another kind of judgment, from business systems to wiring benches to logistics timing."
          />
          <ProofStrip />
        </div>

        <div className="timeline">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <article key={`${item.role}-${item.period}`} className="timeline-entry">
                <time>{item.period}</time>
                <div className="timeline-entry__body">
                  <div className="timeline-entry__heading">
                    <Icon aria-hidden="true" />
                    <div>
                      <h3>{item.role}</h3>
                      <p>{item.company}</p>
                    </div>
                  </div>
                  <p>{item.details}</p>
                  <ul className="tag-list" aria-label={`${item.role} tags`}>
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function VisualStories() {
  return (
    <section className="section section--gallery" aria-labelledby="gallery-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Build language"
          title="A site that feels closer to a workbench than a template."
          text="These visual lanes mirror the work: embedded builds, physical troubleshooting, and systems/process improvement."
        />

        <div className="story-grid">
          {visualStories.map((story) => (
            <article key={story.title} className="story-card">
              <img src={story.src} alt={story.alt} width="900" height="640" loading="lazy" />
              <div className="story-card__body">
                <span>{story.kicker}</span>
                <h3>{story.title}</h3>
                <p>{story.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section section--switchboard" aria-labelledby="skills-title">
      <div className="section__inner">
        <SectionHeading
          eyebrow="Capability switchboard"
          title="Tools arranged by the kind of problem they solve."
          text="The skill set is split between systems, electronics, repair, and people work because John's best value is often at the crossing point."
        />

        <div className="skill-grid">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="skill-card">
                <div className="skill-card__head">
                  <Icon aria-hidden="true" />
                  <div>
                    <span>{group.kicker}</span>
                    <h3>{group.title}</h3>
                  </div>
                </div>
                <ul>
                  {group.items.map((skill) => (
                    <li key={skill}>
                      <ArrowDownRight aria-hidden="true" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="education-band" aria-label="Education and training">
          {education.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="education-item">
                <Icon aria-hidden="true" />
                <div>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
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
    <footer id="contact" className="site-footer" aria-labelledby="contact-title">
      <div className="site-footer__inner">
        <div className="footer-brand">
          <LogoMark className="footer-brand__mark" />
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title">Ready for systems work that needs both logic and hands.</h2>
          <p>
            Open to roles and projects involving support, data systems, Power Platform, electronics,
            troubleshooting, and practical team execution.
          </p>
          <div className="footer-actions">
            <a href={`mailto:${contactEmail}`} className="button button--primary">
              Email John
              <Mail aria-hidden="true" />
            </a>
            <a href="#home" className="button button--ghost">
              Back to top
              <ChevronUp aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="contact-panel" aria-label="Contact links">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="contact-link"
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noreferrer' : undefined}
              >
                <Icon aria-hidden="true" />
                <span>{link.label}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            );
          })}
          <div className="language-note">Languages: English and Filipino</div>
        </div>

        <div className="footer-meta">
          <span>JAG Signalworks / John Adrian Gozun / 2026</span>
          <a href="#home">
            Return
            <ChevronUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Modes />
        <Experience />
        <VisualStories />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}
