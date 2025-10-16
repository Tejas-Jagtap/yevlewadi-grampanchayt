"use client";

import React from "react";
import Link from "next/link";
import { FaImages } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";

const Gallery = () => {
  const { t } = useLanguage();

  const images = [
    {
      id: 1,
      titleKey: "gallery.item1.title",
      categoryKey: "gallery.item2.category",
      src: "/images/photo1.jpeg",
    },
    {
      id: 2,
      titleKey: "gallery.item1.title",
      categoryKey: "gallery.item2.category",
      src: "/images/photo2.jpeg",
    },
    {
      id: 3,
      titleKey: "gallery.item1.title",
      categoryKey: "gallery.item1.category",
      src: "/images/photo3.jpeg",
    },
    {
      id: 4,
      titleKey: "gallery.item1.title",
      categoryKey: "gallery.item2.category",
      src: "/images/photo4.jpeg",
    },
  ];

  return (
    <section className="mt-12 my-8 md:my-12 px-4 sm:px-8 md:px-20">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-[#0A1931] text-white px-6 py-4 flex items-center">
          <FaImages className="text-2xl mr-3" />
          <h2 className="text-2xl font-bold">{t("gallery.title")}</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.map((image) => (
              <div
                key={image.id}
                className="group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-200"
              >
                <div className="relative h-60 sm:h-72 md:h-80 lg:h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                  {image.src ? (
                    <Image
                      src={image.src}
                      alt={t(image.titleKey)}
                      width={150}
                      height={150}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <FaImages className="text-6xl text-gray-400" />
                  )}
                  <div className="absolute inset-0 bg-[#0A1931] bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200"></div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-2xl text-government-blue mb-1">
                    {t(image.titleKey)}
                  </h3>
                  {/* <p className="text-lg text-gray-600">
                    {t(image.categoryKey)}
                  </p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/gallery">
              <button className="bg-[#0A1931] hover:bg-government-orange text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 text-lg">
                {t("gallery.viewFull")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
