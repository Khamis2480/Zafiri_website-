import React, { useState, } from 'react';
import './News.css';

// Import images (you'll need to adjust these paths)
import heroImage from '../../assets/event/event1.JPG';
import news1 from '../../assets/event/event2.JPG';
import news2 from '../../assets/event/event3.JPG';
import news3 from '../../assets/event/event4.JPG';
import news4 from '../../assets/event/event5.JPG';

const NewsEvents = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };

  const newsData = [
    {
      id: 1,
      image: news1,
      alt: "News 1",
      status: "NEW",
      title: "ZAFIRI Launches New Project",
      date: "August 15, 2025",
      shortText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni ...",
      fullText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni kuongeza mifumo ya ukusanyaji wa taarifa za uvuvi ambazo zitawasaidia wavuvi kuweza kupata mikopo ya Benki kwa urahisi kwa ajili ya kuendesha shughuli za uvuvi hapa nchini. Hayo yameelezwa na Mkurugenzi Mkuu wa wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Bahari Zanzibar (ZAFIRI) Dkt. Zakaria Ali Khamis baada ya kukutana na Balozi wa Uengereza Nchini Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie huko Ofisini kwake Maruhubi Mkoa wa Mjini Magharibi Wilaya ya Mjini Unguja. Dkt. Zakaria amesema Serikali kupitia Tasisi ya ZAFIRI imeweka mifumo ya vifaa vya Tableti 30 na PDS mia moja katika boti za wavuvi kwa ajili ya kupata taarifa sahihi za uvuvi na kutambua maeneo maalumu ya upatikanaji wa Samaki kwa wingi. Sambamba na hayo amesema lengo la kuja kwa Wageni hao ni kufahamu na kuangalia utekelezaji wa Mradi wa (AABS) wa ufungaji wa vifaa ambao umefadhiliwa na Seriakali ya Uengereza katika Shirika la WorldFish. Aidha Dkt. Zakaria amesema kwa kiasi kikubwa Mradi wa AABS umefikia malengo ya uchukuaji wa taarifa za uvuvi kutokana na mafunzo mbalimbali yaliotolewa kwa Wavuvi ili kusaidia kuboresha uvuvi wa kisasa hapa nchini Zanzibar. Kwa upande wake Mratibu wa Mradi wa Afrika, Asia BlueTech Super high way (AABS) hapa Zanzibar Dkt. Pascal Thoya amesema kwa kiasi kikubwa mradi umefikia malengo kutokana na upatikanaji wa taarifa zilizo katika mifumo ya kisasa ya uvuvi kwa wakati uliokusudiwa. Kwa Upande wao Wageni waliokuja Katika Taasisi ya ZAFIRI Balozi wa Uingereza Nnchi Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie Wametoa pongezi kwa Serikali ya Mapinduzi ya Zanzibar kwa Juhud zilizofikiwa na mradi huo juu ya kusimamia wavuvii katika kuboresha uchukuaji wa taarifa za uvuvi mdogo mdogo hapa Visiwani Zanzibar. Miradi wa ufungaji wa vifaa vya uchukuaji wa Taarifa za uvuvi tayari umeanza kufanyika kwa miaka miwili hivi sasa na kukamilika kwake utachukua muda wa miaka 7 kwa Unguja na Pemba. Edited · 5w"
    },
    {
      id: 2,
      image: news2,
      alt: "News 2",
      status: "EVENT",
      title: "Annual Fisheries Conference",
      date: "August 20, 2025",
      shortText: "Zoezi hilo limefanywa na Watafiti kutoka Taasisi...",
      fullText: "Zoezi hilo limefanywa na Watafiti kutoka Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI kwa lengo la kuondosha changamoto za upatikanaji wa mbegu kwa wakulima hao na kupata mbegu bora za mwani jambo ambalo litaongeza uzalishaji wa zao hilo."
    },
    {
      id: 3,
      image: news3,
      alt: "News 3",
      status: "UPCOMING",
      title: "Marine Conservation Workshop",
      date: "August 25, 2025",
      shortText: "Katibu Mkuu Wizara ya Uchumi wa Buluu na Uvuvi Zanzibar...",
      fullText: "Katibu Mkuu Wizara ya Uchumi wa Buluu na Uvuvi Zanzibar akitembelea Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI"
    },
    {
      id: 4,
      image: news4,
      alt: "News 4",
      status: "NEWS",
      title: "New Research Center Opened",
      date: "August 30, 2025",
      shortText: "The government has inaugurated a new marine research center...",
      fullText: "This center will focus on advanced ocean studies and fisheries..."
    },
    {
      id: 5,
      image: news4,
      alt: "News 4",
      status: "NEWS",
      title: "New Research Center Opened",
      date: "August 30, 2025",
      shortText: "The government has inaugurated a new marine research center...",
      fullText: "This center will focus on advanced ocean studies and fisheries..."
    },
    {
      id: 6,
      image: news4,
      alt: "News 4",
      status: "NEWS",
      title: "New Research Center Opened",
      date: "August 30, 2025",
      shortText: "The government has inaugurated a new marine research center...",
      fullText: "This center will focus on advanced ocean studies and fisheries..."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>NEWS & EVENTS</h1>
          <div className="breadcrumb">
            <a href="../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>Both Upcoming and Latest </span>
          </div>
        </div>
      </section>

      <section className="events-section-news">
        <div className="card-container">
          {newsData.map(news => (
            <div key={news.id} className="card">
              <img src={news.image} alt={news.alt} />
              <div className="card-content">
                <span className="status-badge">{news.status}</span>
                <h3 className="card-title">{news.title}</h3>
                <p className="card-date">{news.date}</p>
                <p className="card-text short" style={{ display: expandedCards[news.id] ? 'none' : 'block' }}>
                  {news.shortText}
                </p>
                <p className="card-text full" style={{ display: expandedCards[news.id] ? 'block' : 'none' }}>
                  {news.fullText}
                </p>
                <a 
                  href="#" 
                  className="toggle-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCard(news.id);
                  }}
                >
                  {expandedCards[news.id] ? 'Show Less ↑' : 'More Details →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default NewsEvents;