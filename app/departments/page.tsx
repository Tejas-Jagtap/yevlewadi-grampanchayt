"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaUsers,
  FaArrowRight,
  FaLandmark,
  FaBolt,
  FaHardHat,
} from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

export default function DepartmentsPage() {
  const { t } = useLanguage();

  const subPages = [
    {
      nameKey: "dept.revenue",
      name: t("dept.revenue.name"),
      description: t("dept.revenue.fullDesc"),
      head: t("dept.revenue.head"),
      phone: t("dept.revenue.departmentHeadPhone"),
      icon: FaLandmark, // Example icon
      color: "from-yellow-400 to-yellow-600",
    },
    {
      nameKey: "dept.health",
      name: t("dept.health.name"),
      description: t("dept.health.fullDesc"),
      head: t("dept.health.departmentHead"),
      phone: t("dept.health.departmentHeadPhone"),
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
    },
    {
      nameKey: "dept.agriculture",
      name: t("dept.agriculture.name"),
      description: t("dept.agriculture.fullDesc"),
      head: t("dept.agriculture.departmentHead"),
      phone: t("dept.agriculture.departmentHeadPhone"),
      icon: FaSeedling,
      color: "from-green-400 to-green-600",
    },
    {
      nameKey: "dept.electricity",
      name: t("intro.electricityDepat"),
      description: t("dept.electricity.fullDesc"),
      head: t("dept.electricity.departmentHead"),
      phone: t("dept.electricity.departmentHeadPhone"),
      icon: FaBolt,
      color: "from-yellow-500 to-yellow-700",
    },
    {
      nameKey: "dept.nrega",
      name: t("intro.dept.nrega"),
      description: t("dept.nrega.fullDesc"),
      head: t("dept.nrega.departmentHead"),
      phone: t("dept.nrega.departmentHeadPhone"),
      icon: FaHardHat,
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("dept.title")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("common.allDepartmentsInfo")}
          </p>
        </div>

        {/* Sub-Pages Navigation */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.selectDepartment")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {subPages.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={index}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">
                    <div
                      className={`bg-gradient-to-br ${dept.color} p-6 sm:p-8 text-white`}
                    >
                      <Icon className="text-4xl sm:text-5xl mb-3" />
                      <h3 className="text-2xl sm:text-3xl font-bold">
                        {dept.name}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-sm sm:text-base">
                        {dept.description}
                      </p>

                      {/* view departments */}

                      {/* <div className="flex items-center text-government-orange font-semibold">
                        <span className="mr-2">
                          {t("common.viewDepartment")}
                        </span>
                        <FaArrowRight />
                      </div> */}
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("dept.departmentHeadtitle")} - {dept.head}
                      </p>
                      <p className="text-gray-700 text-lg sm:text-base">
                        {t("common.phone")} - {dept.phone}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Office Hours */}
        {/* <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("common.officeHours")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="border-l-4 border-government-orange pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.weekdays")}</h3>
              <p className="text-gray-700">
                {t("common.mondayFriday")}
                <br />
                10:00 AM - 6:00 PM
              </p>
            </div>
            <div className="border-l-4 border-government-green pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.saturday")}</h3>
              <p className="text-gray-700">
                10:00 AM - 2:00 PM
                <br />({t("common.limitedServices")})
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="font-bold text-lg mb-2">{t("common.sunday")}</h3>
              <p className="text-gray-700">
                {t("common.closed")}
                <br />({t("common.emergencyServicesAvailable")})
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </main>
  );
}
