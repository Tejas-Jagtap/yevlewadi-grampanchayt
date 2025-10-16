"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="bg-white w-full py-3">
      <div className="max-w-6xl mx-auto px-2 sm:px-3 md:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 items-center gap-4 sm:gap-6">
          {/* Mobile Layout */}
          <div className="sm:hidden flex items-center gap-4 justify-between px-2">
            {/* Emblem */}
            <div className="flex-shrink-0 w-16 h-16 relative transition-all duration-300">
              <Link
                href="/"
                className="site_logo block w-full h-full relative"
                rel="home"
              >
                <Image
                  src={"/images/Emblem.png"}
                  alt={t("header.title")}
                  fill
                  priority
                  sizes="80px"
                  className="object-contain"
                />
              </Link>
            </div>

            {/* Title */}
            <div className="flex-1 text-center">
              <h2 className="text-2xl font-bold text-[#0A1931] mb-0">
                {t("header.village")}
              </h2>
              <p className="text-lg text-[#0A1931] marathi">
                {t("header.Taluka")} - {t("header.district")}
              </p>
            </div>

            {/* Government Logo */}
            <div className="flex-shrink-0 w-16 h-16 relative transition-all duration-300">
              <Image
                src={"/images/Seal_of_Maharashtra.svg.png"}
                alt={t("header.title")}
                fill
                priority
                sizes="80px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden sm:flex justify-start">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative transition-all duration-300">
              <Link
                href="/"
                className="site_logo block w-full h-full relative"
                rel="home"
              >
                <Image
                  src={"/images/Emblem.png"}
                  alt={t("header.title")}
                  fill
                  priority
                  sizes="(max-width: 768px) 112px, 128px"
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Title */}
          <div className="hidden sm:flex text-center flex-col items-center justify-center space-y-3 sm:space-y-3 col-span-1">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0A1931] transition-all duration-300 whitespace-nowrap overflow-hidden pt-4">
              {t("header.village")}
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-[#0A1931] marathi transition-all duration-300">
              {t("header.Taluka")}
              {t("header.district")}
            </p>
          </div>

          {/* Right - Government Logo (Desktop only) */}
          <div className="hidden sm:flex justify-center sm:justify-end">
            <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 relative transition-all duration-300">
              <Image
                src={"/images/Seal_of_Maharashtra.svg.png"}
                alt={t("header.title")}
                fill
                priority
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
