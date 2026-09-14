import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sethsaddih.com"),
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
    url: "https://sethsaddih.com",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
