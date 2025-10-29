"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaUsers, FaMapMarkedAlt, FaLeaf, FaTrophy } from "react-icons/fa";

export default function IntroductionPage() {
  const { t, language } = useLanguage();

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.introduction")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("intro.subtitle")}
          </p>
        </div>

        {/* Welcome Section */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUsers className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("intro.welcome")}
            </h2>
          </div>
          <div className="prose max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
              {t("intro.welcomeMessage")}
            </p>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("intro.keyStatistics")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-government-orange bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-3xl text-government-orange" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-orange mb-2">
                {language === "en" ? "1207" : "१२०७"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.totalPopulation")}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {t("intro.males")}: {language === "en" ? "621" : "६२१"} |
                {t("intro.females")}: {language === "en" ? "586" : "५८६"}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-government-green bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMapMarkedAlt className="text-3xl text-government-green" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-green mb-2">
                {language === "en" ? "251" : "२५१"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.households")}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#0A1931] bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-3xl text-government-blue" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-government-blue mb-2">
                {language === "en" ? "159.2" : "१५९.२"}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.totalArea")}
              </p>
            </div>

            {/* Trophy */}

            {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="bg-orange-600 bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaTrophy className="text-3xl text-orange-600" />
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-orange-600 mb-2">
                18
              </h3>
              <p className="text-gray-700 text-sm sm:text-base">
                {t("intro.awardsReceived")}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                {t("intro.stateNationalLevel")}
              </p>
            </div> */}
          </div>
        </section>

        {/* Geographic Information */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaMapMarkedAlt className="text-4xl sm:text-5xl text-government-green mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("intro.geographicInfo")}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-3">
                {t("intro.location")}
              </h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.district")}:</span>
                  <span>{t("header.district")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.taluka")}:</span>
                  <span>{t("header.Taluka")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.state")}:</span>
                  <span>{t("intro.maharashtra")}</span>
                </div>
                <div className="flex justify-between border-b pb-2">
                  <span className="font-semibold">{t("intro.pinCode")}:</span>
                  <span> {language === "en" ? 415404 : "४१५४०४"}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Infrastructure */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("intro.basicInfrastructure")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Education */}
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">{t("intro.education")}</h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {t("intro.primarySchools")}: {language === "en" ? "1" : "१"}
                </li>
                <li>
                  • {t("intro.secondarySchool")}:{" "}
                  {language === "en" ? "0" : "०"}
                </li>
                <li>
                  • {t("intro.anganwadiCenters")}:{" "}
                  {language === "en" ? "1" : "१"}
                </li>
                <li>
                  • {t("intro.library")}: {language === "en" ? "0" : "०"}
                </li>
              </ul>
            </div>

            {/* Health */}
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">{t("intro.health")}</h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {t("intro.primaryHealthCenter")}:{" "}
                  {language === "en" ? "0" : "०"}
                </li>
                <li>
                  • {t("intro.subCenters")}: {language === "en" ? "1" : "१"}
                </li>
                <li>
                  • {t("intro.privateClinics")}: {language === "en" ? "1" : "१"}
                </li>
                <li>
                  • {t("intro.pharmacies")}: {language === "en" ? "1" : "१"}
                </li>
              </ul>
            </div>

            {/* Connectivity */}
            <div className="border-l-4 border-government-blue pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.connectivity")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {t("intro.pavedRoads")}: {t("intro.busServiceValue")}
                </li>
                <li>
                  • {t("intro.busService")}: {t("intro.available")}
                </li>
                <li>
                  • {t("intro.internet")}: {t("intro.fiberOptic")}
                </li>
                <li>
                  • {t("intro.mobileCoverage")}:{" "}
                  {language === "en" ? "100%" : "१००%"}
                </li>
              </ul>
            </div>

            {/* Water & Sanitation */}
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.waterSanitation")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {t("intro.pipedWater")}: {language === "en" ? "98%" : "९८%"}{" "}
                  {t("intro.coverage")}
                </li>
                <li>
                  • {t("intro.toilets")}: {language === "en" ? "98%" : "९८%"}{" "}
                  {t("intro.households")}
                </li>
                <li>
                  • {t("intro.drainage")}: {t("intro.coveredDrains")}
                </li>
                <li>
                  • {t("intro.wasteManagement")}: {t("intro.daily")}
                </li>
              </ul>
            </div>

            {/* Electricity */}
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-bold text-lg mb-2">
                {t("intro.electricity")}
              </h3>
              <ul className="space-y-1 text-gray-700 text-sm sm:text-base">
                <li>
                  • {t("intro.electrification")}:{" "}
                  {language === "en" ? "100%" : "१००%"}
                </li>
                <li>
                  • {t("intro.streetLights")}: {t("intro.ledSolar")}
                </li>
                <li>
                  • {t("intro.agriculturalPower")}: {t("intro.threePhase")}
                </li>
                <li>
                  • {t("intro.backup")}: {t("intro.transformers")}:{" "}
                  {language === "en" ? "3" : "३"}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Economy */}
        {/* <section className="bg-[#B3CFE5] text-[#0A1931] rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("intro.economyLivelihood")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.primarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.agriculture")}: 65%</li>
                <li>• {t("intro.animalHusbandry")}: 15%</li>
                <li>• {t("intro.fishing")}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.secondarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.smallIndustries")}: 8%</li>
                <li>• {t("intro.manufacturing")}: 4%</li>
                <li>• {t("intro.construction")}: 3%</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("intro.tertiarySector")}
              </h3>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>• {t("intro.services")}: 7%</li>
                <li>• {t("intro.trade")}: 4%</li>
                <li>• {t("intro.governmentJobs")}: 3%</li>
              </ul>
            </div>
          </div>
        </section> */}
      </div>
    </main>
  );
}
