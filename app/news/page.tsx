"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaNewspaper,
  FaCalendarAlt,
  FaUser,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

export default function NewsPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", nameKey: "news.allNews" },
    { id: "schemes", nameKey: "news.schemes" },
    { id: "events", nameKey: "news.events" },
    { id: "announcements", nameKey: "news.announcements" },
    { id: "achievements", nameKey: "news.achievements" },
  ];

  const newsItems = [
    {
      id: 1,
      category: "schemes",
      titleKey: "news.pmAwasTitle",
      summaryKey: "news.pmAwasSummary",
      date: "2025-01-05",
      author: "Admin",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      featured: true,
    },
    {
      id: 2,
      category: "events",
      titleKey: "news.republicDayTitle",
      summaryKey: "news.republicDaySummary",
      date: "2025-01-03",
      author: "Admin",
      image:
        "https://images.unsplash.com/photo-1611329532752-8f0f81e0be1a?w=800",
      featured: true,
    },
    {
      id: 3,
      category: "announcements",
      titleKey: "news.waterSupplyTitle",
      summaryKey: "news.waterSupplySummary",
      date: "2025-01-02",
      author: "Water Department",
      image: "https://images.unsplash.com/photo-1548690596-a39d5a3b6ea8?w=800",
      featured: false,
    },
    {
      id: 4,
      category: "achievements",
      titleKey: "news.swachhBharatTitle",
      summaryKey: "news.swachhBharatSummary",
      date: "2024-12-28",
      author: "Admin",
      image:
        "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800",
      featured: false,
    },
    {
      id: 5,
      category: "schemes",
      titleKey: "news.healthCampTitle",
      summaryKey: "news.healthCampSummary",
      date: "2024-12-25",
      author: "Health Department",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
      featured: false,
    },
    {
      id: 6,
      category: "events",
      titleKey: "news.farmersTrainingTitle",
      summaryKey: "news.farmersTrainingSummary",
      date: "2024-12-22",
      author: "Agriculture Department",
      image:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
      featured: false,
    },
    {
      id: 7,
      category: "announcements",
      titleKey: "news.propertyTaxTitle",
      summaryKey: "news.propertyTaxSummary",
      date: "2024-12-20",
      author: "Revenue Department",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800",
      featured: false,
    },
    {
      id: 8,
      category: "achievements",
      titleKey: "news.studentsExcelTitle",
      summaryKey: "news.studentsExcelSummary",
      date: "2024-12-18",
      author: "Education Department",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800",
      featured: false,
    },
  ];

  const filteredNews =
    selectedCategory === "all"
      ? newsItems
      : newsItems.filter((item) => item.category === selectedCategory);

  const featuredNews = newsItems.filter((item) => item.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("news.latestNews")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("news.description")}
          </p>
        </div>

        {/* Featured News */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {language === "mr" ? "मुख्य बातम्या" : "Featured News"}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {featuredNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 sm:h-64 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={t(news.titleKey)}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-government-orange text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                    {language === "mr" ? "मुख्य" : "Featured"}
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt />
                      {new Date(news.date).toLocaleDateString("en-IN")}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaUser />
                      {news.author}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-government-blue mb-2">
                    {t(news.titleKey)}
                  </h3>
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {t(news.summaryKey)}
                  </p>
                  <button className="flex items-center gap-2 text-government-orange hover:text-government-blue font-semibold transition-colors text-sm sm:text-base">
                    {t("news.readMore")}
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? "bg-[#0A1931] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {t(category.nameKey)}
              </button>
            ))}
          </div>
        </div>

        {/* All News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.map((news) => (
            <div
              key={news.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={news.image}
                  alt={t(news.titleKey)}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt />
                    {new Date(news.date).toLocaleDateString("en-IN")}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaUser />
                    {news.author}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2 line-clamp-2">
                  {t(news.titleKey)}
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3 text-xs sm:text-sm">
                  {t(news.summaryKey)}
                </p>
                <button className="flex items-center gap-2 text-government-orange hover:text-government-blue font-semibold transition-colors text-sm">
                  {t("news.readMore")}
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 bg-[#01A3D6] text-white rounded-lg p-6 sm:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <FaNewspaper className="text-5xl sm:text-6xl mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("news.subscribeNewsletter")}
            </h2>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              {t("news.newsletterDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("news.yourEmail")}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-government-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t("news.subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
