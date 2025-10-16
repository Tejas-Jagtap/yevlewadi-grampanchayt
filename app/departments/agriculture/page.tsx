"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaSeedling,
  FaTractor,
  FaCloudRain,
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function AgriculturePage() {
  const { t, language } = useLanguage();

  const services = [
    {
      titleKey: "agri.seedDistribution",
      descKey: "agri.seedDistributionDesc",
      icon: FaSeedling,
    },
    {
      titleKey: "agri.farmEquipment",
      descKey: "agri.farmEquipmentDesc",
      icon: FaTractor,
    },
    {
      titleKey: "agri.irrigationSupport",
      descKey: "agri.irrigationSupportDesc",
      icon: FaCloudRain,
    },
    {
      titleKey: "agri.organicFarming",
      descKey: "agri.organicFarmingDesc",
      icon: FaLeaf,
    },
  ];

  const schemes = [
    {
      nameKey: "agri.pmKisan",
      benefit: "₹6,000 per year",
      eligibilityKey: "agri.pmKisanEligibility",
    },
    {
      nameKey: "agri.soilHealthCard",
      benefit: "Free soil testing",
      eligibilityKey: "agri.soilHealthCardEligibility",
    },
    {
      nameKey: "agri.cropInsurance",
      benefit: "Crop loss coverage",
      eligibilityKey: "agri.cropInsuranceEligibility",
    },
    {
      nameKey: "agri.kisanCreditCard",
      benefit: "Easy farm loans",
      eligibilityKey: "agri.kisanCreditCardEligibility",
    },
  ];

  const crops = [
    { nameKey: "agri.rice", area: "120 hectares", seasonKey: "agri.kharif" },
    { nameKey: "agri.wheat", area: "85 hectares", seasonKey: "agri.rabi" },
    { nameKey: "agri.cotton", area: "95 hectares", seasonKey: "agri.kharif" },
    {
      nameKey: "agri.sugarcane",
      area: "60 hectares",
      seasonKey: "agri.yearRound",
    },
    {
      nameKey: "agri.vegetables",
      area: "40 hectares",
      seasonKey: "agri.allSeasons",
    },
    { nameKey: "agri.pulses", area: "28 hectares", seasonKey: "agri.rabi" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-4">
            <FaSeedling className="text-5xl sm:text-6xl mr-4" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {t("dept.agriculture")}
              </h1>
              <p className="text-base sm:text-lg opacity-90">
                {t("agri.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Department Overview */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-4">
            {t("dept.overview")}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("agri.overviewText")}
          </p>
        </section>

        {/* Services */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("dept.ourServices")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-green-600 mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(service.titleKey)}
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    {t(service.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Major Crops */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("agri.majorCrops")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {crops.map((crop, index) => (
              <div
                key={index}
                className="border-l-4 border-green-500 bg-gray-50 p-4 hover:bg-green-50 transition-colors"
              >
                <h3 className="font-bold text-lg text-government-blue mb-2">
                  {t(crop.nameKey)}
                </h3>
                <div className="text-sm text-gray-700 space-y-1">
                  <p>
                    <span className="font-semibold">{t("agri.area")}:</span>{" "}
                    {crop.area}
                  </p>
                  <p>
                    <span className="font-semibold">{t("agri.season")}:</span>{" "}
                    {t(crop.seasonKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Government Schemes */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("agri.govtSchemes")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold mb-3">{t(scheme.nameKey)}</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">{t("agri.benefit")}:</span>{" "}
                    {scheme.benefit}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t("agri.eligibility")}:
                    </span>{" "}
                    {t(scheme.eligibilityKey)}
                  </p>
                </div>
                <button className="mt-4 bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                  {t("agri.applyNow")}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("dept.contactInfo")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-4">
                {t("dept.deptHead")}
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("dept.name")}:</span> श्री.
                  गणेश शेळके / Mr. Ganesh Shelke
                </p>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-green-600" />
                  <span>+91-8600425370</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-green-600" />
                  <span className="break-all">
                    agriculture@grampanchayat.gov.in
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-green-600 mt-1 flex-shrink-0" />
                  <span>Gram Panchayat Office, Village Name</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-4">
                {t("dept.officeHours")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-green-600" />
                  <div>
                    <p className="font-semibold">{t("dept.monday")}</p>
                    <p className="text-sm">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-green-600" />
                  <div>
                    <p className="font-semibold">{t("dept.saturday")}</p>
                    <p className="text-sm">
                      10:00 AM - 2:00 PM ({t("dept.limitedServices")})
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-green-600" />
                  <div>
                    <p className="font-semibold">{t("dept.sunday")}</p>
                    <p className="text-sm">{t("dept.closed")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
