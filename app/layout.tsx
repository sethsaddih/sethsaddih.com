import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Seth Saddih — Biochemistry, Data, Design & Web",
  description: "Portfolio of Seth Saddih, a B.Sc. Biochemistry undergraduate and aspiring doctor exploring data analytics, graphic design and web development.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
