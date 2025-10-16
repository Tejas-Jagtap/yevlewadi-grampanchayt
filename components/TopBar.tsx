"use client";

import React, { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaGlobe } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import { useRouter } from "next/navigation";
import Image from "next/image";

const TopBar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    const newLang = language === "mr" ? "en" : "mr";
    setLanguage(newLang);
    localStorage.setItem("language", newLang);
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: newLang })
    );
  };

  const content = {
    phone: language === "mr" ? "+९१-९९२१४१७००९" : "+91-9921417009",
    email: "yewalewadi@gmail.com",
    langButton: language === "mr" ? "English" : "मराठी",
  };

  if (!mounted) return null;

  return (
    <div className="bg-[#0A1931] py-2 sm:py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 mb-2">
          {/* Government Name */}
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
            {language === "mr" && (
              <div className="flex items-center text-navy-darkest font-semibold">
                <button
                  onClick={() =>
                    window.open("https://maharashtra.gov.in/", "_blank")
                  }
                  className="text-white text-sm sm:text-base marathi hover:underline transition-all cursor-pointer"
                >
                  <Image
                    src={"/images/Maharatra.jpeg"}
                    alt="Maharashtra Logo"
                    width={95}
                    height={100}
                  />
                </button>
              </div>
            )}
            {language === "en" && (
              <div className="flex items-center text-navy-darkest font-semibold">
                <button
                  onClick={() =>
                    window.open("https://maharashtra.gov.in/", "_blank")
                  }
                  className="text-white text-sm sm:text-base transition-all cursor-pointer"
                >
                  {"Government of Maharashtra"}
                </button>
              </div>
            )}
          </div>

          {/* Contact Info and Language Toggle */}
          <div className="w-full sm:w-auto flex flex-wrap text-xl items-center justify-center sm:justify-end gap-3 sm:gap-4 mt-2 sm:mt-0">
            <div className="relative group">
              <a
                href={`tel:${content.phone}`}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors p-2"
              >
                <FaPhone className="h-4 w-4 rotate-90" />
                <span className="hidden min-[690px]:inline">
                  {content.phone}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white text-[#0A1931] text-sm rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {content.phone}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </a>
            </div>
            <div className="relative group">
              <a
                href={`mailto:${content.email}`}
                className="flex items-center space-x-2 text-white hover:text-gray-200 transition-colors p-2"
              >
                <FaEnvelope className="h-4 w-4" />
                <span className="hidden min-[690px]:inline truncate">
                  {content.email}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white text-[#0A1931] text-sm rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {content.email}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </a>
            </div>
            <div className="relative group">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 bg-navy-deep text-white px-3 py-1.5 rounded hover:bg-opacity-90 transition-all font-semibold shadow-md"
              >
                <FaGlobe className="h-4 w-4" />
                <span className="hidden min-[690px]:inline">
                  {content.langButton}
                </span>
                {/* Tooltip */}
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-white text-[#0A1931] text-sm rounded shadow-lg whitespace-nowrap min-[690px]:hidden z-50">
                  {content.langButton}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white transform rotate-45"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
