"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Navigation = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems = [
    { nameKey: "nav.home", href: "/", hasDropdown: false },
    {
      nameKey: "nav.about",
      href: "/about",
      hasDropdown: true,
      dropdownItems: [
        { nameKey: "nav.about.introduction", href: "/about/introduction" },
        // { nameKey: "nav.about.history", href: "/about/history" },
        { nameKey: "nav.about.administration", href: "/about/administration" },
      ],
    },
    // {
    //   nameKey: "nav.departments",
    //   href: "/departments",
    //   hasDropdown: true,
    //   dropdownItems: [
    //     {
    //       nameKey: "nav.departments.agriculture",
    //       href: "/departments/agriculture",
    //     },
    //     { nameKey: "nav.departments.health", href: "/departments/health" },
    //     {
    //       nameKey: "nav.departments.education",
    //       href: "/departments/education",
    //     },
    //     {
    //       nameKey: "nav.departments.social",
    //       href: "/departments/social-welfare",
    //     },
    //   ],
    // },
    { nameKey: "nav.departments", href: "/departments", hasDropdown: false },
    // { nameKey: "nav.schemes", href: "/schemes/local", hasDropdown: false },
    // { nameKey: "nav.services", href: "/services", hasDropdown: false },
    // { nameKey: "nav.news", href: "/news", hasDropdown: false },
    { nameKey: "nav.gallery", href: "/gallery", hasDropdown: false },
    { nameKey: "nav.contact", href: "/contact", hasDropdown: false },
  ];

  return (
    <nav className="bg-[#0A1931] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1 w-full justify-center  text-xl ">
            {menuItems.map((item) => (
              <div
                key={item.nameKey}
                className="relative group"
                onMouseEnter={() =>
                  item.hasDropdown && setActiveDropdown(item.nameKey)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 hover:bg-navy-medium transition-colors duration-200 flex items-center space-x-1 rounded"
                >
                  <span>{t(item.nameKey)}</span>
                  {item.hasDropdown && <FaChevronDown className="text-xs" />}
                </Link>

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.nameKey && (
                  <div className="absolute left-0 mt-0 w-56 bg-navy-lightest text-navy-darkest rounded-md shadow-lg overflow-hidden">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.nameKey}
                        href={dropItem.href}
                        className="block px-4 py-2 hover:bg-navy-light border-b border-navy-light last:border-0"
                      >
                        {t(dropItem.nameKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-center items-center w-full">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {menuItems.map((item) => (
              <div key={item.nameKey}>
                <Link
                  href={item.href}
                  className="block px-4 py-2 hover:bg-navy-medium transition-colors duration-200"
                  onClick={() => !item.hasDropdown && setIsOpen(false)}
                >
                  {t(item.nameKey)}
                </Link>
                {item.hasDropdown && (
                  <div className="pl-4 bg-navy-darkest bg-opacity-50">
                    {item.dropdownItems?.map((dropItem) => (
                      <Link
                        key={dropItem.nameKey}
                        href={dropItem.href}
                        className="block px-4 py-2 text-sm hover:bg-navy-medium"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(dropItem.nameKey)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
