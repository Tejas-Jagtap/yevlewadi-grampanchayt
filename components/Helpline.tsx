"use client";

import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Helpline = () => {
  const { t } = useLanguage();

  const helplines = [
    { nameKey: "helpline.emergency", number: "112" },
    { nameKey: "helpline.ambulance", number: "102" },
    { nameKey: "helpline.police", number: "100" },
    { nameKey: "helpline.fire", number: "101" },
    { nameKey: "helpline.women", number: "1091" },
    { nameKey: "helpline.child", number: "1098" },
    { nameKey: "helpline.senior", number: "14567" },
    { nameKey: "helpline.farmer", number: "1551" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-red-600 text-white px-6 py-4 flex items-center">
        <FaPhoneAlt className="text-3xl mr-3" />
        <h2 className="text-3xl font-bold">{t("helpline.title")}</h2>
      </div>
      <div className="p-6">
        <div className="space-y-2">
          {helplines.map((helpline, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 hover:bg-gray-50 rounded transition-colors duration-200"
            >
              <span className="text-lg text-gray-700">
                {t(helpline.nameKey)}
              </span>
              <span className="font-bold  text-lg text-government-blue">
                {helpline.number}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Helpline;
