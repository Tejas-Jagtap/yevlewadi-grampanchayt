"use client";

import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaFileAlt,
  FaIdCard,
  FaHome,
  FaUserTie,
  FaBaby,
  FaHeart,
  FaCertificate,
  FaMoneyBill,
  FaLaptop,
  FaBuilding,
} from "react-icons/fa";

export default function ServicesPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", nameKey: "services.allServices", icon: FaFileAlt },
    {
      id: "certificates",
      nameKey: "services.certificates",
      icon: FaCertificate,
    },
    { id: "licenses", nameKey: "services.licenses", icon: FaIdCard },
    { id: "welfare", nameKey: "services.welfare", icon: FaHeart },
    { id: "tax", nameKey: "services.taxRevenue", icon: FaMoneyBill },
  ];

  const services = [
    {
      id: 1,
      category: "certificates",
      nameKey: "services.birthCert",
      descKey: "services.birthCertDesc",
      icon: FaBaby,
      color: "bg-blue-500",
      time: "7",
      fee: "₹50",
      documents: ["Hospital Certificate", "Parents Aadhar", "Address Proof"],
    },
    {
      id: 2,
      category: "certificates",
      nameKey: "services.deathCert",
      descKey: "services.deathCertDesc",
      icon: FaUserTie,
      color: "bg-gray-500",
      time: "7",
      fee: "₹50",
      documents: [
        "Hospital Certificate",
        "Family Member Aadhar",
        "Address Proof",
      ],
    },
    {
      id: 3,
      category: "certificates",
      nameKey: "services.incomeCert",
      descKey: "services.incomeCertDesc",
      icon: FaMoneyBill,
      color: "bg-green-500",
      time: "15",
      fee: "₹100",
      documents: ["Aadhar Card", "Salary Slips/Income Proof", "Bank Statement"],
    },
    {
      id: 4,
      category: "certificates",
      nameKey: "services.residenceCert",
      descKey: "services.residenceCertDesc",
      icon: FaHome,
      color: "bg-orange-500",
      time: "10",
      fee: "₹75",
      documents: ["Aadhar Card", "Ration Card", "Electricity Bill"],
    },
    {
      id: 5,
      category: "licenses",
      nameKey: "services.buildingPermission",
      descKey: "services.buildingPermissionDesc",
      icon: FaBuilding,
      color: "bg-red-500",
      time: "30",
      fee: "₹500 - ₹5,000",
      documents: ["Land Documents", "Building Plan", "NOC from neighbors"],
    },
    {
      id: 6,
      category: "licenses",
      nameKey: "services.tradeLicense",
      descKey: "services.tradeLicenseDesc",
      icon: FaIdCard,
      color: "bg-purple-500",
      time: "15",
      fee: "₹1,000 - ₹10,000",
      documents: ["Business Plan", "Aadhar Card", "Shop/Office Address Proof"],
    },
    {
      id: 7,
      category: "welfare",
      nameKey: "services.widowPension",
      descKey: "services.widowPensionDesc",
      icon: FaHeart,
      color: "bg-pink-500",
      time: "30",
      fee: language === "mr" ? "मोफत" : "Free",
      documents: [
        "Death Certificate (Husband)",
        "Aadhar",
        "Bank Account",
        "Income Certificate",
      ],
    },
    {
      id: 8,
      category: "welfare",
      nameKey: "services.oldAgePension",
      descKey: "services.oldAgePensionDesc",
      icon: FaUserTie,
      color: "bg-yellow-500",
      time: "30",
      fee: language === "mr" ? "मोफत" : "Free",
      documents: [
        "Aadhar Card",
        "Age Proof (Birth Certificate)",
        "Bank Account",
        "Income Certificate",
      ],
    },
    {
      id: 9,
      category: "tax",
      nameKey: "services.propertyTax",
      descKey: "services.propertyTaxDesc",
      icon: FaMoneyBill,
      color: "bg-indigo-500",
      time: language === "mr" ? "तात्काळ" : "Instant",
      fee: "As per property value",
      documents: ["Property Documents", "Previous Tax Receipt"],
    },
    {
      id: 10,
      category: "tax",
      nameKey: "services.waterTax",
      descKey: "services.waterTaxDesc",
      icon: FaMoneyBill,
      color: "bg-cyan-500",
      time: language === "mr" ? "तात्काळ" : "Instant",
      fee: "₹200 - ₹1,000/year",
      documents: ["Water Connection Number", "Aadhar Card"],
    },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("services.ourServices")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("services.pageDesc")}
          </p>
        </div>

        {/* Online Services Banner */}
        <div className="bg-government-orange text-white rounded-lg p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <FaLaptop className="text-4xl sm:text-5xl" />
              <div>
                <h3 className="text-lg sm:text-xl font-bold mb-1">
                  {t("services.applyOnline")}
                </h3>
                <p className="text-sm sm:text-base">
                  {t("services.allServicesOnline")}
                </p>
              </div>
            </div>
            <button className="bg-white text-government-orange px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
              {t("services.goToPortal")}
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`p-4 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-3 ${
                    selectedCategory === category.id
                      ? "bg-[#0A1931] text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                  }`}
                >
                  <Icon className="text-xl" />
                  <span className="text-sm sm:text-base">
                    {t(category.nameKey)}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`${service.color} p-4 sm:p-6 text-white`}>
                  <div className="flex items-center gap-4">
                    <Icon className="text-3xl sm:text-4xl" />
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold">
                        {t(service.nameKey)}
                      </h2>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <p className="text-gray-700 mb-4 text-sm sm:text-base">
                    {t(service.descKey)}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">
                        {t("services.processingTime")}
                      </p>
                      <p className="font-bold text-government-blue text-sm sm:text-base">
                        {service.time} {t("services.workingDays")}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500 mb-1">
                        {t("services.fee")}
                      </p>
                      <p className="font-bold text-government-orange text-sm sm:text-base">
                        {service.fee}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h3 className="font-bold text-government-blue mb-2 text-sm sm:text-base">
                      {t("services.requiredDocuments")}
                    </h3>
                    <ul className="space-y-1">
                      {service.documents.map((doc, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-xs sm:text-sm text-gray-700"
                        >
                          <span className="w-1.5 h-1.5 bg-government-orange rounded-full"></span>
                          {doc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 bg-[#0A1931] hover:bg-government-orange text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                      {t("services.applyOnlineBtn")}
                    </button>
                    <button className="flex-1 border-2 border-government-blue text-government-blue hover:bg-[#0A1931] hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors duration-200 text-sm sm:text-base">
                      {t("services.downloadForm")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("services.applicationProcess")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#0A1931] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {t("services.selectService")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("services.selectServiceDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-government-green text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {t("services.fillForm")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("services.fillFormDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-government-orange text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {t("services.submit")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("services.submitDesc")}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="font-bold mb-2 text-sm sm:text-base">
                {t("services.trackStatus")}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm">
                {t("services.trackStatusDesc")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
