import type { ReactNode } from "react";
import { CalendarDays, GraduationCap, MapPin, Table2 } from "lucide-react";
import { Footer, SiteHeader } from "@/components/Portfolio";

function AboutFrame({ children }: { children: ReactNode }) {
  return (
    <main id="top" className="page-frame relative flex min-h-screen flex-col overflow-x-clip">
      <div className="page-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="ambient ambient-one" />
        <span className="ambient ambient-two" />
        <span className="ambient ambient-three" />
      </div>
      <SiteHeader active="About" />
      {children}
      <Footer />
    </main>
  );
}

export default function About() {
  return (
    <AboutFrame>
      <section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40">
        <div className="grid gap-12 lg:grid-cols-[.68fr_1.32fr]">
          <div>
            <div className="section-title-row"><span /> <p>About Me</p></div>
            <h1 className="section-heading mt-4">One foundation.<br />Zero boundaries.</h1>
            <p className="page-lead mt-6">A foundation built on science, expanding into healthcare, data and digital craft.</p>
          </div>
          <div className="about-copy">
            <p>I&apos;m a 300-level B.Sc. Biochemistry student at Babcock University, Nigeria, with an expected graduation year of 2028. I&apos;m passionate about the intersection of science, healthcare and technology, and I enjoy working across disciplines.</p>
            <p>Alongside my academic path toward medicine, I&apos;m building skills in data analytics, web development and graphic design. The aim is simple: understand problems better, communicate clearly, and become valuable in more than one way.</p>
          </div>
        </div>
        <div className="about-facts mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="fact-card"><GraduationCap size={19} /><span>Education</span><strong>B.Sc. Biochemistry</strong></div>
          <div className="fact-card"><Table2 size={19} /><span>Level</span><strong>300 Level</strong></div>
          <div className="fact-card"><CalendarDays size={19} /><span>Graduation</span><strong>2028</strong></div>
          <div className="fact-card"><MapPin size={19} /><span>Location</span><strong>Nigeria</strong></div>
        </div>
      </section>
    </AboutFrame>
  );
}
