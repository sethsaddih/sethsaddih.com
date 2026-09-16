import type { ReactNode } from "react";
import { Award, BriefcaseBusiness, CalendarDays, Database, GraduationCap, Table2 } from "lucide-react";
import { Footer, SiteHeader } from "./Portfolio";

function ExperienceFrame({ children }: { children: ReactNode }) {
  return (
    <main id="top" className="page-frame relative flex min-h-screen flex-col overflow-x-clip">
      <div className="page-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="ambient ambient-one" />
        <span className="ambient ambient-two" />
        <span className="ambient ambient-three" />
      </div>
      <SiteHeader active="Experience" />
      {children}
      <Footer />
    </main>
  );
}

export default function ExperiencePage() {
  const learningTracks = ["Data Analytics", "Graphic Design", "Web Development"];

  return (
    <ExperienceFrame>
      <section className="mx-auto max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40">
        <div className="section-title-row"><span /> <p>Experience &amp; Achievements</p></div>
        <h1 className="section-heading mt-4">Learning through doing.</h1>
        <div className="mt-10 grid gap-12 lg:grid-cols-2">
          <div>
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-icon"><GraduationCap size={17}/></div><div><strong>Babcock University</strong><span>Student</span><small>2024 — Present</small></div></div>
              <div className="timeline-item"><div className="timeline-icon"><BriefcaseBusiness size={17}/></div><div><strong>SIWES</strong><span>Laboratory / Clinical Support (Upcoming)</span><small>2026</small></div></div>
              <div className="timeline-item"><div className="timeline-icon"><Database size={17}/></div><div><strong>Academic Projects</strong><span>Research, data analysis, design &amp; development</span><small>2025 — Present</small></div></div>
            </div>
          </div>
          <div>
            <div className="section-title-row"><span /> <p>Learning Tracks</p></div>
            <p className="page-lead mt-4 max-w-xl">Current areas of study and skill development alongside my academic work.</p>
            <div className="course-list mt-7">
              {learningTracks.map((track) => (
                <div key={track} className="course-item">
                  <div className="course-icon"><Award size={17}/></div>
                  <div><strong>{track}</strong><span>Currently learning</span></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="education-card mt-12">
          <div className="university-mark">BU</div>
          <div>
            <h2>Babcock University</h2>
            <p>B.Sc. Biochemistry</p>
            <div className="education-meta-row"><span><Table2 size={15} /> 300 Level</span><span><CalendarDays size={15} /> Expected Graduation: 2028</span></div>
          </div>
        </div>
      </section>
    </ExperienceFrame>
  );
}
