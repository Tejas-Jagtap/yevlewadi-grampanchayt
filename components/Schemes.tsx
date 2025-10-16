"use client";

import React from "react";
import Link from "next/link";
import { FaFileAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Schemes = () => {
  const { t } = useLanguage();

  const schemes = [
    {
      id: 1,
      nameKey: "schemes.pmAwas",
      descriptionKey: "schemes.pmAwas.desc",
    },
    {
      id: 2,
      nameKey: "schemes.mgnrega",
      descriptionKey: "schemes.mgnrega.desc",
    },
    {
      id: 3,
      nameKey: "schemes.swachh",
      descriptionKey: "schemes.swachh.desc",
    },
    {
      id: 4,
      nameKey: "schemes.pmKisan",
      descriptionKey: "schemes.pmKisan.desc",
    },
    {
      id: 5,
      nameKey: "schemes.ayushman",
      descriptionKey: "schemes.ayushman.desc",
    },
    {
      id: 6,
      nameKey: "schemes.beti",
      descriptionKey: "schemes.beti.desc",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
        <FaFileAlt className="text-3xl mr-3" />
        <h2 className="text-3xl font-bold">{t("schemes.title")}</h2>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {schemes.map((scheme) => (
            <li
              key={scheme.id}
              className="border-b border-gray-200 pb-3 last:border-0 hover:bg-gray-50 p-2 rounded transition-colors duration-200 cursor-pointer"
            >
              <h3 className="font-semibold text-government-blue text-lg mb-1">
                {t(scheme.nameKey)}
              </h3>
              <p className="text-sm text-gray-600">
                {t(scheme.descriptionKey)}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-4 text-center">
          <Link href="/schemes">
            <button className="text-[#F6FAFD] bg-[#0A1931] hover:bg-[#4A7FA7] font-semibold text-lg transition-colors duration-200 rounded-md px-4 py-3">
              {t("schemes.viewAll")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
