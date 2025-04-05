import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "FitCheckAI | Ideal Weight Calculator",
  description: "Calculate your ideal weight based on Broca's formula and BMI",
  keywords: [
    "طراحی سایت",
    "بهینه سازی سایت",
    "توسعه نرم افزار",
    "SEO",
    "DevOps",
    "Programing",
    "برنامه نویسی",
    "web design",
    "website optimization",
    "software development",
    "SEO",
    "DevOps",
    "Programing",
    "برنامه نویسی",
  ],
  authors: [{ name: "Arian", url: "https://s2dio.ir/resume/" }],
  openGraph: {
    title: "FitCheckAI | Ideal Weight Calculator",
    description: "Calculate your ideal weight based on Broca's formula and BMI",
    // url: config.site.url,
    siteName: "FitCheckAI | Ideal Weight Calculator",
    // images: config.seo.openGraph.images,
    // locale: config.site.defaultLocale,
  },
  twitter: {
    card: "summary_large_image",
    title: "FitCheckAI | Ideal Weight Calculator",
    description: "Calculate your ideal weight based on Broca's formula and BMI",
    // images: `${config.site.url}/og-image.jpg`,
    // creator: config.seo.twitter.handle,
  },
  robots: "index, follow",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="Inter scroll-smooth">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
