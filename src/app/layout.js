import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner"

// Font customization
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

// SEO metadata customization
export const metadata = {
  title: "Micro.ai Job Portal - AI-Powered Job Matching & Recruitment",
  description:
    "Micro.ai Job Portal uses artificial intelligence to match candidates with the right job opportunities. Find your next career move with AI-driven job recommendations and job management tools.",
  keywords: "AI job portal, AI recruitment, job matching, career opportunities, AI-driven hiring, job search, recruitment automation, job recommendations",
  author: "Micro.ai Team",
  openGraph: {
    title: "Micro.ai Job Portal - AI-Powered Job Matching & Recruitment",
    description:
      "Micro.ai Job Portal uses artificial intelligence to match candidates with the right job opportunities. Find your next career move with AI-driven job recommendations and job management tools.",
    url: "https://micro.ai/job-portal", // Replace with your actual site URL
    site_name: "Micro.ai Job Portal",
    images: [
      {
        url: "https://micro.ai/images/og-job-portal-image.jpg", // Replace with a real image
        width: 1200,
        height: 630,
        alt: "Micro.ai Job Portal - AI-Powered Job Matching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@micro_ai", // Replace with your Twitter handle if available
    title: "Micro.ai Job Portal - AI-Powered Job Matching & Recruitment",
    description:
      "Micro.ai Job Portal uses artificial intelligence to match candidates with the right job opportunities. Find your next career move with AI-driven job recommendations and job management tools.",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="black"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
