import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Header.css";

// Import images
import logoZanzibar from "../assets/logo/logo-zanzibar.png";
import logoZafiri from "../assets/logo/zafiri.png";
import back1 from "../assets/home/back1.jpg";
import back2 from "../assets/home/back2.jpg";
import back3 from "../assets/home/back3.jpg";
import back4 from "../assets/home/back4.jpg";
import back5 from "../assets/home/back5.jpg";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [currentTime, setCurrentTime] = useState("");
  const [currentDay, setCurrentDay] = useState("");
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const backgrounds = [back1, back2, back3, back4, back5];

  // Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Africa/Dar_es_Salaam" })
      );
      setCurrentTime(now.toLocaleTimeString());
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Day
  useEffect(() => {
    const updateDay = () => {
      const daysEN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      const daysSW = ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];

      const now = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Africa/Dar_es_Salaam" })
      );
      const dayIndex = now.getDay();
      const dayName = i18n.language === "en" ? daysEN[dayIndex] : daysSW[dayIndex];
      const isWorking = dayIndex >= 1 && dayIndex <= 5;

      setCurrentDay(
        isWorking
          ? t("workingDay", { day: dayName })
          : t("weekend", { day: dayName })
      );
    };

    updateDay();
  }, [i18n.language, t]);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <div className="home">
      {/* Top bar */}
      <header className="top-bar">
        <div id="clock">
          <i className="fas fa-clock"></i>
          <span>{currentTime}</span>
        </div>
        <div className="center-info">
          <div id="location">
            <i className="fas fa-map-marker-alt"></i>Zanzibar, Tanzania
          </div>
          <div id="day">
            <i className="fas fa-calendar-alt"></i>
            {currentDay}
          </div>
        </div>
        <select
          id="language-btn"
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="sw">Swahili</option>
        </select>
      </header>

      {/* Scroll banner */}
      <div
        className="scroll-banner"
        style={{ backgroundImage: `url(${backgrounds[currentBgIndex]})` }}
      >
        <div className="logo-left">
          <img src={logoZanzibar} alt="Left Logo" />
        </div>
        <div className="marquee-wrapper">
          <div className="marquee">
            <h1>{t("titleMain")}</h1>
          </div>
          <div className="static-title">
            <h2>{t("marqueeTitle")}</h2>
            <h3>{t("marqueeSubtitle")}</h3>
          </div>
        </div>
        <div className="logo-right">
          <img src={logoZafiri} alt="Right Logo" />
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          aria-expanded={isNavOpen}
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          &#9776;
        </button>

        <ul className={`nav-links ${isNavOpen ? "active" : ""}`}>
          {/* Home */}
          <li>
            <a href="/">{t("navHome")}</a>
          </li>

          {/* About */}
          <li
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={() => toggleDropdown("about")}
          >
            <a href="#">{t("navAbout")}</a>
            <ul className="dropdown-menu">
              <li><a href="/history">{t("aboutHistory")}</a></li>
              <li><a href="/mission">{t("aboutMission")}</a></li>
              <li><a href="/message">{t("aboutMessage")}</a></li>
              <li><a href="/organizationStructure">{t("aboutStructure")}</a></li>
              <li><a href="/organizationStaff">{t("aboutStaff")}</a></li>
            </ul>
          </li>

          {/* Research */}
          <li
            className={`dropdown ${activeDropdown === "research" ? "active" : ""}`}
            onClick={() => toggleDropdown("research")}
          >
            <a href="#">{t("navResearch")}</a>
            <ul className="dropdown-menu">
              <li className="dropdown-sub">
                <a href="#">{t("researchMain")}</a>
                <ul className="dropdown-submenu">
                  <li><a href="/research-ongoing">{t("researchOngoing")}</a></li>
                  <li><a href="/research-complete">{t("researchComplete")}</a></li>
                </ul>
              </li>
              <li className="dropdown-sub">
                <a href="#">{t("projectMain")}</a>
                <ul className="dropdown-submenu">
                  <li><a href="/project-ongoing">{t("projectOngoing")}</a></li>
                  <li><a href="/project-complete">{t("projectComplete")}</a></li>
                </ul>
              </li>
              <li><a href="/area">{t("researchArea")}</a></li>
            </ul>
          </li>

          {/* Departments & Centers */}
          <li
            className={`dropdown ${activeDropdown === "department" ? "active" : ""}`}
            onClick={() => toggleDropdown("department")}
          >
            <a href="#">{t("navDepartment")}</a>
            <ul className="dropdown-menu">
              <li className="dropdown-sub">
                <a href="#">{t("depMain")}</a>
                <ul className="dropdown-submenu">
                  <li><a href="/department-lab">{t("depLab")}</a></li>
                  <li><a href="/department-res">{t("depRes")}</a></li>
                  <li><a href="/department-pla">{t("depAdmin")}</a></li>
                </ul>
              </li>
              <li className="dropdown-sub">
                <a href="#">{t("centerMain")}</a>
                <ul className="dropdown-submenu">
                  <li><a href="/center-pemba">{t("centerPemba")}</a></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Media */}
          <li
            className={`dropdown ${activeDropdown === "media" ? "active" : ""}`}
            onClick={() => toggleDropdown("media")}
          >
            <a href="#">{t("navCenter")}</a>
            <ul className="dropdown-menu">
              <li><a href="/gallery">{t("mediaGallery")}</a></li>
              <li><a href="/news">{t("mediaNews")}</a></li>
              <li><a href="/events">{t("mediaEvents")}</a></li>
            </ul>
          </li>

          {/* Publications */}
          <li>
            <a href="/publication">{t("navPublication")}</a>
          </li>

          {/* Services */}
          <li>
            <a href="/services">{t("navService")}</a>
          </li>

          {/* Contact */}
          <li>
            <a href="/contact">{t("navContact")}</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
