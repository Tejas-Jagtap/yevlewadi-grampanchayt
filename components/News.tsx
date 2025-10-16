"use client";

import React from "react";
import Link from "next/link";
import { FaNewspaper, FaCalendar } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const News = () => {
  const { t } = useLanguage();

  const newsItems = [
    {
      id: 1,
      titleKey: "news.item1.title",
      descriptionKey: "news.item1.description",
      date: "10 मार्च, 2025 / March 10, 2025",
      categoryKey: "news.item1.category",
    },
    {
      id: 2,
      titleKey: "news.item2.title",
      descriptionKey: "news.item2.description",
      date: "8 मार्च, 2025 / March 8, 2025",
      categoryKey: "news.item2.category",
    },
    {
      id: 3,
      titleKey: "news.item3.title",
      descriptionKey: "news.item3.description",
      date: "5 मार्च, 2025 / March 5, 2025",
      categoryKey: "news.item3.category",
    },
    {
      id: 4,
      titleKey: "news.item4.title",
      descriptionKey: "news.item4.description",
      date: "1 मार्च, 2025 / March 1, 2025",
      categoryKey: "news.item4.category",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
          <FaNewspaper className="text-2xl mr-3" />
          <h2 className="text-2xl font-bold">{t("news.title")}</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {newsItems.map((news) => (
              <div
                key={news.id}
                className="border-l-4 border-government-orange pl-4 py-3 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-government-blue mb-1">
                      {t(news.titleKey)}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {t(news.descriptionKey)}
                    </p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <FaCalendar className="mr-1" />
                        {news.date}
                      </span>
                      <span className="bg-government-orange bg-opacity-20 text-government-orange px-2 py-1 rounded">
                        {t(news.categoryKey)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/news">
              <button className="text-government-blue hover:text-government-orange font-semibold transition-colors duration-200">
                {t("news.viewAll")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
