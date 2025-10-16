"use client";

import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaGraduationCap,
  FaSchool,
  FaBook,
  FaChalkboardTeacher,
  FaUserGraduate,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function EducationPage() {
  const { t, language } = useLanguage();

  const services = [
    {
      titleKey: "edu.primaryEducation",
      descKey: "edu.primaryEducationDesc",
      icon: FaSchool,
    },
    {
      titleKey: "edu.midDayMeal",
      descKey: "edu.midDayMealDesc",
      icon: FaBook,
    },
    {
      titleKey: "edu.teacherTraining",
      descKey: "edu.teacherTrainingDesc",
      icon: FaChalkboardTeacher,
    },
    {
      titleKey: "edu.scholarships",
      descKey: "edu.scholarshipsDesc",
      icon: FaUserGraduate,
    },
  ];

  const schools = [
    {
      nameKey: "edu.gpPrimarySchool",
      typeKey: "edu.primaryType",
      students: 245,
      teachers: 8,
      facilitiesKey: "edu.primaryFacilities",
    },
    {
      nameKey: "edu.secondarySchool",
      typeKey: "edu.secondaryType",
      students: 180,
      teachers: 12,
      facilitiesKey: "edu.secondaryFacilities",
    },
    {
      nameKey: "edu.anganwadiCenters",
      typeKey: "edu.prePrimaryType",
      students: 120,
      teachers: 5,
      facilitiesKey: "edu.anganwadiFacilities",
    },
  ];

  const programs = [
    {
      nameKey: "edu.samagraShiksha",
      descKey: "edu.samagraShikshaDesc",
    },
    {
      nameKey: "edu.betiBachao",
      descKey: "edu.betiBachaoDesc",
    },
    {
      nameKey: "edu.digitalLiteracy",
      descKey: "edu.digitalLiteracyDesc",
    },
    {
      nameKey: "edu.sportsDev",
      descKey: "edu.sportsDevDesc",
    },
    {
      nameKey: "edu.adultLiteracy",
      descKey: "edu.adultLiteracyDesc",
    },
    {
      nameKey: "edu.libraryServices",
      descKey: "edu.libraryServicesDesc",
    },
  ];

  const achievements = [
    {
      year: "2024",
      achievementKey: "edu.achievement1",
      detailsKey: "edu.achievement1Details",
    },
    {
      year: "2023",
      achievementKey: "edu.achievement2",
      detailsKey: "edu.achievement2Details",
    },
    {
      year: "2022",
      achievementKey: "edu.achievement3",
      detailsKey: "edu.achievement3Details",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-5xl sm:text-6xl mr-4" />
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                {t("dept.education")}
              </h1>
              <p className="text-base sm:text-lg opacity-90">
                {t("edu.subtitle")}
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
            {t("edu.overviewText")}
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
                  <Icon className="text-4xl text-blue-600 mb-4" />
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

        {/* Schools */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("edu.educationalInstitutions")}
          </h2>
          <div className="space-y-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="border-l-4 border-blue-500 bg-gray-50 p-4 sm:p-6"
              >
                <h3 className="text-xl font-bold text-government-blue mb-3">
                  {t(school.nameKey)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
                  <div>
                    <span className="font-semibold">{t("edu.type")}:</span>{" "}
                    {t(school.typeKey)}
                  </div>
                  <div>
                    <span className="font-semibold">{t("edu.students")}:</span>{" "}
                    {school.students}
                  </div>
                  <div>
                    <span className="font-semibold">{t("edu.teachers")}:</span>{" "}
                    {school.teachers}
                  </div>
                  <div>
                    <span className="font-semibold">{t("edu.ratio")}:</span> 1:
                    {Math.round(school.students / school.teachers)}
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">{t("edu.facilities")}:</span>{" "}
                  {t(school.facilitiesKey)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Programs */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("edu.educationPrograms")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-5 shadow-lg"
              >
                <h3 className="text-lg font-bold mb-2">{t(program.nameKey)}</h3>
                <p className="text-sm">{t(program.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("edu.recentAchievements")}
          </h2>
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg"
              >
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  {achievement.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-government-blue mb-1">
                    {t(achievement.achievementKey)}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {t(achievement.detailsKey)}
                  </p>
                </div>
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
                {t("edu.educationOfficer")}
              </h3>
              <div className="space-y-3">
                <p className="text-gray-700">
                  <span className="font-semibold">{t("dept.name")}:</span>{" "}
                  श्रीमती सविता जोशी / Mrs. Savita Joshi
                </p>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaPhoneAlt className="text-blue-600" />
                  <span>+91-XXXXX-XXXXX</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaEnvelope className="text-blue-600" />
                  <span className="break-all">
                    education@grampanchayat.gov.in
                  </span>
                </div>
                <div className="flex items-start gap-2 text-gray-700">
                  <FaMapMarkerAlt className="text-blue-600 mt-1 flex-shrink-0" />
                  <span>Gram Panchayat Office, Village Name</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-government-blue mb-4">
                {t("edu.schoolTimings")}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-blue-600" />
                  <div>
                    <p className="font-semibold">{t("edu.primarySchool")}</p>
                    <p className="text-sm">9:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-blue-600" />
                  <div>
                    <p className="font-semibold">{t("edu.secondarySchool")}</p>
                    <p className="text-sm">8:30 AM - 4:30 PM</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-blue-600" />
                  <div>
                    <p className="font-semibold">{t("edu.library")}</p>
                    <p className="text-sm">10:00 AM - 6:00 PM</p>
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
