"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaHeartbeat,
  FaHospital,
  FaSyringe,
  FaAmbulance,
  FaUserMd,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function HealthPage() {
  const { t, language } = useLanguage();

  const services = [
    {
      titleKey: "health.primaryHealthcare",
      descKey: "health.primaryHealthcareDesc",
      icon: FaUserMd,
    },
    {
      titleKey: "health.vaccination",
      descKey: "health.vaccinationDesc",
      icon: FaSyringe,
    },
    {
      titleKey: "health.emergencyServices",
      descKey: "health.emergencyServicesDesc",
      icon: FaAmbulance,
    },
    {
      titleKey: "health.healthCamps",
      descKey: "health.healthCampsDesc",
      icon: FaHospital,
    },
  ];

  const facilities = [
    {
      nameKey: "health.phc",
      descKey: "health.phcDesc",
      beds: "10 beds",
      staff: "2 doctors, 5 nurses, 3 support staff",
    },
    {
      nameKey: "health.subHealthCenters",
      descKey: "health.subHealthCentersDesc",
      beds: "2 beds each",
      staff: "1 ANM per center",
    },
    {
      nameKey: "health.ayushmanCenter",
      descKey: "health.ayushmanCenterDesc",
      beds: "OPD only",
      staff: "1 medical officer, 2 health workers",
    },
  ];

  const programs = [
    {
      nameKey: "health.maternalHealth",
      detailsKey: "health.maternalHealthDetails",
    },
    {
      nameKey: "health.childHealth",
      detailsKey: "health.childHealthDetails",
    },
    {
      nameKey: "health.familyPlanning",
      detailsKey: "health.familyPlanningDetails",
    },
    {
      nameKey: "health.diseaseControl",
      detailsKey: "health.diseaseControlDetails",
    },
    {
      nameKey: "health.sanitation",
      detailsKey: "health.sanitationDetails",
    },
    {
      nameKey: "health.ashaProgram",
      detailsKey: "health.ashaProgramDetails",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-4">
            <FaHeartbeat className="text-5xl sm:text-6xl mr-4" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {t("dept.health")}
              </h1>
              <p className="text-base sm:text-lg opacity-90">
                {t("health.subtitle")}
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
            {t("health.overviewText")}
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
                  <Icon className="text-4xl text-red-600 mb-4" />
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

        {/* Health Facilities */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("health.healthFacilities")}
          </h2>
          <div className="space-y-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className="border-l-4 border-red-500 bg-gray-50 p-4 sm:p-6"
              >
                <h3 className="text-xl font-bold text-government-blue mb-3">
                  {t(facility.nameKey)}
                </h3>
                <p className="text-gray-700 mb-3">{t(facility.descKey)}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">
                      {t("health.capacity")}:
                    </span>{" "}
                    {facility.beds}
                  </div>
                  <div>
                    <span className="font-semibold">{t("health.staff")}:</span>{" "}
                    {facility.staff}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Health Programs */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("health.healthPrograms")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-red-400 to-red-600 text-white rounded-lg p-5 shadow-lg"
              >
                <h3 className="text-lg font-bold mb-2">{t(program.nameKey)}</h3>
                <p className="text-sm">{t(program.detailsKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Helpline */}
        <div className="bg-red-500 text-white rounded-lg p-6 sm:p-8 mb-8 text-center">
          <FaAmbulance className="text-5xl sm:text-6xl mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t("health.emergencyHelpline")}
          </h2>
          <p className="text-xl sm:text-2xl font-bold mb-2">
            📞 108 ({t("health.freeAmbulance")})
          </p>
          <p className="text-lg sm:text-xl">📞 +91-XXXXX-XXXXX (PHC 24/7)</p>
        </div>

        {/* Contact Information */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("dept.contactInfo")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-4">
                {t("health.medicalOfficer")}
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("dept.name")}:</span> डॉ.
                  सारिका पाटील / Dr. Sarika Patil
                </p>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-red-600" />
                  <span>+91-9284080580</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-red-600" />
                  <span className="break-all">health@grampanchayat.gov.in</span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-red-600 mt-1 flex-shrink-0" />
                  <span>Primary Health Center, Village Name</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-4">
                {t("health.opdTimings")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-red-600" />
                  <div>
                    <p className="font-semibold">{t("health.morning")}</p>
                    <p className="text-sm">9:00 AM - 1:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-red-600" />
                  <div>
                    <p className="font-semibold">{t("health.evening")}</p>
                    <p className="text-sm">4:00 PM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-red-600" />
                  <div>
                    <p className="font-semibold">{t("health.emergency")}</p>
                    <p className="text-sm">24/7 {t("health.available")}</p>
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
