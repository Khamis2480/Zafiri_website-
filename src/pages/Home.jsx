import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

// Import images
import image1 from '../assets/home/KIKAO 1.JPG';
import image2 from '../assets/home/kikao2.jpg';
import image3 from '../assets/home/KIKAO 3.JPG';
import image4 from '../assets/home/KIKAOO 4.JPG';
import image5 from '../assets/home/KIKAOO5.JPG';
import image6 from '../assets/home/lab.JPG';
import image7 from '../assets/home/IMG_9048.JPG';
import viceChancellorImage from '../assets/home/IMG_6209.JPG';
import universityVideo from '../assets/zafiri video.mp4';
import event1 from '../assets/event/5L0A0232.JPG';
import event2 from '../assets/event/5L0A0216.JPG';
import event3 from '../assets/event/IMG_0908.JPG';
import event4 from '../assets/event/IMG_0089.JPG';
import event5 from '../assets/event/IMG_8707.JPG';
import eventi1 from '../assets/event/IMG_2871.JPG';

// Slideshow component (unchanged)
const Slideshow = () => {
  const { t } = useTranslation();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    { image: image2, text: t('slideshow.slide1') },
    { image: image6, text: t('slideshow.slide2') },
    { image: image7, text: t('slideshow.slide3') },
    { image: image3, text: t('slideshow.slide4') },
    { image: image4, text: t('slideshow.slide5') },
    { image: image5, text: t('slideshow.slide6') },
    { image: image1, text: t('slideshow.slide7') },
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div className="slideshow-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {slides.map((slide, index) => (
        <div key={index} className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}>
          <img src={slide.image} alt={t(`slideshow.slide${index + 1}`)} />
          <div className="bottom-left-text overlay-box">
            <p>{slide.text}</p>
            {isPaused && (
              <div className="pause-indicator">
                <i className="fas fa-pause"></i> {t('common.paused')}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

// ViceChancellorMessage component (unchanged, assuming language issue was resolved)
const ViceChancellorMessage = () => {
  const { t, i18n } = useTranslation();
  const videoRef = useRef(null);

  useEffect(() => {
    console.log('Current language:', i18n.language);
    console.log('Translations:', t('viceChancellor', { returnObjects: true }));
  }, [i18n.language, t]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.loop = true;
      const playVideo = () => {
        videoElement.play().catch((error) => {
          console.log('Autoplay prevented:', error);
          const playButton = document.createElement('button');
          playButton.innerHTML = t('common.playVideo');
          playButton.style.position = 'absolute';
          playButton.style.top = '50%';
          playButton.style.left = '50%';
          playButton.style.transform = 'translate(-50%, -50%)';
          playButton.style.padding = '10px 20px';
          playButton.style.background = '#1a237e';
          playButton.style.color = 'white';
          playButton.style.border = 'none';
          playButton.style.borderRadius = '5px';
          playButton.style.cursor = 'pointer';
          playButton.style.zIndex = '10';
          playButton.onclick = () => {
            videoElement.play();
            playButton.remove();
          };
          videoElement.parentElement.style.position = 'relative';
          videoElement.parentElement.appendChild(playButton);
        });
      };

      playVideo();
      videoElement.addEventListener('ended', () => {
        videoElement.currentTime = 0;
        videoElement.play();
      });

      return () => {
        videoElement.removeEventListener('ended', () => {});
      };
    }
  }, [t]);

  return (
    <div className="vc-video-container">
      <div className="vc-message-section">
        <div className="vc-container">
          <div className="vc-content">
            <div className="vc-info">
              <div className="vc-image">
                <img src={viceChancellorImage} alt={t('viceChancellor.name')} />
              </div>
              <div className="vc-details">
                <h2>{t('viceChancellor.name')}</h2>
                <p>{t('viceChancellor.title')}</p>
              </div>
            </div>
            <div className="message">
              <p>{t('viceChancellor.greeting')}</p>
              <p>{t('viceChancellor.message')}</p>
              <a href="/message" className="read-more">
                <i className="fas fa-book-open"></i> {t('viceChancellor.readMore')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="video-section">
        <div className="video-container">
          <div className="video-wrapper">
            <video ref={videoRef} muted playsInline autoPlay>
              <source src={universityVideo} type="video/mp4" />
              {t('common.videoNotSupported')}
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

// ResearchSection component (unchanged)
const ResearchSection = () => {
  const { t } = useTranslation();

  return (
    <section className="research-section parallax-section research-bg">
      <div className="overlay">
        <div className="research-header">
          <h2>{t('research.title')}</h2>
          <p>{t('research.description')}</p>
        </div>
        <div className="research-cards">
          <div className="research-card">
            <i className="fas fa-fish"></i>
            <h3>{t('research.fisheries.title')}</h3>
            <p>{t('research.fisheries.description')}</p>
            <a href="/area">{t('research.fisheries.learnMore')}</a>
          </div>
          <div className="research-card">
            <i className="fas fa-seedling"></i>
            <h3>{t('research.aquaculture.title')}</h3>
            <p>{t('research.aquaculture.description')}</p>
            <a href="/area">{t('research.aquaculture.learnMore')}</a>
          </div>
          <div className="research-card">
            <i className="fas fa-water"></i>
            <h3>{t('research.climate.title')}</h3>
            <p>{t('research.climate.description')}</p>
            <a href="/area">{t('research.climate.learnMore')}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

// ServicesSection component (unchanged)
import labImage from '../assets/event/IMG_9721.JPG';
import fisheriesImage from '../assets/event/IMG_1500.JPG';
import communityImage from '../assets/event/IMG_0059.JPG';

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="services-section parallax-section services-bg">
      <div className="overlay">
        <h2>{t('services.title')}</h2>
        <p>{t('services.description')}</p>
        <div className="services-container">
          <div className="service-box">
            <img src={labImage} alt={t('services.research.title')} />
            <h3>{t('services.research.title')}</h3>
            <p>{t('services.research.description')}</p>
          </div>
          <div className="service-box">
            <img src={fisheriesImage} alt={t('services.fisheries.title')} />
            <h3>{t('services.fisheries.title')}</h3>
            <p>{t('services.fisheries.description')}</p>
          </div>
          <div className="service-box">
            <img src={communityImage} alt={t('services.community.title')} />
            <h3>{t('services.community.title')}</h3>
            <p>{t('services.community.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects component (unchanged)
const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects">
      <div className="projects-header">
        <div>
          <p className="subtitle">{t('projects.subtitle')}</p>
          <h2>{t('projects.title')}</h2>
          <p className="description">{t('projects.description')}</p>
        </div>
        <a href="#" className="view-more">{t('projects.viewMore')}</a>
      </div>
      <div className="projects-grid">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image5} alt={t('projects.marineConservation.title')} />
              <h3>{t('projects.marineConservation.title')}</h3>
            </div>
            <div className="flip-card-back">
              <h3>{t('projects.marineConservation.title')}</h3>
              <p>{t('projects.marineConservation.description')}</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image2} alt={t('projects.aquaculture.title')} />
              <h3>{t('projects.aquaculture.title')}</h3>
            </div>
            <div className="flip-card-back">
              <h3>{t('projects.aquaculture.title')}</h3>
              <p>{t('projects.aquaculture.description')}</p>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image3} alt={t('projects.capacityBuilding.title')} />
              <h3>{t('projects.capacityBuilding.title')}</h3>
            </div>
            <div className="flip-card-back">
              <h3>{t('projects.capacityBuilding.title')}</h3>
              <p>{t('projects.capacityBuilding.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// MarineSection component (unchanged)
import pollutionImage from '../assets/pollution.jpg';

const MarineSection = () => {
  const { t } = useTranslation();

  return (
    <main className="marine-section">
      <div className="section__inner">
        <div className="media">
          <div className="media__box">
            <img src={pollutionImage} alt={t('marine.title')} />
          </div>
        </div>
        <div className="content">
          <div className="logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.2 6.8 3.4L12 11 5.2 7.6 12 4.2zM5 9.2l6 3v7.6l-6-3V9.2zm14 0v7.6l-6 3V12.2l6-3z" />
            </svg>
          </div>
          <h1 className="marine-title">{t('marine.title')}</h1>
          <p className="lead">{t('marine.description')}</p>
        </div>
      </div>
    </main>
  );
};
const EventsSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const trackRef = useRef(null);
  const autoSlideTimer = useRef(null);
  const AUTO_INTERVAL = 4000;

  const calculateDaysOld = (uploadedDate) => {
    const today = new Date();
    const uploaded = new Date(uploadedDate);
    const diffTime = Math.abs(today - uploaded);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return t('events.daysOld', { count: diffDays });
  };

  const eventsData = [
    {
      id: 1,
      date: '2025-04-02',
      image: event1,
      alt: t('events.eventsList.event1.alt', { defaultValue: 'Malindi' }),
      title: t('events.eventsList.event1.title'),
      subtitle: t('events.eventsList.event1.subtitle'),
      uploaded: '2024-12-25 09:26:26',
      daysOld: calculateDaysOld('2024-12-25 09:26:26'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
    {
      id: 2,
      date: '2025-02-13',
      image: event2,
      alt: t('events.eventsList.event2.alt', { defaultValue: 'Michamvi' }),
      title: t('events.eventsList.event2.title'),
      subtitle: t('events.eventsList.event2.subtitle'),
      uploaded: '2025-02-15 14:38:38',
      daysOld: calculateDaysOld('2025-02-15 14:38:38'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
    {
      id: 3,
      date: '2025-02-27',
      image: event3,
      alt: t('events.eventsList.event3.alt', { defaultValue: 'Mwani' }),
      title: t('events.eventsList.event3.title'),
      subtitle: t('events.eventsList.event3.subtitle'),
      uploaded: '2025-03-04 09:08:03',
      daysOld: calculateDaysOld('2025-03-04 09:08:03'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
    {
      id: 4,
      date: '2024-12-25',
      image: event4,
      alt: t('events.eventsList.event4.alt', { defaultValue: 'Mwani' }),
      title: t('events.eventsList.event4.title'),
      subtitle: t('events.eventsList.event4.subtitle'),
      uploaded: '2024-12-25 09:08:03',
      daysOld: calculateDaysOld('2024-12-25 09:08:03'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
    {
      id: 5,
      date: '2025-02-27',
      image: event5,
      alt: t('events.eventsList.event5.alt', { defaultValue: 'Mwani' }),
      title: t('events.eventsList.event5.title'),
      subtitle: t('events.eventsList.event5.subtitle'),
      uploaded: '2025-03-04 09:08:03',
      daysOld: calculateDaysOld('2025-03-04 09:08:03'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
    {
      id: 6,
      date: '2025-02-27',
      image: eventi1,
      alt: t('events.eventsList.event6.alt', { defaultValue: 'Mwani' }),
      title: t('events.eventsList.event6.title'),
      subtitle: t('events.eventsList.event6.subtitle'),
      uploaded: '2025-03-04 09:08:03',
      daysOld: calculateDaysOld('2025-03-04 09:08:03'),
      badge: t('events.badge', { defaultValue: 'ZAFIRI' }),
    },
  ];

  // Determine card width based on screen size
  const getCardWidth = () => {
    const width = window.innerWidth;
    if (width <= 768) return 0.9; // 90% width
    if (width <= 1024) return 0.45; // 45% width
    return 300 / trackRef.current?.parentElement?.offsetWidth; // 300px relative to container
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoSlideTimer.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    }, AUTO_INTERVAL);

    return () => clearInterval(autoSlideTimer.current);
  }, [isAutoPlaying, eventsData.length]);

  useEffect(() => {
    if (trackRef.current) {
      const cardWidth = getCardWidth();
      const scrollPosition = currentIndex * cardWidth * trackRef.current.parentElement.offsetWidth;
      trackRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
  };

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
    clearInterval(autoSlideTimer.current);
  };

  const startAutoPlay = () => {
    setIsAutoPlaying(true);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50;
    if (isSwipe) {
      stopAutoPlay();
      if (distance > 0) {
        nextCard();
      } else {
        prevCard();
      }
      startAutoPlay();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="events-section-news">
      <h2>{t('events.title')}</h2>
      <p>{t('events.description')}</p>
      <div className="carousel-container">
        <button
          className="nav-btn prev"
          onClick={() => {
            stopAutoPlay();
            prevCard();
            startAutoPlay();
          }}
        >
          &#10094;
        </button>
        <div
          className="carousel-track-event"
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {eventsData.map((event, index) => (
            <div
              key={event.id}
              className={`event-card ${index === currentIndex ? 'active' : 'fade'}`}
            >
              <div className="image-container">
                <span className="date-badge">{event.date}</span>
                <img src={event.image} alt={event.alt} />
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
                <p className="uploaded">
                  {t('events.uploaded')}: <span className="time">{event.uploaded}</span>
                </p>
                <div className="bottom-info">
                  <span className="days-old">{event.daysOld}</span>
                  <span className="uni-badge">{event.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="nav-btn next"
          onClick={() => {
            stopAutoPlay();
            nextCard();
            startAutoPlay();
          }}
        >
          &#10095;
        </button>
      </div>
      <div className="read-more-container">
        <a href="../pages/News" className="read-more-btn">{t('events.readMore')}</a>
      </div>
    </section>
  );
};

import visitorIcon from '../assets/visitor.webp';
import publicationIcon from '../assets/publication/Publication.jpeg';
import projectIcon from '../assets/project/Research.webp';
import eventIcon from '../assets/event/download.jpg';

const ImpactOverview = () => {
  const { t } = useTranslation();
  const [counts, setCounts] = useState({
    visitors: 0,
    publications: 0,
    projects: 0,
    events: 0,
  });
  const countersRef = useRef({ visitors: null, publications: null, projects: null, events: null });
  const animatedCounters = useRef(new Set());

  // ✅ useMemo to avoid re-creating every render
  const impactData = useMemo(() => [
    {
      id: 'visitors',
      target: 2000,
      title: t('impact.visitors.title'),
      description: t('impact.visitors.description'),
      icon: visitorIcon,
      alt: t('impact.visitors.title'),
    },
    {
      id: 'publications',
      target: 75,
      title: t('impact.publications.title'),
      description: t('impact.publications.description'),
      icon: publicationIcon,
      alt: t('impact.publications.title'),
    },
    {
      id: 'projects',
      target: 120,
      title: t('impact.projects.title'),
      description: t('impact.projects.description'),
      icon: projectIcon,
      alt: t('impact.projects.title'),
    },
    {
      id: 'events',
      target: 40,
      title: t('impact.events.title'),
      description: t('impact.events.description'), // ✅ fixed key
      icon: eventIcon,
      alt: t('impact.events.title'),
    },
  ], [t]);

  useEffect(() => {
    const observers = Object.keys(countersRef.current).map((key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !animatedCounters.current.has(key)) {
            animatedCounters.current.add(key);
            let start = 0;
            const end = impactData.find((item) => item.id === key).target;
            const duration = 2000;
            const increment = end / (duration / 16);
            const counter = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(counter);
              }
              setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
            }, 16);
          }
        },
        { threshold: 0.1 }
      );

      if (countersRef.current[key]) {
        observer.observe(countersRef.current[key]);
      }

      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [impactData]);

  return (
    <section className="system-card">
      <h2 className="section-title">{t('impact.title')}</h2>
      <div className="circle-counter-container">
        {impactData.map((item) => (
          <div key={item.id} className="circle-box" ref={(el) => (countersRef.current[item.id] = el)}>
            <div className="circle">
              <img src={item.icon} alt={item.alt} />
              <span className="count">{(counts[item.id] ?? 0).toLocaleString()}</span>
            </div>
            <h4>{item.title}</h4>
            <p className="desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};


// Partners component (unchanged)
import partner1 from '../assets/partner/1.jpeg';
import partner5 from '../assets/partner/5.jpeg';
import partner6 from '../assets/partner/6.png';
import partner7 from '../assets/partner/7.jpeg';
import partner8 from '../assets/partner/8.jpeg';
import partner9 from '../assets/partner/9.png';
import partner10 from '../assets/partner/10.jpeg';
import partner11 from '../assets/partner/11.png';
import partner12 from '../assets/partner/12.jpeg';
import partner13 from '../assets/partner/13.png';
import partner14 from '../assets/partner/14.jpeg';
import partner15 from '../assets/partner/15.png';

const Partners = () => {
  const { t } = useTranslation();

  const partnerLogos = [
    { id: 1, src: partner1, alt: 'WORLDFISH', url: 'https://worldfishcenter.org' },
    { id: 5, src: partner5, alt: 'UDISM', url: 'https://www.udsm.ac.tz' },
    { id: 6, src: partner6, alt: 'SIO', url: 'https://www.sio.org.cn' },
    { id: 7, src: partner7, alt: 'TAFIRI', url: 'https://www.tafiri.go.tz' },
    { id: 8, src: partner8, alt: 'COSTECH', url: 'https://crweb.costech.or.tz' },
    { id: 9, src: partner9, alt: 'SYKE', url: 'https://www.syke.fi' },
    { id: 10, src: partner10, alt: 'State University of Zanzibar', url: 'https://www.suza.ac.tz/' },
    { id: 11, src: partner11, alt: 'WORLD BANK', url: 'https://www.worldbank.org' },
    { id: 12, src: partner12, alt: 'Matis Food Research', url: 'https://matis.is/' },
    { id: 13, src: partner13, alt: 'UNESCO Education', url: 'https://www.unesco.org/' },
    { id: 14, src: partner14, alt: 'SWIOFP Program', url: 'https://www.swiofp.net/' },
    { id: 15, src: partner15, alt: 'COSTECH Innovation', url: 'https://www.fao.org' },
  ];

  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  const handlePartnerClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="partners">
      <h2>{t('partners.title')}</h2>
      <div className="partners-container">
        <div className="partners-carousel">
          <div className="partners-track">
            {duplicatedLogos.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="partner-card"
                onClick={() => handlePartnerClick(partner.url)}
                title={t('partners.visitWebsite', { alt: partner.alt })}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handlePartnerClick(partner.url);
                  }
                }}
              >
                <img src={partner.src} alt={partner.alt} loading="lazy" />
                <div className="partner-overlay">
                  <span className="visit-text">{t('partners.visitWebsite')}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Home component
const Home = () => {
  return (
    <div className="home-container">
      <Slideshow />
      <ViceChancellorMessage />
      <ResearchSection />
      <ServicesSection />
      <Projects />
      <MarineSection />
      <EventsSection />
      <ImpactOverview />
      <Partners />
    </div>
  );
};

export default Home;