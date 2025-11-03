import React from "react";

export function AboutSection(): React.JSX.Element {
  return (
    <section id="about" className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          About Laberge Casting
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          Excellence in casting through refined artistry and sophisticated talent management.
        </p>
      </div>
    </section>
  );
}

export function ServicesSection(): React.JSX.Element {
  return (
    <section id="services" className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          Our Services
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          Comprehensive casting solutions tailored to your creative vision.
        </p>
      </div>
    </section>
  );
}

export function PortfolioSection(): React.JSX.Element {
  return (
    <section id="portfolio" className="min-h-screen bg-stone-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          Portfolio
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          Showcasing our finest work and successful casting projects.
        </p>
      </div>
    </section>
  );
}

export function TalentSection(): React.JSX.Element {
  return (
    <section id="talent" className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          Talent
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          Discover our exceptional roster of talented individuals.
        </p>
      </div>
    </section>
  );
}

export function ContactSection(): React.JSX.Element {
  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          Get in touch to discuss your casting needs and creative projects.
        </p>
      </div>
    </section>
  );
}
