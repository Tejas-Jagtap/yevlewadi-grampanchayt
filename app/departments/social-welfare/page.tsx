"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUsers,
  FaHeart,
  FaChild,
  FaFemale,
  FaHandHoldingHeart,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function SocialWelfarePage() {
  const { t, language } = useLanguage();

  const services = [
    {
      titleKey: "social.pensionSchemes",
      descKey: "social.pensionSchemesDesc",
      icon: FaUserTie,
    },
    {
      titleKey: "social.womenEmpowerment",
      descKey: "social.womenEmpowermentDesc",
      icon: FaFemale,
    },
    {
      titleKey: "social.childWelfare",
      descKey: "social.childWelfareDesc",
      icon: FaChild,
    },
    {
      titleKey: "social.disabilitySupport",
      descKey: "social.disabilitySupportDesc",
      icon: FaHandHoldingHeart,
    },
  ];

  const schemes = [
    {
      nameKey: "social.oldAgePension",
      beneficiaries: 180,
      amountKey: "social.monthlyAmount",
      eligibilityKey: "social.oldAgePensionEligibility",
    },
    {
      nameKey: "social.widowPension",
      beneficiaries: 65,
      amountKey: "social.monthlyAmount",
      eligibilityKey: "social.widowPensionEligibility",
    },
    {
      nameKey: "social.disabilityPension",
      beneficiaries: 42,
      amountKey: "social.monthlyAmount",
      eligibilityKey: "social.disabilityPensionEligibility",
    },
    {
      nameKey: "social.womenSHG",
      beneficiaries: 12,
      amountKey: "social.loanSupport",
      eligibilityKey: "social.womenSHGEligibility",
    },
  ];

  const programs = [
    {
      nameKey: "social.childDevelopment",
      descKey: "social.childDevelopmentDesc",
      icon: FaChild,
    },
    {
      nameKey: "social.betiBachao",
      descKey: "social.betiBachaoDesc",
      icon: FaFemale,
    },
    {
      nameKey: "social.sukanyaSamriddhi",
      descKey: "social.sukanyaSamriddhiDesc",
      icon: FaHeart,
    },
    {
      nameKey: "social.nationalFamilyBenefit",
      descKey: "social.nationalFamilyBenefitDesc",
      icon: FaHandHoldingHeart,
    },
    {
      nameKey: "social.pmMatruVandana",
      descKey: "social.pmMatruVandanaDesc",
      icon: FaFemale,
    },
    {
      nameKey: "social.disabilityCert",
      descKey: "social.disabilityCertDesc",
      icon: FaHandHoldingHeart,
    },
  ];

  const selfHelpGroups = [
    {
      name: "Mahila Vikas Group",
      members: 12,
      activity: "Tailoring & Embroidery",
      established: "2018",
    },
    {
      name: "Swarojgar Mahila Sangha",
      members: 15,
      activity: "Food Processing",
      established: "2019",
    },
    {
      name: "Grameen Mahila Group",
      members: 10,
      activity: "Handicrafts",
      established: "2020",
    },
    {
      name: "Sakhi Bachat Gat",
      members: 14,
      activity: "Dairy Products",
      established: "2021",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-4">
            <FaUsers className="text-5xl sm:text-6xl mr-4" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {t("dept.social")}
              </h1>
              <p className="text-base sm:text-lg opacity-90">
                {t("social.subtitle")}
              </p>
            </div>
          </div>
        </div>

        {/* Department Overview */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-4">
            {t("dept.overview")}
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            {t("social.overviewText")}
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
                  <Icon className="text-4xl text-purple-600 mb-4" />
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

        {/* Active Schemes */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("social.activeWelfareSchemes")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {schemes.map((scheme, index) => (
              <div
                key={index}
                className="border-l-4 border-purple-500 bg-gray-50 p-4 sm:p-6"
              >
                <h3 className="text-xl font-bold text-government-blue mb-3">
                  {t(scheme.nameKey)}
                </h3>
                <div className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <p>
                    <span className="font-semibold">
                      {t("social.beneficiaries")}:
                    </span>{" "}
                    {scheme.beneficiaries}
                  </p>
                  <p>
                    <span className="font-semibold">{t("social.amount")}:</span>{" "}
                    {t(scheme.amountKey)}
                  </p>
                  <p>
                    <span className="font-semibold">
                      {t("social.eligibility")}:
                    </span>{" "}
                    {t(scheme.eligibilityKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("social.welfarePrograms")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-lg p-5 shadow-lg"
                >
                  <Icon className="text-3xl mb-3" />
                  <h3 className="text-lg font-bold mb-2">
                    {t(program.nameKey)}
                  </h3>
                  <p className="text-sm">{t(program.descKey)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Self-Help Groups */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("social.womenSHGTitle")}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-100">
                <tr>
                  <th className="px-4 py-3 text-left text-government-blue">
                    {t("social.groupName")}
                  </th>
                  <th className="px-4 py-3 text-left text-government-blue">
                    {t("social.members")}
                  </th>
                  <th className="px-4 py-3 text-left text-government-blue">
                    {t("social.activity")}
                  </th>
                  <th className="px-4 py-3 text-left text-government-blue">
                    {t("social.established")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {selfHelpGroups.map((group, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3 font-semibold">{group.name}</td>
                    <td className="px-4 py-3">{group.members}</td>
                    <td className="px-4 py-3">{group.activity}</td>
                    <td className="px-4 py-3">{group.established}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
                {t("social.socialWelfareOfficer")}
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("dept.name")}:</span>{" "}
                  श्रीमती मीना देशपांडे / Mrs. Meena Deshpande
                </p>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-purple-600" />
                  <span>+91-XXXXX-XXXXX</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-purple-600" />
                  <span className="break-all">social@grampanchayat.gov.in</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-purple-600 mt-1 flex-shrink-0" />
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
                  <FaClock className="text-purple-600" />
                  <div>
                    <p className="font-semibold">{t("dept.monday")}</p>
                    <p className="text-sm">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-purple-600" />
                  <div>
                    <p className="font-semibold">{t("dept.saturday")}</p>
                    <p className="text-sm">10:00 AM - 2:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-purple-600" />
                  <div>
                    <p className="font-semibold">{t("social.helpline")}</p>
                    <p className="text-sm">1800-XXX-XXXX (Toll Free)</p>
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
