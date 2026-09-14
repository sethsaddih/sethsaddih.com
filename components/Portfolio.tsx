"use client";

import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  BriefcaseBusiness,
  CalendarDays,
  Code2,
  Database,
  ExternalLink,
  FlaskConical,
  Github,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Sparkles,
  Stethoscope,
  Table2,
  Twitter,
  X,
} from "lucide-react";
import { socialLinks } from "./social-links";

export const skills = [
  { title: "Biochemistry", status: "Academic focus", description: "Lab techniques, scientific analysis, research thinking and evidence-based problem solving.", icon: FlaskConical, tone: "cyan", tags: ["B.Sc. Biochemistry", "Lab work", "Scientific thinking"] },
  { title: "Medicine", status: "Long-term path", description: "Building toward a future in medicine with a strong foundation in human biology and healthcare.", icon: Stethoscope, tone: "cyan", tags: ["Pre-med", "Human biology", "Healthcare"] },
  { title: "Data Analytics", status: "Learning", description: "Developing practical skills for turning data into useful insights, visualisations and decisions.", icon: BarChart3, tone: "blue", tags: ["Excel", "Power BI", "Tableau", "SQL", "Python", "Statistics"] },
  { title: "Graphic Design", status: "Developing", description: "Exploring visual communication through branding, posters, composition and digital image work.", icon: PenTool, tone: "violet", tags: ["Illustrator", "Canva", "Affinity", "darktable", "GIMP", "Branding"] },
  { title: "Web Development", status: "Learning", description: "Building responsive interfaces while moving from HTML/CSS and Tailwind CSS into modern React development.", icon: Code2, tone: "cyan", tags: ["HTML/CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git/GitHub"] },
];

export const work = [
  { title: "Data Analysis Dashboard", category: "Data", eyebrow: "01 · Analytics", icon: BarChart3, stack: ["Power BI", "Excel", "SQL", "Python"], text: "A dashboard concept for exploring trends, customer behaviour and performance metrics for better decisions.", visual: "dashboard" },
  { title: "HealthCare Hub", category: "Design", eyebrow: "02 · UI / UX", icon: Sparkles, stack: ["Figma", "Canva", "Illustrator"], text: "A clean healthcare interface concept focused on accessibility, clarity and easy-to-understand patient journeys.", visual: "health" },
  { title: "Personal Portfolio Website", category: "Web", eyebrow: "03 · Development", icon: Code2, stack: ["Next.js", "Tailwind CSS", "React"], text: "A responsive portfolio built to bring science, analytics, design and development into one digital identity.", visual: "portfolio" },
];

export { socialLinks };

const nav = [
  ["Home", "/"],
  ["About", "/about"],
  ["Skills", "/skills"],
  ["Projects", "/projects"],
  ["Experience", "/experience"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader({ active = "Home" }: { active?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-5">
<<<<<<< HEAD
      <div className="nav-shell mx-auto flex max-w-360 items-center justify-between rounded-[20px] px-3 py-2.5 sm:px-4">
        <a href="/" className="group flex items-center gap-3" aria-label="Seth Saddih home">
=======
      <div className="nav-shell mx-auto flex max-w-[1440px] items-center justify-between rounded-[20px] px-3 py-2.5 sm:px-4">
        <Link href="/" className="group flex items-center gap-3" aria-label="Seth Saddih home">
>>>>>>> d6624fcd9ca2a66ffe070f9621bc2c38f8019867
          <span className="brand-mark grid size-10 place-items-center rounded-xl text-sm font-semibold">SS</span>
          <span className="hidden text-sm font-semibold tracking-tight sm:block">Seth Saddih</span>
        </Link>
        <div className="hidden items-center gap-7 text-[13px] text-white/65 md:flex">
          {nav.map(([label, href]) => <a key={label} href={href} className={`nav-link ${active === label ? "active" : ""}`}>{label}</a>)}
        </div>
        <div className="hidden items-center gap-3 md:flex"><a href="/contact" className="connect-pill">Let&apos;s connect</a></div>
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          className="glass-button menu-toggle grid size-10 place-items-center rounded-xl md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="menu-icon-stack" aria-hidden="true">
            <Menu className={`menu-toggle-icon ${menuOpen ? "is-hidden" : "is-visible"}`} size={21} strokeWidth={1.9} />
            <X className={`menu-toggle-icon ${menuOpen ? "is-visible" : "is-hidden"}`} size={21} strokeWidth={1.9} />
          </span>
        </button>
      </div>
      <div
        id="mobile-navigation"
        className={`mobile-nav-wrap mx-auto mt-2 max-w-360 md:hidden ${menuOpen ? "is-open" : "is-closed"}`}
        aria-hidden={!menuOpen}
      >
        <div className="mobile-nav rounded-2xl p-2">
          {nav.map(([label, href]) => (
            <a
              onClick={() => setMenuOpen(false)}
              key={label}
              href={href}
              tabIndex={menuOpen ? 0 : -1}
              className={active === label ? "bg-white/5 text-white" : ""}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return <footer className="footer-shell mt-auto px-4 py-8 sm:px-6"><div className="mx-auto flex max-w-360 flex-col gap-4 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between"><strong className="text-sm text-white/70">Seth Saddih</strong><div>Science · Data · Design · Code · Impact</div><div>© 2026 Seth Saddih. All rights reserved.</div></div></footer>;
}

function PageFrame({ children, active }: { children: ReactNode; active: string }) {
  return <main id="top" className="page-frame relative flex min-h-screen flex-col overflow-x-clip"><div className="page-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true"><span className="ambient ambient-one" /><span className="ambient ambient-two" /><span className="ambient ambient-three" /></div><SiteHeader active={active} />{children}<Footer /></main>;
}

export function HomePage() {
  return <PageFrame active="Home"><section className="hero-section mx-auto grid max-w-360 gap-10 px-4 pb-20 pt-28 sm:px-6 sm:pt-32 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-8 lg:pt-40 lg:pb-28"><div className="max-w-165"><div className="hero-kicker"><span className="kicker-dot" />Biochemistry undergraduate · building across disciplines</div><p className="hero-intro">Hello, I&apos;m</p><h1 className="hero-title">Seth <span>Saddih</span></h1><p className="hero-subtitle">Biochemistry Undergraduate &amp; Pre-Med Student · Data Analyst · Web Developer · Graphic Designer.</p><p className="hero-copy">I&apos;m building a broad technical toolkit around a long-term goal in medicine — combining science, data, design and technology to keep learning and create useful things.</p><div className="mt-8 flex flex-wrap gap-3"><a href="/projects" className="primary-cta group">See my work <ArrowRight className="transition-transform group-hover:translate-x-1" size={17} /></a><a href="/contact" className="secondary-cta">Let&apos;s connect</a></div><div className="hero-meta mt-9 flex flex-wrap gap-2.5"><span>Babcock University</span><span>300 Level</span><span>Nigeria</span></div></div><HeroPhoto /></section></PageFrame>;
}

export function HeroPhoto() {
  return <div className="hero-photo-wrap"><div className="hero-photo-glow" aria-hidden="true" /><div className="hero-photo-stage"><div className="photo-label">SETH SADDIH / PROFILE</div><img src="/seth-profile.png" alt="Seth Saddih" className="hero-photo" /><div className="photo-fade" /><div className="photo-footer"><div><span>BASED IN</span><strong>Nigeria</strong></div><div className="hidden text-right sm:block"><span>CURRENT CHAPTER</span><strong>Study · Build · Refine</strong></div></div></div></div>;
}

export function AboutPage() {
  return <PageFrame active="About"><section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40"><div className="grid gap-12 lg:grid-cols-[.68fr_1.32fr]"><div><div className="section-title-row"><span /> <p>About Me</p></div><h1 className="section-heading mt-4">One foundation.<br />Several directions.</h1><p className="page-lead mt-6">A science-first foundation with growing interests in healthcare, data and digital craft.</p></div><div className="about-copy"><p>I&apos;m a 300-level B.Sc. Biochemistry student at Babcock University, Nigeria, with an expected graduation year of 2028. I&apos;m passionate about the intersection of science, healthcare and technology, and I enjoy working across disciplines rather than staying inside one box.</p><p>Alongside my academic path toward medicine, I&apos;m building skills in data analytics, web development and graphic design. The aim is simple: understand problems better, communicate clearly, and become useful in more than one way.</p></div></div><div className="about-facts mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><div className="fact-card"><GraduationCap size={19} /><span>Education</span><strong>B.Sc. Biochemistry</strong></div><div className="fact-card"><Table2 size={19} /><span>Level</span><strong>300 Level</strong></div><div className="fact-card"><CalendarDays size={19} /><span>Graduation</span><strong>2028</strong></div><div className="fact-card"><MapPin size={19} /><span>Location</span><strong>Nigeria</strong></div></div></section></PageFrame>;
}

export function SkillsPage() {
  return <PageFrame active="Skills"><section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40"><div className="flex items-end justify-between gap-5"><div><div className="section-title-row"><span /> <p>Skills &amp; Expertise</p></div><h1 className="section-heading mt-4">What I&apos;m building.</h1><p className="page-lead mt-6 max-w-2xl">A multidisciplinary toolkit spanning biochemistry, healthcare, analytics, visual communication and the web.</p></div><span className="hidden text-xs tracking-[.2em] text-white/30 sm:block">01 — 05</span></div><div className="skills-grid mt-10">{skills.map((skill) => { const Icon = skill.icon; return <article key={skill.title} className="skill-card group"><div className={`skill-icon ${skill.tone}`}><Icon size={25} strokeWidth={1.8} /></div><div className="skill-status">{skill.status}</div><h2>{skill.title}</h2><p>{skill.description}</p><div className="skill-tags">{skill.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>; })}</div></section></PageFrame>;
}

function ProjectVisual({ item }: { item: typeof work[number] }) { const Icon = item.icon; return <div className={`project-visual ${item.visual}`}><div className="project-visual-top"><div className="project-number"><Icon size={17} /></div><span>{item.eyebrow}</span></div><div className="visual-surface">{item.visual === "dashboard" && <><div className="mini-bars"><i/><i/><i/><i/><i/><i/></div><div className="mini-chart"><span/><span/><span/><span/><span/></div><div className="mini-cards"><b/><b/><b/></div></>}{item.visual === "health" && <><div className="ui-window"><div/><div/><div/><div/><div/><div/></div><div className="ui-window second"><div/><div/><div/><div/></div></>}{item.visual === "portfolio" && <div className="portfolio-window"><div className="pw-title">Seth Saddih</div><div className="pw-line long"/><div className="pw-line short"/><div className="pw-block"/></div>}</div></div>; }

export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const visibleWork = useMemo(() => work.filter((item) => filter === "All" || item.category === filter), [filter]);
  return <PageFrame active="Projects"><section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><div className="section-title-row"><span /> <p>Projects</p></div><h1 className="section-heading mt-4">Practice, projects &amp; progress.</h1><p className="page-lead mt-6 max-w-2xl">Selected work and concepts across analytics, visual design and web development.</p></div><div className="filter-row">{["All", "Web", "Data", "Design"].map((item) => <button key={item} className={filter === item ? "filter active" : "filter"} onClick={() => setFilter(item)}>{item}</button>)}</div></div><div className="projects-grid mt-10">{visibleWork.map((item) => <article key={item.title} className="project-card group"><ProjectVisual item={item} /><div className="project-body"><div className="flex items-start justify-between gap-4"><h2>{item.title}</h2><ExternalLink size={16} className="text-white/30 transition group-hover:text-cyan-200" /></div><p>{item.text}</p><div className="project-tags">{item.stack.map((tag) => <span key={tag}>{tag}</span>)}</div><a href="/contact" className="project-link">View project <ArrowRight size={15} /></a></div></article>)}</div></section></PageFrame>;
}

export function ExperiencePage() {
  return <PageFrame active="Experience"><section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40"><div className="section-title-row"><span /> <p>Experience &amp; Achievements</p></div><h1 className="section-heading mt-4">Learning through doing.</h1><div className="mt-10 grid gap-12 lg:grid-cols-2"><div><div className="timeline"><div className="timeline-item"><div className="timeline-icon"><GraduationCap size={17}/></div><div><strong>Babcock University</strong><span>Student</span><small>2024 — Present</small></div></div><div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><strong>SIWES</strong><span>Laboratory / Clinical Support (Upcoming)</span><small>2026</small></div></div><div className="timeline-item"><div className="timeline-icon"><Database size={17}/></div><div><strong>Academic Projects</strong><span>Research, data analysis, design &amp; development</span><small>2025 — Present</small></div></div></div></div><div><div className="section-title-row"><span /> <p>Certifications &amp; Courses</p></div><div className="course-list mt-7">{["Data Analytics (in progress)", "Python for Data Analysis (in progress)", "Graphic Design (in progress)", "Web Development (in progress)"].map((course) => <div key={course} className="course-item"><div className="course-icon"><Award size={17}/></div><div><strong>{course}</strong><span>Learning track</span></div></div>)}</div></div></div><div className="education-card mt-12"><div className="university-mark">BU</div><div><h2>Babcock University</h2><p>B.Sc. Biochemistry</p><div className="education-meta-row"><span><Table2 size={15} /> 300 Level</span><span><CalendarDays size={15} /> Expected Graduation: 2028</span></div></div></div></section></PageFrame>;
}

export function ContactPage() {
  return <PageFrame active="Contact"><section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40"><div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><div className="section-title-row"><span /> <p>Get in Touch</p></div><h1 className="section-heading mt-4">Let&apos;s start a conversation.</h1><p className="page-lead mt-6">For collaborations, project conversations, internships or a simple hello, reach out through any of the channels below.</p><a className="primary-cta inline-flex mt-8" href="mailto:saddihseth@gmail.com">Email me <ArrowRight size={17}/></a></div><div className="contact-panel"><div className="contact-list"><a href="mailto:saddihseth@gmail.com"><Mail size={16}/> saddihseth@gmail.com</a>{socialLinks.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16}/> {label === "GitHub" ? "github.com/sethsaddih" : label === "LinkedIn" ? "linkedin.com/in/seth-saddih" : label === "X" ? "x.com/sethsaddih" : "instagram.com/seth_saddih"}</a>)}</div><div className="contact-note mt-10"><MapPin size={18}/><div><span>Based in</span><strong>Nigeria</strong></div></div></div></div></section></PageFrame>;
}
