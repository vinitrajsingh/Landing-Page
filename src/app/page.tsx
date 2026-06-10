import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/sections/hero";
import { Trust } from "@/sections/trust";
import { Services } from "@/sections/services";

// Below-the-fold sections are code-split to keep the initial bundle lean.
const Process = dynamic(() => import("@/sections/process").then((m) => m.Process));
const Showcase = dynamic(() => import("@/sections/showcase").then((m) => m.Showcase));
const CaseStudies = dynamic(() =>
  import("@/sections/case-studies").then((m) => m.CaseStudies)
);
const Pricing = dynamic(() => import("@/sections/pricing").then((m) => m.Pricing));
const Testimonials = dynamic(() =>
  import("@/sections/testimonials").then((m) => m.Testimonials)
);
const FAQ = dynamic(() => import("@/sections/faq").then((m) => m.FAQ));
const CTA = dynamic(() => import("@/sections/cta").then((m) => m.CTA));
const Footer = dynamic(() => import("@/sections/footer").then((m) => m.Footer));

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Showcase />
      <CaseStudies />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
