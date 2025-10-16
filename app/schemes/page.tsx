"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaFileAlt,
  FaLandmark,
  FaBuilding,
  FaUsers,
  FaArrowRight,
  FaCalendarAlt,
  FaDownload,
} from "react-icons/fa";

export default function SchemesPage() {
  const { t } = useLanguage();

  const subPages = [
    {
      title: t("schemes.local"),
      description: t("schemes.local.description"),
      icon: FaUsers,
      link: "/schemes/local",
      color: "from-green-400 to-green-600",
      count: `6 ${t("common.schemes")}`,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("schemes.title")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("common.allSchemesInfo")}
          </p>
        </div>

        {/* Apply Notice */}
        <div className="bg-government-orange text-white rounded-lg p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {t("common.applyForSchemes")}
              </h3>
              <p className="text-sm sm:text-base">
                {t("common.visitOfficeOrApplyOnline")}
              </p>
            </div>
            <button className="bg-white text-government-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
              {t("common.applyOnline")}
            </button>
          </div>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.selectSchemeType")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {subPages.map((scheme, index) => {
              const Icon = scheme.icon;
              return (
                <Link href={scheme.link} key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${scheme.color} p-6 text-white`}
                    >
                      <Icon className="text-4xl mb-3" />
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">
                        {scheme.title}
                      </h3>
                      <div className="text-xs sm:text-sm bg-white bg-opacity-20 rounded-full px-3 py-1 inline-block">
                        {scheme.count}
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-sm mb-4">
                        {scheme.description}
                      </p>
                      <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">{t("common.viewSchemes")}</span>
                        <FaArrowRight />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.needHelp")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <FaCalendarAlt className="text-3xl text-government-orange flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">{t("common.visitOffice")}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.mondayFriday")}
                  <br />
                  10:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaFileAlt className="text-3xl text-government-green flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">{t("common.helpline")}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("schemes.tollFree")}
                  <br />
                  {t("schemes.email")}: schemes@grampanchayat.gov.in
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaDownload className="text-3xl text-government-blue flex-shrink-0" />
              <div>
                <h3 className="font-bold mb-2">{t("common.downloadForms")}</h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  {t("common.getApplicationForms")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
