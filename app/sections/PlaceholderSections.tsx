import React from "react";
import { useTranslation } from "react-i18next";

export function AboutSection(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("about.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("about.description")}
        </p>
      </div>
    </section>
  );
}

export function ServicesSection(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="services" className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("services.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("services.description")}
        </p>
      </div>
    </section>
  );
}

export function PortfolioSection(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="portfolio" className="min-h-screen bg-stone-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("portfolio.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("portfolio.description")}
        </p>
      </div>
    </section>
  );
}

export function TalentSection(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="talent" className="min-h-screen bg-stone-50 flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("talent.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("talent.description")}
        </p>
      </div>
    </section>
  );
}

export function ContactSection(): React.JSX.Element {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("contact.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("contact.description")}
        </p>
      </div>
    </section>
  );
}
