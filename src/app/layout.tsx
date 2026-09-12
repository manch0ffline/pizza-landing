import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin", "latin-ext", "cyrillic"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PAZZO — wood-fired Neapolitan pizza",
  description:
    "PAZZO pizzeria: 48-hour dough, 450°C wood-fired oven, delivery in ~25 minutes. Menu, deals, and order online.",
  keywords: ["pizza", "pizzeria", "PAZZO", "Neapolitan", "wood-fired", "delivery"],
  openGraph: {
    title: "PAZZO — wood-fired Neapolitan pizza",
    description:
      "48-hour dough, a 450°C wood-fired oven, and ingredients from Italy. Order in ~25 minutes.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${nunito.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full w-full max-w-full flex-col overflow-x-clip bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
