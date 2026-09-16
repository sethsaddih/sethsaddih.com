import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./project-filters.css";
import "./contact-page.css";
import "./quality-overrides.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sethsaddih-com.vercel.app"),
  title: {
    default: "Seth Saddih — Biochemistry, Data, Design & Web",
    template: "%s — Seth Saddih",
  },
  description:
    "Portfolio of Seth Saddih, a B.Sc. Biochemistry undergraduate and pre-med student exploring data analytics, graphic design, and web development.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Seth Saddih — Biochemistry, Data, Design & Web",
    description:
      "Portfolio of Seth Saddih, a B.Sc. Biochemistry undergraduate and pre-med student exploring data analytics, graphic design, and web development.",
    url: "https://sethsaddih-com.vercel.app",
    siteName: "Seth Saddih",
    type: "website",
    images: [
      {
        url: "/seth-profile.png",
        width: 1200,
        height: 630,
        alt: "Seth Saddih",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seth Saddih — Biochemistry, Data, Design & Web",
    description:
      "Portfolio of Seth Saddih, a B.Sc. Biochemistry undergraduate and pre-med student exploring data analytics, graphic design, and web development.",
    images: ["/seth-profile.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
