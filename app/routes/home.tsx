import type { Route } from "./+types/home";
import HeroSection from "../sections/HeroSection";
import VideoSection from "../sections/VideoSection";
import Navbar from "../components/Navbar";
import ScrollSmoothProvider from "~/components/ScrollSmoothProvider";
import OurApproachSection from "~/sections/OurApproach";
import RealStoriesSection from "~/sections/RealStories";
import TellYourStorySection from "~/sections/TellYourStory";

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
      <Navbar />
      <ScrollSmoothProvider>
        <HeroSection />
        <OurApproachSection />
        <VideoSection />
        <RealStoriesSection />
        <TellYourStorySection />
      </ScrollSmoothProvider>
    </main>
  );
}
