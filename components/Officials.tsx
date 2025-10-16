"use client";

import React from "react";
import { FaUserTie } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";
import Image from "next/image";

const Officials = () => {
  const { t, language } = useLanguage();

  const officials = [
    {
      id: 1,
      MarathiName: "सौ. पूनम दीपक जगताप ",
      EnglishName: "Mrs. Poonam Deepak Jagtap",
      positionKey: "officials.sarpanch",
      image: "/images/sarpanch.jpg",
      phone: "+91-9322852551",
      phoneDevnagari: "+९१-९३२२८५२५५१",
    },
    {
      id: 2,
      MarathiName: "श्री. मयूर भीमराव जगताप ",
      EnglishName: "Mr. Mayur Bhimrao Jagtap",
      positionKey: "officials.upSarpanch",
      image: "/images/upsarpanch.jpg",
      phone: "+91-96233747481",
      phoneDevnagari: "+९१-९६२३७४७४८१",
    },
    {
      id: 3,
      MarathiName: "श्री. सुरेश सुभाष पाटील ",
      EnglishName: "Mr. Suresh Subhash Patil",
      positionKey: "officials.secretary",
      image: "/images/gramsevak.jpg",
      phone: "+91-9730749669",
      phoneDevnagari: "+९१-९७३०७४९६६९",
    },
  ];

  return (
    <section className="mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
          <FaUserTie className="text-2xl mr-3" />
          <h2 className="text-2xl font-bold">{t("officials.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {officials.map((official) => (
              <div
                key={official.id}
                className="text-center group hover:shadow-xl transition-shadow duration-200 p-6 rounded-lg border border-gray-200"
              >
                <div className="w-52 h-52 mx-auto mb-4 rounded-full bg-gradient-to-br from-government-orange to-government-green p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                    {/* <FaUserTie className="text-5xl text-gray-400" /> */}
                    <Image
                      src={official.image}
                      alt="Maharashtra Logo"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-government-blue mb-2">
                  {language === "mr"
                    ? official.MarathiName
                    : official.EnglishName}
                </h3>
                <p className="text-gray-600 text-lg">
                  {language === "en" ? official.phone : official.phoneDevnagari}
                </p>
                <p className="text-government-orange font-semibold text-lg mt-2">
                  {t(official.positionKey)}
                </p>
              </div>
            ))}
            <Link
              href="/about/administration"
              className="text-center group hover:shadow-xl transition-shadow duration-200 p-6 rounded-lg border border-gray-200 backdrop-blur-sm block"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-government-orange to-government-green p-1 blur">
                <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mb-4">
                  <FaUserTie className="text-5xl text-gray-400" />
                </div>
              </div>
              <h3 className="font-bold text-2xl text-government-blue mb-2 blur">
                {"official.MarathiName"}
              </h3>
              <h3 className="font-bold text-2xl text-government-blue mb-2 blur">
                {"official.EnglishName"}
              </h3>
              <p className="text-gray-600 text-lg blur">{"official.phone"}</p>
              <p className="text-government-orange font-semibold text-lg mt-2 blur">
                "official.positionKey"
              </p>
              <span className="inline-block bg-[#0A1931] hover:bg-[#142b4a] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                {t("officials.moreDetails")}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Officials;
