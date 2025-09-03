import React, { useState, useEffect, useRef } from 'react';
import './Home.css';

// Import images (adjust paths as needed)
import image1 from '../assets/home/KIKAO 1.JPG';
import image2 from '../assets/home/kikao2.jpg';
import image3 from '../assets/home/KIKAO 3.JPG';
import image4 from '../assets/home/KIKAOO 4.JPG';
import image5 from '../assets/home/KIKAOO5.JPG';
import image6 from '../assets/home/lab.JPG';
import viceChancellorImage from '../assets/event/3.JPG'; // Adjust path as needed
import universityVideo from '../assets/zafiri video.mp4'; // Adjust path as needed


const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: image1,
      text: "Naibu Katibu mkuu wa Wizara ya Uchumi wa bulu pamoja na wakurugenzi wakifatiwa na Wadau wa shirika la Ethical Seafood Research"
    },
    {
      image: image2,
      text: "Uzinduzi wa Bodi ya Taasisi ya utafiti wa Uvuvi na Maliasili za Baharini Zanzibar"
    },
    {
      image: image3,
      text: "Kikao cha kupanga mikakati ya maendeleo ya Ufugaji wa Viumbe maji ila kukuza Sekta hiyo"
    },
    {
      image: image4,
      text: "Wizara ya Uchumi wa Buluu Zanzibar na Taasisi zake imekutana na Wafadhili wa mradi wa AABS"
    },
    {
      image: image5,
      text: "Picha ya Pamoja Wakurugenzi na Kamati za Uvuvi katika Kikao cha kuleta mrejesho juu ya utumiaji wa vifaa vinavyoonyesha taarifa za Shughuli za Uvuvi Baharini"
    },
    {
      image: image6,
      text: "Wataalamu wa ZAFIRI wakifanya uchunguzi wa Vimelea katika sampuli za maji ya Bahari"
    }
  ];

  useEffect(() => {
    // Don't set interval if slideshow is paused
    if (isPaused) return;

    const interval = setInterval(() => {
      setSlideIndex(prevIndex => (prevIndex + 1) % slides.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  // Handle mouse enter (pause)
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  // Handle mouse leave (resume)
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      className="slideshow-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade ${index === slideIndex ? 'active' : ''}`}
        >
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <div className="bottom-left-text overlay-box">
            <p>{slide.text}</p>
            {/* Optional: Show pause indicator */}
            {isPaused && (
              <div className="pause-indicator">
                <i className="fas fa-pause"></i> Paused
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};



const ViceChancellorMessage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays automatically and loops
    const videoElement = videoRef.current;
    
    if (videoElement) {
      videoElement.loop = true;
      
      const playVideo = () => {
        videoElement.play().catch(error => {
          console.log('Autoplay prevented:', error);
          // Add a play button for user interaction if autoplay is blocked
          const playButton = document.createElement('button');
          playButton.innerHTML = 'Play Video';
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

      // Try to play the video
      playVideo();

      // Add event listener for when video ends to ensure it restarts
      videoElement.addEventListener('ended', () => {
        videoElement.currentTime = 0;
        videoElement.play();
      });

      // Clean up
      return () => {
        videoElement.removeEventListener('ended', () => {});
      };
    }
  }, []);

  return (
    <div className="vc-video-container">
      <div className="vc-message-section">
        <div className="vc-container">
          <div className="vc-content">
            <div className="vc-info">
              <div className="vc-image">
                <img src={viceChancellorImage} alt="Vice Chancellor" />
              </div>
              <div className="vc-details">
                <h2>Dkt. Zakaria Ali Khamis</h2>
                <p>DIRECTOR GENERAL</p>
              </div>
            </div>

            <div className="message">
              <p>Assalamu Alaikum wa Rahmatullahi wa Barakatuh,</p>
              <p>It gives me great satisfaction to welcome all to the official Webpage of the Zafiri. I would like to convey special greetings to the academic and administrative staff, undergraduate and graduate students, alumni, parents and guardians, public and regulators.</p>

              <a href="#" className="read-more">
                <i className="fas fa-book-open"></i> Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="video-section">
        <div className="video-container">
          <div className="video-wrapper">
            <video 
              ref={videoRef} 
              muted // Muted is often required for autoplay
              playsInline // Important for iOS devices
              autoPlay // Try to autoplay
            >
              <source src={universityVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};


const ResearchSection = () => {
  return (
    <section className="research-section">
      <div className="research-header">
        <h2>Exploring Our Key Research Areas for Sustainable Marine Resources Management</h2>
        <p>
          At ZAFIRI, we focus on critical research areas that enhance the sustainability of Zanzibar's marine resources.
          Our work includes assessing fish stocks, promoting aquaculture, and studying the impacts of climate change on
          our oceans.
          By addressing these challenges, we aim to support local communities and preserve our marine ecosystems.
        </p>
      </div>

      <div className="research-cards">
        <div className="card">
          <i className="fas fa-fish"></i>
          <h3>Fisheries & Stock Assessment for Sustainable Food Security and Economic Growth</h3>
          <p>We monitor fish catches to ensure sustainable practices that benefit our economy.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <i className="fas fa-seedling"></i>
          <h3>Aquaculture & Fish Farming: Supporting Local farmers abd Reducing Wild Stock Pressure </h3>
          <p>Our research in aquaculture promotes responsible breeding and feeding practices.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="card">
          <i className="fas fa-water"></i>
          <h3>Climate Change & Oceanography: Under standing Our Vulnerable Marine ecosystem </h3>
          <p>We study the effects of climate change on Zanzibar's marine environments.</p>
          <a href="#">Learn More →</a>
        </div>
      </div>
    </section>
  );
};


import labImage from '../assets/home/lab.JPG'; 
// import fisheriesImage from '../assets/3.JPG'; 
// import communityImage from '../assets/pollution.jpg'; 

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Empowering Sustainable Marine Resource Management</h2>
      <p>
        At ZAFIRI, we provide comprehensive research and scientific advice to ensure the sustainable
        use of marine and fisheries resources. Our commitment is to enhance food security and support
        local economies through innovative practices.
      </p>

      <div className="services-container">
        <div className="service-box">
          <img src={labImage} alt="Research" />
          <h3>Research and Scientific Advice</h3>
          <p>We conduct in-depth studies to inform policy and practice.</p>
        </div>

        <div className="service-box">
          {/* <img src={fisheriesImage} alt="Fisheries" /> */}
          <h3>Promoting Sustainable Fisheries Practices</h3>
          <p>Our initiatives support the balance between fishing and conservation.</p>
        </div>

        <div className="service-box">
          {/* <img src={communityImage} alt="Community" /> */}
          <h3>Community Engagement and Education</h3>
          <p>We connect research findings with local community needs.</p>
        </div>
      </div>
    </section>
  );
};



// import image5 from '../assets/5.JPG'; 
// import image2 from '../assets/2.JPG'; 
//import image3 from '../assets/3.JPG'; 

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects-header">
        <div>
          <p className="subtitle">Our Projects</p>
          <h2>Driving Innovation for a Sustainable Blue Economy</h2>
          <p className="description">The Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI) Projects focus on
            promoting sustainable fisheries, advancing aquaculture, conserving marine ecosystems, and strengthening
            community capacity. Through research, innovation, and partnerships, these projects support Zanzibar's Blue
            Economy by protecting marine resources, improving livelihoods, and guiding evidence-based policy for long-term
            sustainability.</p>
        </div>
        <a href="#" className="view-more">View More →</a>
      </div>

      <div className="projects-grid">
        {/* Card 1 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image5} alt="Tree Planting" />
              <h3>Marine Conservation and Coastal Protection</h3>
            </div>
            <div className="flip-card-back">
              <h3>Marine Conservation and Coastal Protection</h3>
              <p>ZAFIRI is committed to safeguarding Zanzibar's coastal and marine ecosystems through scientific research
                and community-based programs. The project focuses on coral reef restoration, mangrove replanting, and
                sustainable fishing practices to ensure long-term marine biodiversity and food security</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image2} alt="Coastal Cleanup" />
              <h3>Aquaculture and Innovation</h3>
            </div>
            <div className="flip-card-back">
              <h3>Aquaculture and Innovation</h3>
              <p>Through aquaculture development, ZAFIRI is advancing sustainable fish farming technologies. The project
                promotes research in hatchery development, seaweed farming, and other innovative aquaculture methods that
                reduce pressure on natural fisheries and increase income for local communities.
              </p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={image3} alt="Fair Trade Network" />
              <h3>Capacity Building and Community Engagement</h3>
            </div>
            <div className="flip-card-back">
              <h3>Capacity Building and Community Engagement</h3>
              <p>ZAFIRI places strong emphasis on education and training for fishers, students, and community groups. This
                project equips stakeholders with knowledge on marine resource management, climate change adaptation, and
                environmental stewardship.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



import pollutionImage from '../assets/pollution.jpg'; 

const MarineSection = () => {
  return (
    <main className="marine-section">
      <div className="section__inner">

        {/* Left: Image */}
        <div className="media">
          <div className="media__box">
            <img src={pollutionImage} alt="Marine pollution and coastal environment" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="content">
          <div className="logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2 3 6.5v11L12 22l9-4.5v-11L12 2zm0 2.2 6.8 3.4L12 11 5.2 7.6 12 4.2zM5 9.2l6 3v7.6l-6-3V9.2zm14 0v7.6l-6 3V12.2l6-3z" />
            </svg>
          </div>

          <h1 className="marine-title">Marine Pollution & Coastal Environment</h1>

          <p className="lead">
            Plastic waste, oil spills, and habitat degradation threaten the marine ecosystem.
            Preserving biodiversity and protecting the coast are essential for sustaining tourism and local communities.
          </p>
        </div>

      </div>
    </main>
  );
};


const EventsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const trackRef = useRef(null);
  const autoSlideTimer = useRef(null);
  const AUTO_INTERVAL = 4000;

  const eventsData = [
    {
      id: 1,
      date: "2025-06-12",
      image: "../assets/event/event1.JPG",
      alt: "malindi",
      title: "FISH WEST",
      subtitle: "We are pleased for our students...",
      uploaded: "2025-06-25 09:26:26",
      daysOld: "64 Days Old",
      badge: "ZAFIRI"
    },
    {
      id: 2,
      date: "2025-03-30",
      image: "../assets/event/event2.JPG",
      alt: "MICHAMVI",
      title: "BWEJUU AND MICHAMVI",
      subtitle: "We are pleased for our students...",
      uploaded: "2025-03-30 14:38:38",
      daysOld: "138 Days Old",
      badge: "ZAFIRI"
    },
    {
      id: 3,
      date: "2025-02-27",
      image: "../assets/event/event3.JPG",
      alt: "mwani",
      title: "UGAWAJI WA MBEGU ZA MWANI",
      subtitle: "Wafanya kazi wa ZAFIRI wakigawa Mbegu kwa Wananchi",
      uploaded: "2025-03-04 09:08:03",
      daysOld: "169 Days Old",
      badge: "ZAFIRI"
    },
    {
      id: 4,
      date: "2025-02-27",
      image: "../assets/event/event4.JPG",
      alt: "mwani",
      title: "UPANDAJI WA MBEGU ZA MWANI",
      subtitle: "Wafanyakazi wa ZAFIRI na wananchi wakipanda mbegu za Mwani",
      uploaded: "2025-03-04 09:08:03",
      daysOld: "169 Days Old",
      badge: "ZAFIRI"
    },
    {
      id: 5,
      date: "2025-02-27",
      image: "../assets/event/event5.JPG",
      alt: "mwani",
      title: "UKAGUZI WA MASHAMBA YA MWANI",
      subtitle: "Wafanyakazi wa ZAFIRI wakikagua Mashamba ya Mwani",
      uploaded: "2025-03-04 09:08:03",
      daysOld: "169 Days Old",
      badge: "ZAFIRI"
    },
    {
      id: 6,
      date: "2025-02-27",
      image: "../assets/event/eventi1.JPG",
      alt: "Mwani",
      title: "UVUNAJI WA MWANI",
      subtitle: "Wafanyakazi wa ZAFIRI pamoja na Wananchi wakivuna Mwani",
      uploaded: "2025-03-04 09:08:03",
      daysOld: "169 Days Old",
      badge: "ZAFIRI"
    }
  ];

  const centerCardAt = (idx, smooth = true) => {
    if (!trackRef.current) return;
    
    const cards = trackRef.current.querySelectorAll('.event-card');
    if (!cards[idx]) return;
    
    const card = cards[idx];
    const left = card.offsetLeft - (trackRef.current.clientWidth - card.clientWidth) / 2;
    
    trackRef.current.scrollTo({ left, behavior: smooth ? 'smooth' : 'auto' });
    
    // Update active classes
    cards.forEach((c, i) => {
      if (i === idx) {
        c.classList.add('active');
        c.classList.remove('fade');
      } else {
        c.classList.remove('active');
        c.classList.add('fade');
      }
    });
  };

  const nextCard = () => {
    const newIndex = (currentIndex + 1) % eventsData.length;
    setCurrentIndex(newIndex);
    centerCardAt(newIndex);
  };

  const prevCard = () => {
    const newIndex = (currentIndex - 1 + eventsData.length) % eventsData.length;
    setCurrentIndex(newIndex);
    centerCardAt(newIndex);
  };

  const startAutoPlay = () => {
    stopAutoPlay();
    autoSlideTimer.current = setInterval(nextCard, AUTO_INTERVAL);
    setIsAutoPlaying(true);
  };

  const stopAutoPlay = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
      autoSlideTimer.current = null;
    }
    setIsAutoPlaying(false);
  };

  // Initialize and handle auto-play
  useEffect(() => {
    // Initial positioning
    setTimeout(() => centerCardAt(currentIndex, false), 100);
    
    // Start auto-play
    startAutoPlay();
    
    // Handle window resize
    const handleResize = () => centerCardAt(currentIndex, false);
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      stopAutoPlay();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Update autoplay when currentIndex changes
  useEffect(() => {
    if (isAutoPlaying) {
      stopAutoPlay();
      startAutoPlay();
    }
  }, [currentIndex]);

  const handleMouseEnter = () => {
    stopAutoPlay();
  };

  const handleMouseLeave = () => {
    if (!isAutoPlaying) {
      startAutoPlay();
    }
  };

  return (
    <section className="events-section-news">
      <h2>ZAFIRI Events and News</h2>
      <p>
        The Events and News section of the Zanzibar Fisheries and Marine Resources Research
        Institute (ZAFIRI) provides timely updates on official activities, research programs, community initiatives, and
        partnerships. It serves as a platform to share achievements, announcements, and institutional developments that
        support Zanzibar's vision of a sustainable Blue Economy.
      </p>

      <div className="carousel-container">
        <button className="nav-btn prev" onClick={() => { stopAutoPlay(); prevCard(); startAutoPlay(); }}>&#10094;</button>
        
        <div 
          className="carousel-track-event" 
          ref={trackRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {eventsData.map(event => (
            <div key={event.id} className="event-card fade">
              <div className="image-container">
                <span className="date-badge">{event.date}</span>
                <img src={event.image} alt={event.alt} />
              </div>
              <div className="event-info">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-subtitle">{event.subtitle}</p>
                <p className="uploaded">Uploaded: <span className="time">{event.uploaded}</span></p>
                <div className="bottom-info">
                  <span className="days-old">{event.daysOld}</span>
                  <span className="uni-badge">{event.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-btn next" onClick={() => { stopAutoPlay(); nextCard(); startAutoPlay(); }}>&#10095;</button>
      </div>
      
      <div className="read-more-container">
        <a href="../../event page/Workspace.html" className="read-more-btn">Read More</a>
      </div>
    </section>
  );
};


// Import images
import visitorIcon from '../assets/visitor.webp';
import publicationIcon from '../assets/publication/Publication.jpeg';
import projectIcon from '../assets/project/Research.webp';
import eventIcon from '../assets/event/download.jpg';

// Move impactData outside the component so it's not a new array on every render
const impactData = [
  {
    id: 'visitors',
    target: 2000,
    title: 'Visitors',
    description: 'Shows the number of people visiting the ZAFIRI platform across different regions and periods.',
    icon: visitorIcon,
    alt: 'Visitors Icon'
  },
  {
    id: 'publications',
    target: 75,
    title: 'Publications',
    description: 'Highlights the published scientific articles and marine research shared by ZAFIRI.',
    icon: publicationIcon,
    alt: 'Publications Icon'
  },
  {
    id: 'projects',
    target: 120,
    title: 'Projects',
    description: 'Ongoing and completed projects showcasing innovations and marine sustainability.',
    icon: projectIcon,
    alt: 'Projects Icon'
  },
  {
    id: 'events',
    target: 40,
    title: 'Events',
    description: 'Details workshops, exhibitions, and marine awareness campaigns organized by ZAFIRI.',
    icon: eventIcon,
    alt: 'Events Icon'
  }
];

const ImpactOverview = () => {
  const [counts, setCounts] = useState({
    visitors: 0,
    publications: 0,
    projects: 0,
    events: 0
  });

  const countersRef = useRef({
    visitors: null,
    publications: null,
    projects: null,
    events: null
  });

  // Track which counters have been animated to prevent re-animation
  const animatedCounters = useRef(new Set());

  // Initialize counters when component mounts
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          impactData.forEach(item => {
            // Only animate if not already animated
            if (!animatedCounters.current.has(item.id) && countersRef.current[item.id]) {
              animateCounter(item.id, item.target);
              animatedCounters.current.add(item.id);
            }
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe each counter element
    impactData.forEach(item => {
      if (countersRef.current[item.id]) {
        observer.observe(countersRef.current[item.id]);
      }
    });

    // Copy the current ref values to avoid stale closure in cleanup
    const countersSnapshot = { ...countersRef.current };

    return () => {
      impactData.forEach(item => {
        if (countersSnapshot[item.id]) {
          observer.unobserve(countersSnapshot[item.id]);
        }
      });
    };
  }, []);

  const animateCounter = (id, target) => {
    let current = 0;
    const duration = 2000; // ms
    const steps = duration / 18;
    const stepValue = target / steps;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounts(prev => ({
        ...prev,
        [id]: Math.floor(current)
      }));
    }, 18);
  };

  return (
    <section className="system-card">
      <h2 className="section-title">ZAFIRI Impact Overview</h2>
      <div className="circle-counter-container">
        {impactData.map(item => (
          <div 
            key={item.id} 
            className="circle-box"
            ref={el => countersRef.current[item.id] = el}
          >
            <div className="circle">
              <img src={item.icon} alt={item.alt} />
              <span className="count">{counts[item.id].toLocaleString()}</span>
            </div>
            <h4>{item.title}</h4>
            <p className="desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};



// Import partner logos
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
  // Partner data with website URLs
  const partnerLogos = [
    { id: 1, src: partner1, alt: "COSTECH", url: "https://www.costech.go.tz/" },
    { id: 5, src: partner5, alt: "WIOMSA", url: "https://wiomsa.org/" },
    { id: 6, src: partner6, alt: "Matis", url: "https://matis.is/" },
    { id: 7, src: partner7, alt: "UNESCO", url: "https://www.unesco.org/" },
    { id: 8, src: partner8, alt: "SWIOFP", url: "https://www.swiofp.net/" },
    { id: 9, src: partner9, alt: "SUZA", url: "https://www.suza.ac.tz/" },
    { id: 10, src: partner10, alt: "State University of Zanzibar", url: "https://www.suza.ac.tz/" },
    { id: 11, src: partner11, alt: "WIOMSA Research", url: "https://wiomsa.org/" },
    { id: 12, src: partner12, alt: "Matis Food Research", url: "https://matis.is/" },
    { id: 13, src: partner13, alt: "UNESCO Education", url: "https://www.unesco.org/" },
    { id: 14, src: partner14, alt: "SWIOFP Program", url: "https://www.swiofp.net/" },
    { id: 15, src: partner15, alt: "COSTECH Innovation", url: "https://www.costech.go.tz/" },
  ];

  // Duplicate the array for seamless infinite scrolling
  const duplicatedLogos = [...partnerLogos, ...partnerLogos];

  // Handle click event - open link in new tab
  const handlePartnerClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="partners">
      <h2>Our Partners & Collaborators</h2>
      <div className="partners-container">
        <div className="partners-carousel">
          <div className="partners-track">
            {duplicatedLogos.map((partner, index) => (
              <div 
                key={`${partner.id}-${index}`} 
                className="partner-card"
                onClick={() => handlePartnerClick(partner.url)}
                title={`Visit ${partner.alt} website`}
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
                  <span className="visit-text">Visit Website</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Create a Home component that includes both Slideshow and ViceChancellorMessage
const Home = () => {
  return (
    <div className="home-container">
      <Slideshow />
      <ViceChancellorMessage />
      <ResearchSection/>
      <ServicesSection/>
      <Projects/>
      <MarineSection/>
      <EventsSection/>
      <ImpactOverview/>
      <Partners/>
    </div>
  );
};

export default Home;
