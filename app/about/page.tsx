"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaHistory,
  FaUsers,
  FaMapMarkedAlt,
  FaAward,
  FaInfoCircle,
  FaUserTie,
  FaArrowRight,
} from "react-icons/fa";

export default function AboutPage() {
  const { t, language } = useLanguage();

  const subPages = [
    {
      title: t("nav.about.introduction"),
      description: t("about.intro.description"),
      icon: FaInfoCircle,
      link: "/about/introduction",
      color: "from-blue-400 to-blue-600",
    },
    // {
    //   title: t("nav.about.history"),
    //   description: t("about.history.description"),
    //   icon: FaHistory,
    //   link: "/about/history",
    //   color: "from-green-400 to-green-600",
    // },
    {
      title: t("nav.about.administration"),
      description: t("about.admin.description"),
      icon: FaUserTie,
      link: "/about/administration",
      color: "from-orange-400 to-orange-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("header.village")} - {t("header.district")}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.selectSection")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subPages.map((page, index) => {
              const Icon = page.icon;
              return (
                <Link href={page.link} key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${page.color} p-6 text-white`}
                    >
                      <Icon className="text-4xl mb-3" />
                      <h3 className="text-xl sm:text-2xl font-bold">
                        {page.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-sm mb-4">
                        {page.description}
                      </p>
                      <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">{t("common.readMore")}</span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Introduction Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUsers className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("nav.about.introduction")}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {t("about.intro.text")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="bg-government-orange bg-opacity-10 p-4 rounded-lg text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-government-orange">
                  728
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.population")}
                </p>
              </div>
              <div className="bg-government-green bg-opacity-10 p-4 rounded-lg text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-government-green">
                  130
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.households")}
                </p>
              </div>
              {/* <div className="bg-[#0A1931] bg-opacity-10 p-4 rounded-lg text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-government-blue">
                  500
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.hectares")}
                </p>
              </div> */}
              {/* <div className="bg-orange-600 bg-opacity-10 p-4 rounded-lg text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-orange-600">
                  15+
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.awards")}
                </p>
              </div> */}
            </div>
          </div>
        </section>

        {/* History Section */}
        {/* <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaHistory className="text-4xl sm:text-5xl text-government-green mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("nav.about.history")}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {t("about.history.text")}
            </p>
            <div className="mt-6 border-l-4 border-government-orange pl-4">
              <h3 className="text-xl font-bold text-government-blue mb-2">
                {t("about.milestone1")} /{" "}
                {language === "mr" ? "Key Milestones" : "प्रमुख टप्पे"}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 1950: {t("about.milestone1")}</li>
                <li>• 1980: {t("about.milestone2")}</li>
                <li>• 2000: {t("about.milestone3")}</li>
                <li>• 2010: {t("about.milestone4")}</li>
                <li>• 2020: {t("about.milestone5")}</li>
              </ul>
            </div>
          </div>
        </section> */}

        {/* Administration Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaMapMarkedAlt className="text-4xl sm:text-5xl text-government-blue mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("nav.about.administration")}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
              {t("about.admin.text")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-government-orange pl-4">
                <h3 className="text-xl font-bold text-government-blue mb-3">
                  {t("about.electedBody")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("about.sarpanch")}</li>
                  <li>• {t("about.upSarpanch")}</li>
                  <li>• {t("about.wardMembers")}</li>
                  <li>• {t("about.standingCommittee")}</li>
                </ul>
              </div>
              <div className="border-l-4 border-government-green pl-4">
                <h3 className="text-xl font-bold text-government-blue mb-3">
                  {t("about.administrativeStaff")}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• {t("about.gramSevak")}</li>
                  <li>• {t("about.secretary")}</li>
                  <li>• {t("about.accountant")}</li>
                  <li>• {t("about.supportStaff")}</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        {/* <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <FaAward className="text-4xl sm:text-5xl mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("about.vision")}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {t("about.visionText")}
              </p>
            </div>
            <div>
              <FaUsers className="text-4xl sm:text-5xl mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t("about.mission")}
              </h2>
              <p className="text-base sm:text-lg leading-relaxed">
                {t("about.missionText")}
              </p>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
