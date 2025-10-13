import React, { useState, } from 'react';
import './News.css';

// Import images (you'll need to adjust these paths)
import heroImage from '../../assets/event/news.jpeg';
import news1 from '../../assets/event/5L0A9681.JPG';
import news2 from '../../assets/event/IMG_6525.JPG';
import news3 from '../../assets/event/5L0A0139.JPG';
import news4 from '../../assets/event/IMG_6058.JPG';
import news5 from '../../assets/event/IMG_1703.JPG';

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
      date: "July 16, 2025",
      shortText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni kuongeza mifumo ya ukusanyaji ...",
      fullText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni kuongeza mifumo ya ukusanyaji wa taarifa za uvuvi ambazo zitawasaidia wavuvi kuweza kupata mikopo ya Benki kwa urahisi kwa ajili ya kuendesha shughuli za uvuvi hapa nchini.Hayo yameelezwa na Mkurugenzi Mkuu wa wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Bahari Zanzibar (ZAFIRI) Dkt. Zakaria Ali Khamis baada ya kukutana na Balozi wa Uengereza Nchini Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie huko Ofisini kwake Maruhubi Mkoa wa Mjini Magharibi Wilaya ya Mjini Unguja.Dkt. Zakaria amesema Serikali kupitia Tasisi ya ZAFIRI imeweka mifumo ya vifaa vya Tableti 30 na PDS mia moja katika boti za wavuvi kwa ajili ya kupata taarifa sahihi za uvuvi na kutambua maeneo maalumu ya upatikanaji wa Samaki kwa wingi.Sambamba na hayo amesema lengo la kuja kwa Wageni hao ni kufahamu na kuangalia utekelezaji wa Mradi wa (AABS) wa ufungaji wa vifaa ambao umefadhiliwa na Seriakali ya Uengereza katika Shirika la WorldFish.Aidha Dkt. Zakaria amesema kwa kiasi kikubwa Mradi wa AABS umefikia malengo ya uchukuaji wa taarifa za uvuvi kutokana na mafunzo mbalimbali yaliotolewa kwa Wavuvi ili kusaidia kuboresha uvuvi wa kisasa hapa nchini Zanzibar.Kwa upande wake Mratibu wa Mradi wa Afrika, Asia BlueTech Super high way (AABS) hapa Zanzibar Dkt. Pascal Thoya amesema kwa kiasi kikubwa mradi umefikia malengo kutokana na upatikanaji wa taarifa zilizo katika mifumo ya kisasa ya uvuvi kwa wakati uliokusudiwa.Kwa Upande wao Wageni waliokuja Katika Taasisi ya ZAFIRI Balozi wa Uingereza Nnchi Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie Wametoa pongezi kwa Serikali ya Mapinduzi ya Zanzibar kwa Juhud zilizofikiwa na mradi huo juu ya kusimamia wavuvii katika kuboresha uchukuaji wa taarifa za uvuvi mdogo mdogo hapa Visiwani Zanzibar.Miradi wa ufungaji wa vifaa vya uchukuaji wa Taarifa za uvuvi tayari umeanza kufanyika kwa miaka miwili hivi sasa na kukamilika kwake utachukua muda wa miaka 7 kwa Unguja na Pemba."
    },
    {
      id: 2,
      image: news2,
      alt: "News 2",
      status: "EVENT",
      title: "Annual Fisheries Conference",
      date: "July 10, 2025",
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
      fullText: "Katibu Mkuu Wizara ya Uchumi wa Buluu na Uvuvi  Zanzibar Keptain Hamadi Bakari Hamad amewataka Wataalamu wa Taasisi ya Utafiti kufanya tafiti mbalimbali za Mazao ya Baharini kwa lengo la kuleta mafanikio kwa jamii na Taifa kwa ujumla.Amesema hayo baada ya kufanya  ziara ya ukaguzi wa Vifaa vya maabara katika  Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI huko Maruhubi Wilaya ya Mjini Magharibi Unguja.Kepteni Hamad ameseama kufanyika kwa tafiti za uvuvi na mazao ya baharini ni suala la lazima hapa nchini kutokana na tegemezi kuu la wananchi  wa Zanzibar ni Uchumi wa Buluu  ambao ndio chachu ya maendeleo kwa jamii husika.Sambamba na hayo amesema Taasisi ya ZAFIRI  inajukumu kubwa sana katika kusaidia Sera ya uchumi wa buluu ili kufikia adhma na adhimio la Mhe.Raisi wa Zanzibar Dkt.Hussen Ali Mwinyi katika kuwainua  wananchi wake kiuchumi.Kwa upande wake Mkurugenzi Mkuu  wa Taasisi ya Utfiti wa Uvuvi  Zanzibar ZAFIRI  Dkt. Zakaria Ali Khamis amesema lengo la kuongeza vifaa hivyo vya Maabara kwa ajili ya kufanya tafiti mbalimbali za uvuvi ili kupata matokeo bora na ya kisasa zaidi.Nae Msimamizi wa Vifaa vya Maabara Nd.Fatma Moh'd Qadir amesema Kuja kwa Mashine mbalimbali katika Taasisi hiyo kutasaidia kufanya tafiti mbalimbali za uchunguzi wa sampuli za uvuvi kwa wakati muafaka."
    },
    {
      id: 4,
      image: news4,
      alt: "News 4",
      status: "NEWS",
      title: "New Research Center Opened",
      date: "Jun 06, 2025",
      shortText: "Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Imetembelewa...",
      fullText: "Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Imetembelewa na Kamati ya Skuli ya Uchumi ya Chuo Kikuu cha Dar-es-Salam kwa Lengo La Kujadili Mashirikiano ya Taasisi na Chuo Hicho."
    },
    {
      id: 5,
      image: news5,
      alt: "News 5",
      status: "NEWS",
      title: "New Research Center Opened",
      date: "August 30, 2025",
      shortText: "Watumishi wa umma na wananchi kiujumla wametakiwa kufahamu ...",
      fullText: "Watumishi wa umma na wananchi kiujumla wametakiwa kufahamu namna ya kukabiliana na majanga ya moto pindi yanapoweza kutokea katika jamii zao.Ameyasema hayo Mkurugenzi Mkuu wa Taasisi ya utafiti wa uvuvi na maliasili za baharini zanzibar zafiri Dr.Zakaria Ali Khamis wakati wakipena mafunzo ya vitendo juu ya kukabiliana na majanga ya moto hafla hio iliyofanyika huko Ofisi ya Zafiri Maruhubi Mjini Unguja.Amesema lengo la mafunzo hayo nikuhakikisha kila mfanyakazi kuweza kujua namna ya kudhibiti na kuzima moto pindi janga hilo litakapoweza kujitokeza ili kuepukana na Athar mbali mbali zinazoweza kutokezea.Nae Nd.Gora Haji Gora akifahamisha utaratibu na matumzi ya vifaa ya kujikinga na janga hilo ikiwemo fireestingusher, blanget, ndoo,na vyenginevyo.Pamoja na hayo amesema ni vyema kuondosha hofu linapotokea janga hilo ili uweze kufahamu aina yamoto, unaotaka kukabiliana nao ili usiweze kuleta madhara zaidi.Kwa upande wake Afisa Udhibiti ubora kutoka Taasisi ya Utafiti Zafiri Nd.Shaibu Silima Mnemba akielezea kitaalamu zaidi na mambo muhimu ya kuzingatia juu ya ubora wa kuchagua vifaa utavyo weza kutumia wakati wa kukabiliana na janga hilo ili kupunguza madhara zaidi yanayoweza kujitokeza"
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
            <a href="/Home">HOME</a> <span>&gt;</span>
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
                  {expandedCards[news.id] ? 'Show Less ' : 'More Details '}
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