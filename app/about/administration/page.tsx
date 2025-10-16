"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  FaUserTie,
  FaUsers,
  FaClipboardList,
  FaBalanceScale,
  FaPhoneAlt,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

export default function AdministrationPage() {
  const { t, language } = useLanguage();

  const electedMembers = [
    {
      id: 1,
      MarathiName: "श्री. संतोष भिमराव जगताप ",
      EnglishName: "Mr. Santosh Bhimrao Jagtap",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-9359940104",
      phoneDevnagari: "+९१-९३५९९४०१०४",
    },
    {
      id: 2,
      MarathiName: "श्री. महादेव रघुनाथ जाधव ",
      EnglishName: "Mr. Mahadev Ragunath Jadhav",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-9209235313",
      phoneDevnagari: "+९१-९२०९२३५३१३",
    },
    {
      id: 3,
      MarathiName: "सौ. शोभा एकनाथ जगताप",
      EnglishName: "Mrs. Shobha Eknath Jagtap",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-9049604170",
      phoneDevnagari: "+९१-९०४९६०४१७०",
    },
    {
      id: 4,
      MarathiName: "सौ. अपर्णा सचिन सावंत ",
      EnglishName: "Mrs. Aparna Sachin Sawant",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-8007422285",
      phoneDevnagari: "+९१-८००७४२२२८५",
    },
    {
      id: 5,
      MarathiName: "सौ. सोनाली प्रकाश जगताप ",
      EnglishName: "Mrs. Sonali Prakash Jagtap",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-7387431262",
      phoneDevnagari: "+९१-७३८७४३१२६२",
    },
    {
      id: 6,
      MarathiName: "सौ. शांताबाई अधिक जगताप ",
      EnglishName: "Mrs. Shantabai Adhik Jagtap",
      positionKey: "officials.member",
      position: "Ward Member / वार्ड सदस्य",
      image: "/images/official3.jpg",
      phone: "+91-8380804739",
      phoneDevnagari: "+९१-८३८०८०४७३९",
    },
  ];

  const administrativeStaff = [
    {
      id: 7,
      MarathiName: "संतोष भिमराव पाटील",
      EnglishName: "Santosh Bhimrao Patil",
      position: "पोलीस पाटील /Police Patil",
      image: "/images/official3.jpg",
      phone: "+91-9270001001",
      phoneDevnagari: "+९१-९२७०००१००१",
    },
    {
      id: 8,
      MarathiName: "संतोष जयवंत जगताप ",
      EnglishName: "Santosh Jaywant Jagtap",
      position:
        "तंटामुक्ती अध्यक्ष / President, Dispute-Free Village Committee",
      image: "/images/official3.jpg",
      phone: "+91-9689845978",
      phoneDevnagari: "+९१-९६८९८४५९७८",
    },
  ];

  const committees = [
    {
      nameKey: "admin.standingCommittee",
      icon: FaClipboardList,
      members: 5,
      responsibilityKey: "admin.standingResp",
    },
    {
      nameKey: "admin.financeCommittee",
      icon: FaBalanceScale,
      members: 4,
      responsibilityKey: "admin.financeResp",
    },
    {
      nameKey: "admin.developmentCommittee",
      icon: FaUsers,
      members: 6,
      responsibilityKey: "admin.developmentResp",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("nav.about.administration")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("admin.subtitle")}
          </p>
        </div>

        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <FaUserTie className="text-4xl sm:text-5xl text-government-orange mr-4" />
            <h2 className="text-2xl sm:text-3xl font-bold text-government-blue">
              {t("admin.aboutAdministration")}
            </h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            {t("admin.adminText1")}
          </p>
        </section>

        {/* Elected Members */}
        <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.electedReps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {electedMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-r from-government-blue to-government-green p-4 text-white text-center">
                  <div className="w-24 h-24 mx-auto mb-3 rounded-full overflow-hidden border-4 border-white">
                    {/* <Image
                      src={"/images/gramsevak.jpeg"}
                      alt={"member.name"}
                      width={500}
                      height={500}
                      className="w-full h-full object-cover"
                    /> */}
                    <FaUserCircle />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    {language === "mr"
                      ? member.position.includes("Sarpanch")
                        ? "सरपंच"
                        : member.position.includes("Up-Sarpanch")
                        ? "उपसरपंच"
                        : "वार्ड सदस्य"
                      : member.position.split(" / ")[0]}
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-government-blue mb-2">
                    {language === "mr"
                      ? member.MarathiName
                      : member.EnglishName}
                  </h4>
                  {/* <p className="text-gray-600 text-sm mb-4">{member.ward}</p> */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaPhoneAlt className="text-government-orange" />
                      <span>
                        {language === "en"
                          ? member.phone
                          : member.phoneDevnagari}
                      </span>
                    </div>
                    {/* <div className="flex items-center gap-2 text-sm text-gray-700"> */}
                    {/* <FaEnvelope className="text-government-orange" /> */}
                    {/* <span className="break-all">{member.email}</span> */}
                    {/* </div> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Administrative Staff */}
        {/* <section className="bg-white rounded-lg shadow-lg p-6 sm:p-8 mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.adminStaff")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {administrativeStaff.map((staff, index) => (
              <div
                key={index}
                className="border-l-4 border-government-orange pl-4 py-4 hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg sm:text-xl font-bold text-government-blue mb-2">
                  {language === "en" ? staff.EnglishName : staff.MarathiName}
                </h3>
                <p className="text-government-orange font-semibold mb-1">
                  {staff.position}
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  {t(`${staff.position}`)}
                </p>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <FaPhoneAlt className="text-government-orange text-xs" />
                    <span>
                      {language === "en" ? staff.phone : staff.phoneDevnagari}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700"> */}
        {/* <FaEnvelope className="text-government-orange text-xs" /> */}
        {/* <span className="break-all">{staff.email}</span> */}
        {/* </div>
                </div>
              </div>
            ))}
          </div>
        </section> */}

        {/* Committees */}
        {/* <section className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-government-blue mb-6">
            {t("admin.panchayatCommittees")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {committees.map((committee, index) => {
              const Icon = committee.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <Icon className="text-4xl text-government-orange mb-4" />
                  <h3 className="text-xl font-bold text-government-blue mb-3">
                    {t(committee.nameKey)}
                  </h3>
                  <div className="space-y-2 text-gray-700">
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.members")}:
                      </span>{" "}
                      {committee.members}
                    </p>
                    <p className="text-sm">
                      <span className="font-semibold">
                        {t("admin.responsibility")}:
                      </span>
                      <br />
                      {t(committee.responsibilityKey)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Governance Structure */}
        <section className="bg-[#4A7FA7] text-white rounded-lg p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            {t("admin.governanceStructure")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-bold mb-3">
                {t("admin.electedBody")}
              </h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>
                  • {t("admin.sarpanch")} - {t("admin.electedHead")}
                </li>
                <li>
                  • {t("admin.upSarpanch")} - {t("admin.deputyHead")}
                </li>
                <li>
                  • {t("admin.wardMember")} - {t("admin.wardMembers4")}
                </li>
                <li>
                  • {t("admin.standingCommittee")} -{" "}
                  {t("admin.standingCommitteeMembers")}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">{t("admin.functions")}</h3>
              <ul className="space-y-2 text-base sm:text-lg">
                <li>• {t("admin.function1")}</li>
                <li>• {t("admin.function2")}</li>
                <li>• {t("admin.function3")}</li>
                <li>• {t("admin.function4")}</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
