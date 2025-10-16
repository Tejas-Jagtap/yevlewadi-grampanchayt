"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    setCurrentDate(new Date().toLocaleDateString());
  }, []);
  return (
    <footer className="bg-gradient-to-b from-navy-darkest to-navy-deep text-white mt-12">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {t("footer.about")}
            </h3>
            <p className="text-navy-light text-sm leading-relaxed opacity-90">
              {t("footer.aboutText")}
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href="www.facebook.com/share/1523utnZ5E/
"
                className="text-navy-light hover:text-navy-medium transition-colors"
              >
                <FaFacebook size={20} />
              </Link>
              
              {/* <a
                href="#"
                className="text-navy-light hover:text-navy-medium transition-colors"
              >
                <FaTwitter size={20} />
              </a> */}
              <Link
                href="https://youtube.com/channel/UCLdzI90lQTRYNbgZXNgkPAQ?si=7TKU7WI2bMmR8gHp"
                className="text-navy-light hover:text-navy-medium transition-colors"
              >
                <FaYoutube size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/aapli_grampanchayat_yewlewadi?igsh=aWg5bzQzeGU1Zjcx"
                className="text-navy-light hover:text-navy-medium transition-colors"
              >
                <FaInstagram size={20} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/departments"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.departments")}
                </Link>
              </li>
              <li>
                <Link
                  href="/schemes"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.schemes")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {t("footer.importantLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://india.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  India.gov.in
                </a>
              </li>
              <li>
                <a
                  href="https://maharashtra.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Maharashtra Government
                </a>
              </li>
              <li>
                <a
                  href="https://digitalindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Digital India
                </a>
              </li>
              <li>
                <a
                  href="https://mygov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  MyGov
                </a>
              </li>
              <li>
                <a
                  href="https://pmindia.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  PM India
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-navy-light">
              {t("footer.contactUs")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <FaMapMarkerAlt className="text-navy-light mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  {t("footer.office")}
                  <br />
                  {t("header.village")}
                  <br />
                  {t("header.district")}
                </span>
              </li>
              {/* <li className="flex items-center space-x-2">
                <FaPhone className="text-navy-light rotate-90" />
                <span className="text-gray-400">+91-XXX-XXXXXXX</span>
              </li> */}
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-navy-light" />
                <span className="text-gray-400">yewalewadi@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-lg text-gray-400 text-center md:text-left">
              <p>{t("footer.copyright")}</p>
              <p className="mt-1">
                {t("footer.content")}{" "}
                <a
                  href="https://ascentaconsulting.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy-light text-lg hover:text-white"
                >
                  Ascenta consulting
                </a>
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.digitalindia.gov.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-xs text-gray-400 hover:text-white">
                  Digital India
                </span>
              </a>
              <span className="text-gray-600">|</span>
              <span className="text-xs text-gray-400">
                {t("footer.lastUpdated")} {currentDate}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
