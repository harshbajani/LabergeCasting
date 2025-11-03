import type { Route } from "./+types/home";
import HeroSection from "../sections/HeroSection";
import Navbar from "../components/Navbar";
import {
  AboutSection,
  ServicesSection,
  PortfolioSection,
  TalentSection,
  ContactSection,
} from "../sections/PlaceholderSections";
import ScrollSmoothProvider from "~/components/ScrollSmoothProvider";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Laberge Casting - Elevating Talent Through Refined Artistry" },
    {
      name: "description",
      content:
        "Discover excellence in casting with Laberge Casting. We elevate talent through refined artistry and sophisticated casting solutions.",
    },
    {
      name: "keywords",
      content: "casting, talent, artistry, refined, elegant, professional",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollSmoothProvider>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <TalentSection />
        <ContactSection />
      </ScrollSmoothProvider>
    </main>
  );
}
