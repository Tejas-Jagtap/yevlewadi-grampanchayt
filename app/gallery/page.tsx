"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaImage, FaTimes } from "react-icons/fa";

export default function GalleryPage() {
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const categories = [
    { id: "all", nameKey: "gallery.allPhotos" },
    { id: "events", nameKey: "gallery.events" },
    { id: "development", nameKey: "gallery.development" },
    { id: "schemes", nameKey: "gallery.schemes" },
    { id: "festivals", nameKey: "gallery.festivals" },
    { id: "office", nameKey: "gallery.officeTitle" },
  ];

  const images = [
    {
      id: 1,
      category: "development",
      titleKey: "gallery.office",
      date: "14 Oct 2025",
      src: "/images/photo1.jpeg",
    },
    {
      id: 2,
      category: "development",
      titleKey: "gallery.GrampanchayatHall",
      date: "4 Mar 2024",
      src: "/images/photo2.jpeg",
    },
    {
      id: 3,
      category: "development",
      titleKey: "gallery.pmAwasDistribution",
      date: "14 Oct 2025",
      src: "/images/photo3.jpeg",
    },
    {
      id: 4,
      category: "development",
      titleKey: "gallery.Shivaji_MaharajFestival",
      date: "19 Sep 2024",
      src: "/images/photo4.jpeg",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="bg-[#0A1931] text-white rounded-lg p-6 sm:p-8 mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("gallery.photoGallery")}
          </h1>
          <p className="text-base sm:text-lg opacity-90">
            {t("gallery.description")}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
            <FaImage className="text-3xl sm:text-4xl text-government-orange mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-government-blue">
              {images.length}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("gallery.totalPhotos")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
            <FaImage className="text-3xl sm:text-4xl text-government-green mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-government-blue">
              {images.filter((img) => img.category === "events").length}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("gallery.events")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
            <FaImage className="text-3xl sm:text-4xl text-government-blue mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-government-blue">
              {images.filter((img) => img.category === "development").length}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("gallery.development")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
            <FaImage className="text-3xl sm:text-4xl text-government-orange mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-government-blue">
              {images.filter((img) => img.category === "festivals").length}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("gallery.festivals")}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 text-center">
            <FaImage className="text-3xl sm:text-4xl text-government-orange mx-auto mb-2" />
            <p className="text-2xl sm:text-3xl font-bold text-government-blue">
              {images.filter((img) => img.category === "festivals").length}
            </p>
            <p className="text-xs sm:text-sm text-gray-600">
              {t("gallery.office")}
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-200 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? "bg-[#0A1931] text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {t(category.nameKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image.id)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 sm:h-64 overflow-hidden">
                <Image
                  src={image.src}
                  alt={t(image.titleKey)}
                  width={150}
                  height={150}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <FaImage className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-3 sm:p-4">
                <h3 className="font-bold text-government-blue mb-1 line-clamp-1 text-sm sm:text-base">
                  {t(image.titleKey)}
                </h3>
                <p className="text-xs text-gray-500">{image.date}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-3xl sm:text-4xl hover:text-government-orange transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            {images
              .filter((img) => img.id === selectedImage)
              .map((image) => (
                <div
                  key={image.id}
                  className="max-w-5xl w-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Image
                    src={image.src}
                    alt={t(image.titleKey)}
                    width={1600}
                    height={1067}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="bg-white p-4 sm:p-6 rounded-b-lg">
                    <h2 className="text-xl sm:text-2xl font-bold text-government-blue mb-2">
                      {t(image.titleKey)}
                    </h2>
                    <p className="text-sm text-gray-500">{image.date}</p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {/* Upload Section */}
        {/* <div className="mt-12 bg-[#01A3D6] text-white rounded-lg p-6 sm:p-8">
          <div className="max-w-3xl mx-auto text-center">
            <FaImage className="text-5xl sm:text-6xl mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              {t("gallery.sharePhotos")}
            </h2>
            <p className="text-base sm:text-lg mb-6 opacity-90">
              {t("gallery.shareDescription")}
            </p>
            <button className="bg-white text-government-orange px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base">
              {t("gallery.uploadPhotos")}
            </button>
          </div>
        </div> */}
      </div>
    </main>
  );
}
