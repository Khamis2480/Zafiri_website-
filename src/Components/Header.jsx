import React, { useState, useEffect } from "react";
import "./Header.css";

// Import images
import logoZanzibar from "../assets/logo/logo-zanzibar.png";
import logoZafiri from "../assets/logo/zafiri.png";
import back1 from "../assets/home/back1.jpg";
import back2 from "../assets/home/back2.jpg";
import back3 from "../assets/home/back3.jpg";
import back4 from "../assets/home/back4.jpg";
import back5 from "../assets/home/back5.jpg";

const translations = {
  en: {
    workingDay: (day) => `${day} (Working Day)`,
    weekend: (day) => `${day} (Weekend)`,
    titleMain: "MINISTRY OF BLUE ECONOMY AND FISHERIES",
    marqueeTitle: "ZANZIBAR FISHERIES AND MARINE RESOURCES RESEARCH INSTITUTE",
    marqueeSubtitle: "(ZAFIRI)",
    navHome: "Home",
    navAbout: "About Us",
    navResearch: "Research & Projects",
    navDepartment: "Departments & Centers",
    navCenter: "Media",
    navPublication: "Publications",
    navContact: "Contact Us",
    navService: "Services",
  },
  sw: {
    workingDay: (day) => `${day} (Siku ya Kazi)`,
    weekend: (day) => `${day} (Siku ya Mapumziko)`,
    titleMain: "WIZARA YA BIASHARA YA BLUU NA UVUVI",
    marqueeTitle:
      "KITUO CHA UCHUNGUZI WA UVUVI NA RASILIMALI ZA BAHARI ZANZIBAR",
    marqueeSubtitle: "(ZAFIRI)",
    navHome: "Nyumbani",
    navAbout: "Kuhusu",
    navResearch: "Utafiti na Miradi",
    navDepartment: "Idara na Vituo",
    navCenter: "Kituo cha Habari",
    navPublication: "Machapisho",
    navContact: "Wasiliana nasi",
    navService: "Huduma",

  },
};

const Header = () => {
  const [currentLang, setCurrentLang] = useState("en");
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
        new Date().toLocaleString("en-US", {
          timeZone: "Africa/Dar_es_Salaam",
        })
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
      const daysEN = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const daysSW = [
        "Jumapili",
        "Jumatatu",
        "Jumanne",
        "Jumatano",
        "Alhamisi",
        "Ijumaa",
        "Jumamosi",
      ];

      const now = new Date(
        new Date().toLocaleString("en-US", {
          timeZone: "Africa/Dar_es_Salaam",
        })
      );
      const dayIndex = now.getDay();
      const dayName = currentLang === "en" ? daysEN[dayIndex] : daysSW[dayIndex];
      const isWorking = dayIndex >= 1 && dayIndex <= 5;

      setCurrentDay(
        isWorking
          ? translations[currentLang].workingDay(dayName)
          : translations[currentLang].weekend(dayName)
      );
    };

    updateDay();
  }, [currentLang]);

  // Background slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const toggleDropdown = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
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
          value={currentLang}
          onChange={(e) => setCurrentLang(e.target.value)}
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
            <h1>{translations[currentLang].titleMain}</h1>
          </div>
          <div className="static-title">
            <h2>{translations[currentLang].marqueeTitle}</h2>
            <h3>{translations[currentLang].marqueeSubtitle}</h3>
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
          <li>
            <a href="/" onClick={() => setIsNavOpen(false)}>
              {translations[currentLang].navHome}
            </a>
          </li>

          {/* About */}
          <li 
            className={`dropdown ${activeDropdown === 'about' ? 'active' : ''}`}
            onClick={() => toggleDropdown('about')}
          >
            <a href="#">{translations[currentLang].navAbout}</a>
            <ul className="dropdown-menu">
              <li><a href="/about/history" onClick={() => setIsNavOpen(false)}>History</a></li>
              <li><a href="/about/mission" onClick={() => setIsNavOpen(false)}>Mission & Vision</a></li>
              <li><a href="/about/director" onClick={() => setIsNavOpen(false)}>Director's Message</a></li>
              <li><a href="/about/organization" onClick={() => setIsNavOpen(false)}>Organization Structure</a></li>
              <li><a href="/about/board" onClick={() => setIsNavOpen(false)}>Organization Board</a></li>
            </ul>
          </li>

          {/* Research */}
          <li 
            className={`dropdown ${activeDropdown === 'research' ? 'active' : ''}`}
            onClick={() => toggleDropdown('research')}
          >
            <a href="#">{translations[currentLang].navResearch}</a>
            <ul className="dropdown-menu">
              <li><a href="/research/complete" onClick={() => setIsNavOpen(false)}>Complete</a></li>
              <li><a href="/research/ongoing" onClick={() => setIsNavOpen(false)}>Ongoing</a></li>
              <li><a href="/research/areas" onClick={() => setIsNavOpen(false)}>Research Areas</a></li>
              <li><a href="/research/publications" onClick={() => setIsNavOpen(false)}>Publications</a></li>
            </ul>
          </li>

          {/* Departments & Centers with sub-dropdowns */}
          <li 
            className={`dropdown ${activeDropdown === 'department' ? 'active' : ''}`}
            onClick={() => toggleDropdown('department')}
          >
            <a href="#">{translations[currentLang].navDepartment}</a>
            <ul className="dropdown-menu">
              <li className="dropdown-sub">
                <a href="#">Departments ▸</a>
                <ul className="dropdown-submenu">
                  <li><a href="/department-lab" onClick={() => setIsNavOpen(false)}>Laboratory</a></li>
                  <li><a href="/department-res" onClick={() => setIsNavOpen(false)}>Research</a></li>
                  <li><a href="/departments/administration" onClick={() => setIsNavOpen(false)}>Administration</a></li>
                </ul>
              </li>
              <li className="dropdown-sub">
                <a href="#">Centers ▸</a>
                <ul className="dropdown-submenu">
                  <li><a href="/centers/unguja" onClick={() => setIsNavOpen(false)}>Unguja Center</a></li>
                  <li><a href="/centers/pemba" onClick={() => setIsNavOpen(false)}>Pemba Center</a></li>
                </ul>
              </li>
            </ul>
          </li>

          {/* Media */}
          <li 
            className={`dropdown ${activeDropdown === 'media' ? 'active' : ''}`}
            onClick={() => toggleDropdown('media')}
          >
            <a href="#">{translations[currentLang].navCenter}</a>
            <ul className="dropdown-menu">
              <li><a href="/media/gallery" onClick={() => setIsNavOpen(false)}>Gallery</a></li>
              <li><a href="/media/news" onClick={() => setIsNavOpen(false)}>News</a></li>
            </ul>
          </li>

          {/* Publications */}
          <li>
            <a href="/publications" onClick={() => setIsNavOpen(false)}>
              {translations[currentLang].navPublication}
            </a>
          </li>

          {/* Services - ADDED THIS */}
          <li>
            <a href="/services" onClick={() => setIsNavOpen(false)}>
              {translations[currentLang].navService}
            </a>
          </li>


          {/* Contact */}
          <li>
            <a href="/contact" onClick={() => setIsNavOpen(false)}>
              {translations[currentLang].navContact}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;