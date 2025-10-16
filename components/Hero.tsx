"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

const Hero = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const slides = [
    {
      id: 1,
      titleKey: "hero.title3",
      descriptionKey: "hero.subtitle3",
      image: "/images/gpy.jpg",
    },
    {
      id: 2,
      titleKey: "hero.title1",
      descriptionKey: "hero.subtitle1",
      image: "/images/gpy.jpg",
    },
    {
      id: 3,
      titleKey: "hero.title2",
      descriptionKey: "hero.subtitle2",
      image: "/images/gpy.jpg",
      },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[400px] md:h-[500px]  overflow-hidden">
      {/* Background Images Carousel */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={t(slide.titleKey)}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-center px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            {t(slides[currentSlide].titleKey)}
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-6 md:mb-8 px-4">
            {t(slides[currentSlide].descriptionKey)}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <Link href="/about">
              <button className="bg-[#0A1931] hover:bg-[#142b4a] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto">
                {t("intro.title")}
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white hover:bg-gray-100 text-[#0A1931] px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-colors duration-200 w-full sm:w-auto">
                {t("hero.contactUs")}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? "bg-government-orange w-8"
                : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
