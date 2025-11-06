import React, { useState, } from 'react';
import './News.css';

// Import images (you'll need to adjust these paths)
import heroImage from '../../assets/event/news.jpeg';
import news1 from '../../assets/event/balozi.jpg';
import news2 from '../../assets/event/5L0A9681.JPG';
import news3 from '../../assets/event/IMG_6525.JPG';
import news4 from '../../assets/event/5L0A0139.JPG';
import news5 from '../../assets/event/IMG_6058.JPG';
import news6 from '../../assets/event/IMG_1703.JPG';
import news7 from '../../assets/event/5L0A8711.JPG';
import news8 from '../../assets/event/pemba.JPG';
import news9 from '../../assets/event/meli.jpeg';
import news10 from '../../assets/event/IMG_9808.JPG';
import news11 from '../../assets/event/IMG_1010.JPG';



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
      title: "Mwenyekiti wa bodi ahimiza ushirikiano na ubunifu kazini",
      date: "October 03, 2025",
      shortText: "Mwenyekiti wa bodi ya Wakurugenzi taasisi...",
      fullText: "Mwenyekiti wa bodi ya Wakurugenzi taasisi ya utafiti wa uvuvi na maliasili za baharini zanzibar Zafiri Balozi Amina Salum Ali amewataka wafanyakazi wa taasisi hio kushirikiana kwa pamoja katika utendaji wa majukumu yao ili kufikia adhma na malengo ya serikali.Ameyasema hayo huko ZAFIRI Maruhubi Mjini Zanzibar baada ya kukutana na wafanyakazi wa Taasisi hio amewataka Wafanyakazi kuwa na imani na kujitahidi katika kufanya kazi kwani Zanzibar imekuwa na fursa nyingi za kuzitumia katika kuukuza uchumi wa nchi kupitia matumizi ya bahari.Kwa upande wake Mkurugenzi Mkuu wa Taasisi hio Dkt.Zakaria Ali Khamis ameshukuru kwa kukutana tena kwa pamoja katika kutekeleza majukumu ya serikali ili kuisaidia jamii nchini.Nae Msimamizi wa Idara za Utafiti Ndg.Ali Saidi Ali amesema licha ya kuwa na uhaba wa kifedha wameweza kufanikisha tafiti nne kwa mwaka 2024- 2025 kupitia jitihada za uongozi wa Taasisi hio ikiwepo utafiti wa kasa, utafiti wa uvuvi mdogo dogo wa uokotaji wa pweza na jamii zote ya aina za chaza, utafiti wa kutahmini upatikanaji wa mabaki ya samaki, utafiti wa uzalishaji wa mbegu bora za mwani, pamoja na kufanya tafiti wa kuangalia ubora wa maji ya bahari."
    },
    {
      id: 2,
      image: news2,
      alt: "News 2",
      status: "NEW",
      title: "Zanzibar kuboresha mifumo ya uvuvi",
      date: "July 16, 2025",
      shortText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni kuongeza mifumo ya ukusanyaji ...",
      fullText: "Serikali ya Mapinduzi ya Zanzibar ipo mbioni kuongeza mifumo ya ukusanyaji wa taarifa za uvuvi ambazo zitawasaidia wavuvi kuweza kupata mikopo ya Benki kwa urahisi kwa ajili ya kuendesha shughuli za uvuvi hapa nchini.Hayo yameelezwa na Mkurugenzi Mkuu wa wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Bahari Zanzibar (ZAFIRI) Dkt. Zakaria Ali Khamis baada ya kukutana na Balozi wa Uengereza Nchini Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie huko Ofisini kwake Maruhubi Mkoa wa Mjini Magharibi Wilaya ya Mjini Unguja.Dkt. Zakaria amesema Serikali kupitia Tasisi ya ZAFIRI imeweka mifumo ya vifaa vya Tableti 30 na PDS mia moja katika boti za wavuvi kwa ajili ya kupata taarifa sahihi za uvuvi na kutambua maeneo maalumu ya upatikanaji wa Samaki kwa wingi.Sambamba na hayo amesema lengo la kuja kwa Wageni hao ni kufahamu na kuangalia utekelezaji wa Mradi wa (AABS) wa ufungaji wa vifaa ambao umefadhiliwa na Seriakali ya Uengereza katika Shirika la WorldFish.Aidha Dkt. Zakaria amesema kwa kiasi kikubwa Mradi wa AABS umefikia malengo ya uchukuaji wa taarifa za uvuvi kutokana na mafunzo mbalimbali yaliotolewa kwa Wavuvi ili kusaidia kuboresha uvuvi wa kisasa hapa nchini Zanzibar.Kwa upande wake Mratibu wa Mradi wa Afrika, Asia BlueTech Super high way (AABS) hapa Zanzibar Dkt. Pascal Thoya amesema kwa kiasi kikubwa mradi umefikia malengo kutokana na upatikanaji wa taarifa zilizo katika mifumo ya kisasa ya uvuvi kwa wakati uliokusudiwa.Kwa Upande wao Wageni waliokuja Katika Taasisi ya ZAFIRI Balozi wa Uingereza Nnchi Tanzania Mhe. Mariane Young na Mkuu wa Idara ya Afrika Mashariki katika Wizara ya Mambo ya Nje ya Uingereza Bi. Lisa Mackie Wametoa pongezi kwa Serikali ya Mapinduzi ya Zanzibar kwa Juhud zilizofikiwa na mradi huo juu ya kusimamia wavuvii katika kuboresha uchukuaji wa taarifa za uvuvi mdogo mdogo hapa Visiwani Zanzibar.Miradi wa ufungaji wa vifaa vya uchukuaji wa Taarifa za uvuvi tayari umeanza kufanyika kwa miaka miwili hivi sasa na kukamilika kwake utachukua muda wa miaka 7 kwa Unguja na Pemba."
    },
    {
      id: 3,
      image: news3,
      alt: "News 3",
      status: "NEW",
      title: "Ugawaji wa mbegu za mwani kwa Wakulima",
      date: "July 10, 2025",
      shortText: "Zoezi hilo limefanywa na Watafiti kutoka Taasisi...",
      fullText: "Zoezi hilo limefanywa na Watafiti kutoka Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI kuwapatia Wakulima wa kijiji cha Kandwi na Bwereu mkoa wa kaskazini Unguja kwa lengo la kuondosha changamoto za upatikanaji wa mbegu kwa wakulima hao na kupata mbegu bora za mwani jambo ambalo litaongeza uzalishaji wa zao hilo."
    },
    {
      id: 4,
      image: news4,
      alt: "News 4",
      status: "NEW",
      title: "Ukaguzi wa vifaa vya maabara",
      date: "August 25, 2025",
      shortText: "Katibu Mkuu Wizara ya Uchumi wa Buluu na Uvuvi Zanzibar...",
      fullText: "Katibu Mkuu Wizara ya Uchumi wa Buluu na Uvuvi  Zanzibar Keptain Hamadi Bakari Hamad amewataka Wataalamu wa Taasisi ya Utafiti kufanya tafiti mbalimbali za Mazao ya Baharini kwa lengo la kuleta mafanikio kwa jamii na Taifa kwa ujumla.Amesema hayo baada ya kufanya  ziara ya ukaguzi wa Vifaa vya maabara katika  Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI huko Maruhubi Wilaya ya Mjini Magharibi Unguja.Kepteni Hamad ameseama kufanyika kwa tafiti za uvuvi na mazao ya baharini ni suala la lazima hapa nchini kutokana na tegemezi kuu la wananchi  wa Zanzibar ni Uchumi wa Buluu  ambao ndio chachu ya maendeleo kwa jamii husika.Sambamba na hayo amesema Taasisi ya ZAFIRI  inajukumu kubwa sana katika kusaidia Sera ya uchumi wa buluu ili kufikia adhma na adhimio la Mhe.Raisi wa Zanzibar Dkt.Hussen Ali Mwinyi katika kuwainua  wananchi wake kiuchumi.Kwa upande wake Mkurugenzi Mkuu  wa Taasisi ya Utfiti wa Uvuvi  Zanzibar ZAFIRI  Dkt. Zakaria Ali Khamis amesema lengo la kuongeza vifaa hivyo vya Maabara kwa ajili ya kufanya tafiti mbalimbali za uvuvi ili kupata matokeo bora na ya kisasa zaidi.Nae Msimamizi wa Vifaa vya Maabara Nd.Fatma Moh'd Qadir amesema Kuja kwa Mashine mbalimbali katika Taasisi hiyo kutasaidia kufanya tafiti mbalimbali za uchunguzi wa sampuli za uvuvi kwa wakati muafaka."
    },
    {
      id: 5,
      image: news5,
      alt: "News 5",
      status: "NEW",
      title: "ZAFIRI yajadili ushirikiano na UDSM",
      date: "Jun 06, 2025",
      shortText: "Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Imetembelewa...",
      fullText: "Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Imetembelewa na Kamati ya Skuli ya Uchumi ya Chuo Kikuu cha Dar-es-Salam kwa Lengo La Kujadili Mashirikiano ya Taasisi na Chuo Hicho."
    },
    {
      id: 6,
      image: news6,
      alt: "News 6",
      status: "NEW",
      title: "Watumishi wa umma wafundishwa kukabiliana na moto",
      date: "August 30, 2025",
      shortText: "Watumishi wa umma na wananchi kiujumla wametakiwa kufahamu ...",
      fullText: "Watumishi wa umma na wananchi kiujumla wametakiwa kufahamu namna ya kukabiliana na majanga ya moto pindi yanapoweza kutokea katika jamii zao.Ameyasema hayo Mkurugenzi Mkuu wa Taasisi ya utafiti wa uvuvi na maliasili za baharini zanzibar zafiri Dr.Zakaria Ali Khamis wakati wakipena mafunzo ya vitendo juu ya kukabiliana na majanga ya moto hafla hio iliyofanyika huko Ofisi ya Zafiri Maruhubi Mjini Unguja.Amesema lengo la mafunzo hayo nikuhakikisha kila mfanyakazi kuweza kujua namna ya kudhibiti na kuzima moto pindi janga hilo litakapoweza kujitokeza ili kuepukana na Athar mbali mbali zinazoweza kutokezea.Nae Nd.Gora Haji Gora akifahamisha utaratibu na matumzi ya vifaa ya kujikinga na janga hilo ikiwemo fireestingusher, blanget, ndoo,na vyenginevyo.Pamoja na hayo amesema ni vyema kuondosha hofu linapotokea janga hilo ili uweze kufahamu aina yamoto, unaotaka kukabiliana nao ili usiweze kuleta madhara zaidi.Kwa upande wake Afisa Udhibiti ubora kutoka Taasisi ya Utafiti Zafiri Nd.Shaibu Silima Mnemba akielezea kitaalamu zaidi na mambo muhimu ya kuzingatia juu ya ubora wa kuchagua vifaa utavyo weza kutumia wakati wa kukabiliana na janga hilo ili kupunguza madhara zaidi yanayoweza kujitokeza"
    },
    {
      id: 7,
      image: news7,
      alt: "News 7",
      status: "NEW",
      title: "Uzinduzi wa jukwaa la Uvuvi Pemba",
      date: "April 30, 2025",
      shortText: "Mkurugenzi Mkuu wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI....",
      fullText: "Mkurugenzi Mkuu wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Dkt.Zakaria Ali Khamis amesema lengo la kufunguliwa kwa jukwaa hilo ni kusaidia wavuvi kuondokana na uvuvi mdogo dogo ili kufikia uvuvi wa kileo na kisasa.Nae Mratibu wa Mradi wa Asia-Africa Blue Economy Superhighway AABS kutoka shirika la WorldFish Dkt.Pascal Toya Amesema mradi huo unaangalia zaidi katika kuboresha uvuvi na chazo cha kwanza katika uboreshaji huo ni kupata Takuwimu sahihi zinazoweza kuonesha uvuvi uko katika hatua gani ili kuendelea kupanga mikakati mengine ya kuboresha zaidi.Nao wavuvi wametowa maoni yao huku wakiomba kupewa elimu ili kuweza kufikia ule uvuvi wa kisasa unaohitajika na kujikwambuwa na maisha."
    },
    {
      id: 8,
      image: news8,
      alt: "News 8",
      status: "NEW",
      title: "Uzinduzi wa jukwaa la Uvuvi Unguja",
      date: "April 27, 2025",
      shortText: "Watumishi wa umma na wananchi kiujumla wametakiwa kufahamu ...",
      fullText: "Mkurugenzi Idara ya Maendeleo ya Uvuvi na Mazao ya Baharini Zanzibar Dkt.Salum Soud Hamed Akifungua jukwaa la kwanza la uvuvi lilofunguliwa huko ukumbi wa Idrisa AbdulWakiil Kikwajuni Zanzibar.Akizungumza katika uzinduzi huo Amepongeza jitihada za mabadiliko ya uvuvi kwa kuwa na mazingira mazuri yaliyowekwa na serikali ya awamu ya nane yaliyopelekea kuvutia wadau wa maendeleo na kuiweka karibu jamii katika utekelezaji wa miradi mabli mbali ya maendeleo ya uchumi wa buluu.Nae Mkurugenzi Mkuu wa Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar ZAFIRI Dkt.Zakaria Ali Khamis amesema lengo la kufunguliwa kwa jukwaa hilo ni kusaidia wavuvi kuondokana na uvuvi mdogo dogo ili kufikia uvuvi wa kileo na kisasa.Kwa upande wakeMkurugenzi wa Shirika la WIOMSA Dkt. Arthur Tuda amesema wamekuwa wakifanya kazi kwa mashirikiano ya Nchi zipatazo 10 katika ukanda wa Magharib ya bahari ya hindi hivyo mkutano huo wa wa pamoja ni kwa ajili ya kuboresha maarifa kutokana na mabadiliko mbali mbali yanayojitokeza katika nchi ikiwemo mabadiliko ya tabia nchi, uvuvi wa kisasa hivyo maarifa hayo yatasaidia sana katika maendeleo ya nchi.Nae Mratibu wa Mradi wa Asia-Africa Blue Economy Superhighway AABS kutoka shirika la WorldFish Dkt.Pascal Toya Amesema mradi huo unaangalia zaidi katika kuboresha uvuvi na chazo cha kwanza katika uboreshaji huo ni kupata Takuwimu sahihi zinazoweza kuonesha uvuvi uko katika hatua gani ili kuendelea kupanga mikakati mengine ya kuboresha zaidi.Nao wavuvi wametowa maoni yao huku wakiomba kupewa elimu ili kuweza kufikia ule uvuvi wa kisasa unaohitajika na kujikwambuwa na maisha."
    },
    {
      id: 9,
      image: news9,
      alt: "News 9",
      status: "NEW",
      title: "Uzinduzi wa jukwaa la Uvuvi Unguja",
      date: "April 01, 2025",
      shortText: "Waziri wa uchumi wa buluu na uvuvi zanzibar Mhe.Shabaan Ali Othman akizungumza...",
      fullText: "Waziri wa uchumi wa buluu na uvuvi zanzibar Mhe.Shabaan Ali Othman akizungumza katika sherehe ya kuadhimisha miaka 50 ya kuanzishwa kwa Meli ya utafiti wa bahari na kuasili mara ya kwanza katika bandari ya Malindi hapa Zanzibar. Mhe.Shaaban Ali Othman Amesema ujio wa meli hio ya utafiti itaenda kusaidia kujuwa uhalisia wa bahari na vilivyomo ndani ya bahari. Aidha Mhe Shaaban amesema Serikali imeshafanya uwekezaji mkubwa kupitia bahari kwa kupatikana kwa taarifa za kitaalam kupitia baharini jambo ambalo litawezesha serikali kujuwa namna bora ya kuwasaidia wavuvi katika kupata maeneo sahihi ya kufanya uvuvi wao."
    },
    {
      id: 10,
      image: news10,
      alt: "News 10",
      status: "NEW",
      title: "Uzinduzi wa jukwaa la Uvuvi Unguja",
      date: "March 30, 2025",
      shortText: "Uandaaji wa boya kwa ajili ya kupelekwa Baharini ili kukusanya taarifa...",
      fullText: "Uandaaji wa boya kwa ajili ya kupelekwa Baharini ili kukusanya taarifa mbalimbali za bahari. Zoezi hilo limeandaliwa na Taasisi ya Utafiti wa Uvuvi na Maliasili za Baharini Zanzibar (ZAFIRI) kupitia wataalamu kutoka China kwa kushirikiana na Watafiti wa Taasisi hio."
    },
    {
      id: 11,
      image: news11,
      alt: "News 11",
      status: "NEW",
      title: "Ugawaji wa mbegu za Mwani",
      date: "March 15, 2025",
      shortText: "The exercise of distributing millet seeds to farmers...",
      fullText: "The exercise of distributing millet seeds to farmers They are in different groups in the coastal village of Mchangani in the northern province of Unguja. The activity has been carried out by researchers from the Institute of Fisheries and Marine Resources Research in Zanzibar ZAFIRI in collaboration with the Good Neighbor Organization with the aim of eliminating the challenges of seaweed farmers on the availability of quality seaweed seeds which will help in producing seaweed in large numbers. And those with standards and quality."
    },
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