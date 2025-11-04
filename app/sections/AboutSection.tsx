import React from "react";
import { useTranslation } from "react-i18next";
import AnimatedRibbons from "~/components/AnimatedRibbons";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      id="about" 
      className="relative min-h-screen bg-stone-50 flex items-center justify-center"
    >
      {/* Static Ribbons that span from here to end */}
      <AnimatedRibbons className="z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-light tracking-wide text-stone-800 mb-8">
          {t("about.title")}
        </h2>
        <p className="text-lg text-stone-600 font-sans font-light leading-relaxed">
          {t("about.description")}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
