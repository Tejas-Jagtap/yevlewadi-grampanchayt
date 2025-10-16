"use client";

import React from "react";
import Link from "next/link";
import {
  FaBuilding,
  FaSeedling,
  FaHeartbeat,
  FaGraduationCap,
  FaHammer,
  FaUsers,
} from "react-icons/fa";
import { FaFileAlt, FaPaw } from "react-icons/fa";

import { useLanguage } from "@/contexts/LanguageContext";

const Departments = () => {
  const { t } = useLanguage();

  const departments = [
    {
      id: 1,
      nameKey: "dept.agriculture",
      icon: FaSeedling,
      color: "from-green-400 to-green-600",
      descriptionKey: "dept.agriculture.desc",
      link: "/departments/agriculture",
    },
    {
      id: 2,
      nameKey: "dept.health",
      icon: FaHeartbeat,
      color: "from-red-400 to-red-600",
      descriptionKey: "dept.health.desc",
      link: "/departments/health",
    },
    {
      id: 3,
      nameKey: "dept.animal_husbandry.name",
      icon: FaPaw,
      color: "from-blue-400 to-blue-600",
      descriptionKey: "dept.animal_husbandry.desc",
      link: "/departments/education",
    },
    {
      id: 4,
      nameKey: "dept.Village_Revenue_Officer",
      icon: FaFileAlt,
      color: "from-yellow-400 to-yellow-600",
      descriptionKey: "dept.Village_Revenue_Officer_des",
      link: "/departments",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4">
          <h2 className="text-2xl font-bold">{t("dept.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => {
              const Icon = dept.icon;
              return (
                <Link href="/departments" key={dept.id}>
                  <div className="group cursor-pointer">
                    <div
                      className={`bg-gradient-to-br ${dept.color} text-white p-6 rounded-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1`}
                    >
                      <Icon className="text-6xl mb-3" />
                      <h3 className="font-bold text-3xl mb-1">
                        {t(dept.nameKey)}
                      </h3>
                      <p className="text-lg opacity-90">
                        {t(dept.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
