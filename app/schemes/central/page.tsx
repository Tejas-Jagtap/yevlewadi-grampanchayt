"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaFileAlt,
  FaHome,
  FaHeartbeat,
  FaSeedling,
  FaRupeeSign,
  FaUserCheck,
  FaDownload,
} from "react-icons/fa";

export default function CentralSchemesPage() {
  const { t, language } = useLanguage();

  const centralSchemes = [
    {
      id: 1,
      nameKey: "schemes.pmayName",
      icon: FaHome,
      color: "bg-blue-500",
      ministryKey: "schemes.pmayMinistry",
      benefitKey: "schemes.pmayBenefit",
      benefitDetailsKey: "schemes.pmayBenefitDetails",
      eligibilityKey: "schemes.pmayEligibility",
      documents: [
        "Aadhar Card",
        "Income Certificate",
        "Bank Account",
        "Photo ID",
        "BPL Certificate",
      ],
      applicationProcessKey: "schemes.pmayProcess",
      beneficiaries: 142,
    },
    {
      id: 2,
      nameKey: "schemes.mgnregaName",
      icon: FaSeedling,
      color: "bg-green-500",
      ministryKey: "schemes.mgnregaMinistry",
      benefitKey: "schemes.mgnregaBenefit",
      benefitDetailsKey: "schemes.mgnregaBenefitDetails",
      eligibilityKey: "schemes.mgnregaEligibility",
      documents: ["Job Card", "Aadhar Card", "Bank Account Details"],
      applicationProcessKey: "schemes.mgnregaProcess",
      beneficiaries: 347,
    },
    {
      id: 3,
      nameKey: "schemes.ayushmanName",
      icon: FaHeartbeat,
      color: "bg-red-500",
      ministryKey: "schemes.ayushmanMinistry",
      benefitKey: "schemes.ayushmanBenefit",
      benefitDetailsKey: "schemes.ayushmanBenefitDetails",
      eligibilityKey: "schemes.ayushmanEligibility",
      documents: ["Ayushman Card", "Aadhar Card", "Ration Card"],
      applicationProcessKey: "schemes.ayushmanProcess",
      beneficiaries: 892,
    },
    {
      id: 4,
      nameKey: "schemes.pmKisanName",
      icon: FaRupeeSign,
      color: "bg-yellow-500",
      ministryKey: "schemes.pmKisanMinistry",
      benefitKey: "schemes.pmKisanBenefit",
      benefitDetailsKey: "schemes.pmKisanBenefitDetails",
      eligibilityKey: "schemes.pmKisanEligibility",
      documents: ["Land Records", "Aadhar Card", "Bank Account", "Ration Card"],
      applicationProcessKey: "schemes.pmKisanProcess",
      beneficiaries: 285,
    },
    {
      id: 5,
      nameKey: "schemes.ujjwalaName",
      icon: FaHome,
      color: "bg-orange-500",
      ministryKey: "schemes.ujjwalaMinistry",
      benefitKey: "schemes.ujjwalaBenefit",
      benefitDetailsKey: "schemes.ujjwalaBenefitDetails",
      eligibilityKey: "schemes.ujjwalaEligibility",
      documents: [
        "Aadhar Card",
        "BPL Certificate",
        "Photo ID",
        "Address Proof",
      ],
      applicationProcessKey: "schemes.ujjwalaProcess",
      beneficiaries: 234,
    },
    {
      id: 6,
      nameKey: "schemes.jalJeevanName",
      icon: FaUserCheck,
      color: "bg-teal-500",
      ministryKey: "schemes.jalJeevanMinistry",
      benefitKey: "schemes.jalJeevanBenefit",
      benefitDetailsKey: "schemes.jalJeevanBenefitDetails",
      eligibilityKey: "schemes.jalJeevanEligibility",
      documents: [
        "Household Register",
        "Aadhar Card",
        "Address Proof",
        "Photo ID",
      ],
      applicationProcessKey: "schemes.jalJeevanProcess",
      beneficiaries: 567,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.schemes.central")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("schemes.centralSubtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-4">
            {t("schemes.aboutCentralSchemes")}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {t("schemes.centralIntro")}
          </p>
        </section>

        {/* Schemes List */}
        <div className="space-y-8">
          {centralSchemes.map((scheme) => {
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
                        {t(scheme.ministryKey)}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm opacity-80">
                        {t("schemes.beneficiaries")}
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold">
                        {scheme.beneficiaries}
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
                      <button className="mt-6 w-full bg-[#0A1931] hover:bg-government-orange text-white px-4 py-3 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
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
            {t("schemes.needHelp")}
          </h2>
          <p className="text-center text-base sm:text-lg mb-6">
            {t("schemes.helpText")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <div className="text-center">
              <p className="font-semibold">📞 {t("schemes.centralHelpline")}</p>
              <p className="text-lg">1800-XXX-XXXX</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">📧 {t("schemes.email")}</p>
              <p className="text-lg">schemes@grampanchayat.gov.in</p>
            </div>
            <div className="text-center">
              <p className="font-semibold">🏢 {t("schemes.districtOffice")}</p>
              <p className="text-lg">{t("schemes.monFri")}, 10 AM - 6 PM</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
