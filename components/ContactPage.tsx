import type { ReactNode } from "react";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Footer, SiteHeader, socialLinks } from "./Portfolio";

function ContactFrame({ children }: { children: ReactNode }) {
  return (
    <main id="top" className="page-frame relative flex min-h-screen flex-col overflow-x-clip">
      <div className="page-glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <span className="ambient ambient-one" />
        <span className="ambient ambient-two" />
        <span className="ambient ambient-three" />
      </div>
      <SiteHeader active="Contact" />
      {children}
      <Footer />
    </main>
  );
}

export default function ContactPage() {
  return (
    <ContactFrame>
      <section className="contact-page-shell mx-auto max-w-[1440px] px-4 pb-16 pt-28 sm:px-6 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className="grid w-full gap-10 lg:grid-cols-[.88fr_1.12fr] lg:items-start">
          <div className="contact-intro-panel">
            <div className="section-title-row"><span /> <p>Get in Touch</p></div>
            <h1 className="section-heading mt-4">Let&apos;s start a conversation.</h1>
            <p className="page-lead mt-6 max-w-xl">
              For collaborations, project conversations, internships or a simple hello, reach out through any of the channels below.
            </p>
            <a className="primary-cta mt-8 inline-flex" href="mailto:saddihseth@gmail.com">
              <Mail size={19} /> Email me <ArrowRight size={17} />
            </a>
            <div className="contact-note-large mt-10">
              <MapPin size={22} />
              <div><span>Based in</span><strong>Nigeria</strong></div>
            </div>
          </div>

          <div className="contact-panel">
            <div>
              <p className="contact-panel-label">Find me online</p>
              <div className="social-list">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                    <Icon size={30} />
                    <span>{label}</span>
                    <ArrowRight size={19} />
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-panel-footer">
              <span>Available for</span>
              <strong>Collaborations · Projects · Opportunities</strong>
            </div>
          </div>
        </div>
      </section>
    </ContactFrame>
  );
}
