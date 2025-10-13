import React from 'react';
import { useTranslation } from 'react-i18next';
import './History.css';

// Import images (adjust paths as needed)
import heroImage from '../../assets/histo/history image.jpg';
import zafiriBuilding from '../../assets/histo/zafir-building.jpg';

const History = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>{t("history.hero.title")}</h1>
          <div className="breadcrumb">
            <a href="/">{t("history.breadcrumb.home")}</a> <span>&gt;</span>
            <span>{t("history.breadcrumb.history")}</span>
          </div>
        </div>
      </section>

      <section className="history-section">
        <h2 className="section-title">
          {t("history.section.title")}
        </h2>
        <div className="history-container">
          <div className="history-image">
            <img src={zafiriBuilding} alt={t("history.image.alt")} />
          </div>
          <div className="history-text">
            <p>{t("history.paragraphs.paragraph1")}</p>
            <p>{t("history.paragraphs.paragraph2")}</p>
            <p>{t("history.paragraphs.paragraph3")}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default History;