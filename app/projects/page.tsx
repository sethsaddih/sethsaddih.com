"use client";

import { useState } from "react";
import { Footer, SiteHeader } from "@/components/Portfolio";

const filters = ["All", "Web", "Data", "Design"] as const;

export default function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  return (
    <main id="top" className="page-frame relative flex min-h-screen flex-col overflow-x-clip">
      <div className="page-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="ambient ambient-one" />
        <span className="ambient ambient-two" />
        <span className="ambient ambient-three" />
      </div>

      <SiteHeader active="Projects" />

      <section className="mx-auto w-full max-w-360 px-4 pb-20 pt-32 sm:px-6 lg:pb-24 lg:pt-40">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="section-title-row"><span /> <p>Projects</p></div>
            <h1 className="section-heading mt-4">Practice, projects &amp; progress.</h1>
            <p className="page-lead mt-6 max-w-2xl">Selected work and concepts across analytics, visual design and web development.</p>
          </div>

          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={filter === item ? "filter active" : "filter"}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex min-h-[320px] items-center justify-center pt-10" aria-live="polite">
          <p className="text-center text-2xl font-medium tracking-tight text-white/70 sm:text-3xl">
            Projects coming soon
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
