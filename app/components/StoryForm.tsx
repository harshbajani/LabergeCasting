import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Send } from "lucide-react";
import MagneticButton from "./MagneticButton";
import PhoneInput from "./PhoneInput";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  age: string;
  location: string;
  story: string;
  experience: string;
  availability: string;
  language: string;
}

const StoryForm: React.FC = () => {
  const { t } = useTranslation();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    age: "",
    location: "",
    story: "",
    experience: "",
    availability: "",
    language: "",
  });

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    gsap.fromTo(
      form,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: form,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === form) trigger.kill();
      });
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCountryCodeChange = (dialCode: string) => {
    setFormData((prev) => ({
      ...prev,
      countryCode: dialCode,
    }));
  };

  const handlePhoneNumberChange = (phone: string) => {
    setFormData((prev) => ({
      ...prev,
      phone: phone,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="relative">
      {/* Spotlight effect */}
      <div className="absolute inset-0 bg-linear-to-br from-sky/5 via-orchid/5 to-banane/5 rounded-3xl blur-xl" />
      
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-stone-200/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.name")} *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
              placeholder={t("tellYourStory.form.placeholders.name")}
            />
          </div>

          {/* Email */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.email")} *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
              placeholder={t("tellYourStory.form.placeholders.email")}
            />
          </div>

          {/* Phone */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.phone")}
            </label>
            <PhoneInput
              countryCode={formData.countryCode}
              phoneNumber={formData.phone}
              onCountryCodeChange={handleCountryCodeChange}
              onPhoneNumberChange={handlePhoneNumberChange}
              placeholder={t("tellYourStory.form.placeholders.phone")}
            />
          </div>

          {/* Age */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.age")}
            </label>
            <select
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
            >
              <option value="">{t("tellYourStory.form.ageRanges.select")}</option>
              <option value="18-25">{t("tellYourStory.form.ageRanges.18-25")}</option>
              <option value="26-35">{t("tellYourStory.form.ageRanges.26-35")}</option>
              <option value="36-45">{t("tellYourStory.form.ageRanges.36-45")}</option>
              <option value="46-55">{t("tellYourStory.form.ageRanges.46-55")}</option>
              <option value="56-65">{t("tellYourStory.form.ageRanges.56-65")}</option>
              <option value="65+">{t("tellYourStory.form.ageRanges.65+")}</option>
            </select>
          </div>

          {/* Location */}
          <div className="group md:col-span-2">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.location")}
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
              placeholder={t("tellYourStory.form.placeholders.location")}
            />
          </div>

          {/* Story */}
          <div className="group md:col-span-2">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.story")} *
            </label>
            <textarea
              name="story"
              value={formData.story}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80 resize-none"
              placeholder={t("tellYourStory.form.placeholders.story")}
            />
          </div>

          {/* Experience */}
          <div className="group md:col-span-2">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.experience")}
            </label>
            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80 resize-none"
              placeholder={t("tellYourStory.form.placeholders.experience")}
            />
          </div>

          {/* Availability */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.availability")}
            </label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
              placeholder={t("tellYourStory.form.placeholders.availability")}
            />
          </div>

          {/* Language Preference */}
          <div className="group">
            <label className="block text-sm font-medium text-stone-700 mb-2 group-focus-within:text-royal-blue transition-colors">
              {t("tellYourStory.form.language")} *
            </label>
            <select
              name="language"
              value={formData.language}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-royal-blue focus:ring-2 focus:ring-royal-blue/20 transition-all duration-300 bg-white/80"
            >
              <option value="">{t("tellYourStory.form.languages.select")}</option>
              <option value="english">{t("tellYourStory.form.languages.english")}</option>
              <option value="french">{t("tellYourStory.form.languages.french")}</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <MagneticButton
            type="submit"
            className="px-12 py-4 text-lg font-medium"
          >
            <Send size={20} />
            {t("tellYourStory.form.submit")}
          </MagneticButton>
        </div>
      </form>
    </div>
  );
};

export default StoryForm;
