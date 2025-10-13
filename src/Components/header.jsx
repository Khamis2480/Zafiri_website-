import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";  // ✅ Added Link
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

  // 🕒 Clock
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

  // 📅 Day
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

  // 🖼️ Background slideshow
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
            <Link to="/">{t("navHome")}</Link>
          </li>

          {/* About */}
          <li
            className={`dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onClick={() => toggleDropdown("about")}
          >
            <Link to="#">{t("navAbout")}</Link>
            <ul className="dropdown-menu">
              <li><Link to="/history">{t("aboutHistory")}</Link></li>
              <li><Link to="/mission">{t("aboutMission")}</Link></li>
              <li><Link to="/message">{t("aboutMessage")}</Link></li>
              <li><Link to="/organizationStructure">{t("aboutStructure")}</Link></li>
              <li><Link to="/organizationStaff">{t("aboutStaff")}</Link></li>
            </ul>
          </li>

          {/* Research */}
          <li
            className={`dropdown ${activeDropdown === "research" ? "active" : ""}`}
            onClick={() => toggleDropdown("research")}
          >
            <Link to="#">{t("navResearch")}</Link>
            <ul className="dropdown-menu">
              <li className="dropdown-sub">
                <Link to="#">{t("researchMain")}</Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/">{t("researchOngoing")}</Link></li>
                  <li><Link to="/">{t("researchComplete")}</Link></li>
                </ul>
              </li>
              <li className="dropdown-sub">
                <Link to="#">{t("projectMain")}</Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/ongoingProjects">{t("projectOngoing")}</Link></li>
                  <li><Link to="/">{t("projectComplete")}</Link></li>
                </ul>
              </li>
              <li><Link to="/area">{t("researchArea")}</Link></li>
            </ul>
          </li>

          {/* Departments & Centers */}
          <li
            className={`dropdown ${activeDropdown === "department" ? "active" : ""}`}
            onClick={() => toggleDropdown("department")}
          >
            <Link to="#">{t("navDepartment")}</Link>
            <ul className="dropdown-menu">
              <li className="dropdown-sub">
                <Link to="#">{t("depMain")}</Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/department-lab">{t("depLab")}</Link></li>
                  <li><Link to="/department-res">{t("depRes")}</Link></li>
                  <li><Link to="/department-pla">{t("depAdmin")}</Link></li>
                </ul>
              </li>
              <li className="dropdown-sub">
                <Link to="#">{t("centerMain")}</Link>
                <ul className="dropdown-submenu">
                  <li><Link to="/center">{t("centerPemba")}</Link></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Media */}
          <li
            className={`dropdown ${activeDropdown === "media" ? "active" : ""}`}
            onClick={() => toggleDropdown("media")}
          >
            <Link to="#">{t("navCenter")}</Link>
            <ul className="dropdown-menu">
              <li><Link to="/gallery">{t("mediaGallery")}</Link></li>
              <li><Link to="/news">{t("mediaNews")}</Link></li>
              <li><Link to="/events">{t("mediaEvents")}</Link></li>
            </ul>
          </li>

          {/* Publications */}
          <li>
            <Link to="/publication">{t("navPublication")}</Link>
          </li>

          {/* Services */}
          <li>
            <Link to="/services">{t("navService")}</Link>
          </li>

          {/* Contact */}
          <li>
            <Link to="/contact">{t("navContact")}</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
