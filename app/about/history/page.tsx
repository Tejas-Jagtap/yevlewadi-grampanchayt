"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaHistory,
  FaLandmark,
  FaCalendarAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function HistoryPage() {
  const { t, language } = useLanguage();

  const timeline = [
    {
      year: "1850-1900",
      titleKey: "history.villageFoundation",
      descKey: "history.foundationDesc",
      color: "bg-blue-500",
    },
    {
      year: "1947",
      titleKey: "history.indianIndependence",
      descKey: "history.independenceDesc",
      color: "bg-orange-500",
    },
    {
      year: "1952",
      titleKey: "history.gramPanchayatFormation",
      descKey: "history.formationDesc",
      color: "bg-green-500",
    },
    {
      year: "1970-1980",
      titleKey: "history.greenRevolution",
      descKey: "history.greenRevDesc",
      color: "bg-yellow-500",
    },
    {
      year: "1990",
      titleKey: "history.infrastructureDev",
      descKey: "history.infraDesc",
      color: "bg-purple-500",
    },
    {
      year: "2000",
      titleKey: "history.waterSupply",
      descKey: "history.waterDesc",
      color: "bg-cyan-500",
    },
    {
      year: "2010",
      titleKey: "history.digitalRevolution",
      descKey: "history.digitalDesc",
      color: "bg-indigo-500",
    },
    {
      year: "2020",
      titleKey: "history.swachhBharatSuccess",
      descKey: "history.swachhDesc",
      color: "bg-red-500",
    },
    {
      year: "2024",
      titleKey: "history.smartVillage",
      descKey: "history.smartDesc",
      color: "bg-pink-500",
    },
  ];

  const historicalPlaces = [
    {
      nameKey: "history.ancientTemple",
      descKey: "history.templeDesc",
      icon: FaLandmark,
    },
    {
      nameKey: "history.memorial",
      descKey: "history.memorialDesc",
      icon: FaMapMarkerAlt,
    },
    {
      nameKey: "history.banyanTree",
      descKey: "history.banyanDesc",
      icon: FaHistory,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.history")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("history.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaHistory className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("history.ourHeritage")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("history.heritageText1")}
          </p>
        </section>

        {/* Timeline */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("history.historicalTimeline")}
          </h2>
          <div className="space-y-6">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div
                    className={`${event.color} text-white p-6 md:w-48 flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <FaCalendarAlt className="text-3xl sm:text-4xl mx-auto mb-2" />
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {event.year}
                      </h3>
                    </div>
                  </div>
                  <div className="p-6 flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-government-blue mb-3">
                      {t(event.titleKey)}
                    </h3>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                      {t(event.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Historical Places */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("history.historicalPlaces")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {historicalPlaces.map((place, index) => {
              const Icon = place.icon;
              return (
                <div
                  key={index}
                  className="border-l-4 border-government-orange pl-4"
                >
                  <Icon className="text-3xl text-government-orange mb-3" />
                  <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                    {t(place.nameKey)}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {t(place.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("history.ourLegacy")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("history.culturalHeritage")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {t("history.culturalText")}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("history.nationContribution")}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                {t("history.contributionText")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
