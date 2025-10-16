"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaFileAlt,
  FaStreetView,
  FaWater,
  FaLightbulb,
  FaTree,
  FaRupeeSign,
  FaUserCheck,
  FaDownload,
} from "react-icons/fa";

export default function LocalSchemesPage() {
  const { t, language } = useLanguage();

  const localSchemes = [
    {
      id: 1,
      nameKey: "schemes.roadDevelopment",
      icon: FaStreetView,
      color: "bg-gray-600",
      authorityKey: "schemes.roadDevelopmentAuthority",
      benefitKey: "schemes.roadDevelopmentBenefit",
      benefitDetailsKey: "schemes.roadDevelopmentBenefitDetails",
      eligibilityKey: "schemes.roadDevelopmentEligibility",
      documents: ["Application letter", "Address Proof", "Community consent"],
      applicationProcessKey: "schemes.roadDevelopmentProcess",
      status: "Active - 3 roads under construction",
    },
    {
      id: 2,
      nameKey: "schemes.waterTank",
      icon: FaWater,
      color: "bg-cyan-600",
      authorityKey: "schemes.waterTankAuthority",
      benefitKey: "schemes.waterTankBenefit",
      benefitDetailsKey: "schemes.waterTankBenefitDetails",
      eligibilityKey: "schemes.waterTankEligibility",
      documents: [
        "Community proposal",
        "Land availability certificate",
        "Technical survey report",
      ],
      applicationProcessKey: "schemes.waterTankProcess",
      status: "Completed - 2 tanks, Planned - 1 tank",
    },
    {
      id: 3,
      nameKey: "schemes.solarStreetLight",
      icon: FaLightbulb,
      color: "bg-yellow-600",
      authorityKey: "schemes.solarStreetLightAuthority",
      benefitKey: "schemes.solarStreetLightBenefit",
      benefitDetailsKey: "schemes.solarStreetLightBenefitDetails",
      eligibilityKey: "schemes.solarStreetLightEligibility",
      documents: ["Location details", "Community request", "Safety assessment"],
      applicationProcessKey: "schemes.solarStreetLightProcess",
      status: "Ongoing - 45 lights installed, 20 pending",
    },
    {
      id: 4,
      nameKey: "schemes.plantation",
      icon: FaTree,
      color: "bg-green-600",
      authorityKey: "schemes.plantationAuthority",
      benefitKey: "schemes.plantationBenefit",
      benefitDetailsKey: "schemes.plantationBenefitDetails",
      eligibilityKey: "schemes.plantationEligibility",
      documents: [
        "Registration form",
        "Land details (if applicable)",
        "Commitment letter",
      ],
      applicationProcessKey: "schemes.plantationProcess",
      status: "Annual program - Next drive: Monsoon season",
    },
    {
      id: 5,
      nameKey: "schemes.seniorCitizenFund",
      icon: FaRupeeSign,
      color: "bg-purple-600",
      authorityKey: "schemes.seniorCitizenFundAuthority",
      benefitKey: "schemes.seniorCitizenFundBenefit",
      benefitDetailsKey: "schemes.seniorCitizenFundBenefitDetails",
      eligibilityKey: "schemes.seniorCitizenFundEligibility",
      documents: [
        "Age proof",
        "Income certificate",
        "Medical certificate (if medical emergency)",
        "Bank account",
      ],
      applicationProcessKey: "schemes.seniorCitizenFundProcess",
      status: "Assistance provided to 23 beneficiaries this year",
    },
    {
      id: 6,
      nameKey: "schemes.youthSkill",
      icon: FaFileAlt,
      color: "bg-indigo-600",
      authorityKey: "schemes.youthSkillAuthority",
      benefitKey: "schemes.youthSkillBenefit",
      benefitDetailsKey: "schemes.youthSkillBenefitDetails",
      eligibilityKey: "schemes.youthSkillEligibility",
      documents: ["ID proof", "Educational certificate", "Photo"],
      applicationProcessKey: "schemes.youthSkillProcess",
      status: "Ongoing - 45 youth trained this year",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.schemes.local")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("schemes.localSubtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-4">
            {t("schemes.aboutLocalSchemes")}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {t("schemes.localIntro")}
          </p>
        </section>

        {/* Schemes List */}
        <div className="space-y-8">
          {localSchemes.map((scheme) => {
            const Icon = scheme.icon;
            return (
              <div
                key={scheme.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${scheme.color} text-white p-6`}>
                  <div className="flex items-start gap-4">
                    <Icon className="text-4xl sm:text-5xl flex-shrink-0" />
                    <div className="flex-1">
                      <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                        {t(scheme.nameKey)}
                      </h2>
                      <p className="text-sm sm:text-base opacity-80">
                        {t(scheme.authorityKey)}
                      </p>
                    </div>
                    <div className="bg-white bg-opacity-20 px-4 py-2 rounded-lg">
                      <p className="text-xs opacity-80">
                        {t("schemes.status")}
                      </p>
                      <p className="text-sm font-semibold">
                        {scheme.status.split(" - ")[0]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                    {/* Benefits */}
                    <div className="lg:col-span-2 space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaRupeeSign className="text-government-orange" />
                          <h3 className="font-bold text-government-blue text-lg">
                            {t("schemes.benefits")}
                          </h3>
                        </div>
                        <p className="text-gray-700 pl-6 text-base sm:text-lg font-semibold mb-1">
                          {t(scheme.benefitKey)}
                        </p>
                        <p className="text-gray-600 pl-6 text-sm sm:text-base">
                          {t(scheme.benefitDetailsKey)}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaUserCheck className="text-government-green" />
                          <h3 className="font-bold text-government-blue text-lg">
                            {t("schemes.eligibility")}
                          </h3>
                        </div>
                        <p className="text-gray-700 pl-6 text-sm sm:text-base">
                          {t(scheme.eligibilityKey)}
                        </p>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <FaFileAlt className="text-government-blue" />
                          <h3 className="font-bold text-government-blue text-lg">
                            {t("schemes.applicationProcess")}
                          </h3>
                        </div>
                        <p className="text-gray-700 pl-6 text-sm sm:text-base">
                          {t(scheme.applicationProcessKey)}
                        </p>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm sm:text-base">
                          <span className="font-semibold text-government-green">
                            {t("schemes.currentStatus")}:
                          </span>{" "}
                          {scheme.status}
                        </p>
                      </div>
                    </div>

                    {/* Required Documents */}
                    <div className="lg:col-span-1 bg-gray-50 p-4 sm:p-6 rounded-lg">
                      <h3 className="font-bold text-government-blue mb-4 flex items-center gap-2">
                        <FaDownload className="text-government-orange" />
                        {t("schemes.requiredDocuments")}
                      </h3>
                      <ul className="space-y-2">
                        {scheme.documents.map((doc, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-2 text-sm sm:text-base"
                          >
                            <span className="w-2 h-2 bg-government-orange rounded-full mt-2 flex-shrink-0"></span>
                            <span>{doc}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 w-full bg-government-green hover:bg-[#0A1931] text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                        {t("schemes.applyNow")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-[#01A3D6] text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            {t("schemes.visitGramPanchayat")}
          </h2>
          <p className="text-center text-base sm:text-lg mb-6">
            {t("schemes.localHelpText")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="text-center">
              <p className="font-semibold">📞 {t("schemes.officeContact")}</p>
              <p className="text-lg">+91-XXXXX-XXXXX</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">🕐 {t("schemes.officeHours")}</p>
              <p className="text-lg">{t("schemes.monFri")}, 10 AM - 6 PM</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">📧 {t("schemes.email")}</p>
              <p className="text-lg">schemes@grampanchayat.gov.in</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
