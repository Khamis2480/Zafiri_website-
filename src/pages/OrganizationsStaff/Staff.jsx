import React, { useState } from 'react';
import './Staff.css';
import heroImage from '../../assets/staff/our tim.jpg';

// Import staff images
import abdul from '../../assets/staff/IMG-20250906-WA0073.jpg';
import aliThaniImage from '../../assets/staff/IMG-20250906-WA0074.jpg';
import lornaSladeImage from '../../assets/staff/IMG-20250906-WA0075.jpg';
import sakhileTsotsobeImage from '../../assets/staff/IMG-20250906-WA0076.jpg';
import a from '../../assets/staff/IMG-20250906-WA0077.jpg';
import b from '../../assets/staff/IMG-20250906-WA0078.jpg';
import c from '../../assets/staff/IMG-20250906-WA0079.jpg';
import d from '../../assets/staff/IMG_9677.JPG';
import e from '../../assets/staff/IMG-20250906-WA0081.jpg';
import f from '../../assets/staff/IMG-20250906-WA0082.jpg';
import g from '../../assets/staff/IMG-20250906-WA0083.jpg';
import h from '../../assets/staff/IMG-20250906-WA0084.jpg';
import i from '../../assets/staff/IMG-20250906-WA0085.jpg';
import j from '../../assets/staff/IMG-20250906-WA0086.jpg';
import k from '../../assets/staff/IMG-20250906-WA0087.jpg';
import l from '../../assets/staff/IMG-20250906-WA0088.jpg';
import m from '../../assets/staff/IMG-20250906-WA0089.jpg';
import n from '../../assets/staff/IMG-20250906-WA0090.jpg';
import o from '../../assets/staff/IMG-20250906-WA0091.jpg';
import p from '../../assets/staff/IMG-20250906-WA0092.jpg';
import q from '../../assets/staff/IMG-20250906-WA0093.jpg';
import r from '../../assets/staff/IMG-20250906-WA0094.jpg';
import s from '../../assets/staff/IMG_0129.JPG';
import u from '../../assets/staff/IMG-20250906-WA0096.jpg';
import v from '../../assets/staff/IMG-20250906-WA0097.jpg';
import t from '../../assets/staff/IMG-20250906-WA0098.jpg';
import ab from '../../assets/staff/IMG-20250924-WA0013.jpg';
import ac from '../../assets/staff/IMG-20250924-WA0012.jpg';
import ad from '../../assets/staff/IMG_9828.JPG';
import ae from '../../assets/staff/IMG-20250906-WA0099.jpg';
import af from '../../assets/staff/IMG_0081.JPG';
import ag from '../../assets/staff/IMG-20250924-WA0009.jpg';

const Team = () => {
  const [expandedCards, setExpandedCards] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGender, setSelectedGender] = useState("All");
  const [sortOrder, setSortOrder] = useState("HighToLow"); // default rank order

  const toggleReadMore = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // ✅ Team Members
  const teamMembers = [
    {
      name: "Abdul-Wahid Yusuph Mohamed",
      position: "Electrician",
      gender: "Male",
      bio: "Said Khalid is an experienced leader with a strong background in management and strategic planning. He has been instrumental in guiding the company's vision and growth.",
      image: abdul
    },
    {
      name: "Rukia Shebe Ali",
      position: "Microbiology",
      gender: "Female",
      bio: " Microbiologist specialized in bacteria, fungi, and algae, with a focus on their microscopic characteristics and features. Skilled in studying microbial diversity and functions in aquatic systems. Dedicated to advancing knowledge that supports ecosystem health and sustainable resource management.",
      image: aliThaniImage
    },
    {
      name: "Omar Hussein Ngushi",
      position: "Statistic officer",
      gender: "Male",
      bio: " He is skilled Data analysit professional with a background in official statistics. I specializes in data management, statistical analysis, and research and Questionnare design, with strong expertise in analytical tools such as STATA, R, SPSS, and Excel. His work focuses on producing evidence-based insights to guide policy development, project evaluation, and sustainable marine resource management.",
      image: lornaSladeImage
    },
    {
      name: "Abuu Bakar Thabit Noman",
      position: "Aquaculture Research Officer",
      gender: "Male",
      bio: "He is an Aquaculture Researcher specializing in sustainable marine aquaculture and resource management, promoting food security and economic growth. He advances innovative practices, engages communities, and supports the Blue Economy while safeguarding marine resources.",
      image: sakhileTsotsobeImage
    },
    {
      name: "Mohammed Omar Khamis",
      position: "Marine Conservation Researcher",
      gender: "Male",
      bio: "Dedicated team member contributing to technical operations and support.",
      image: a
    },
    {
      name: "Tatu Mohamed Naim",
      position: "Human Resource Officer",
      gender: "Female",
      bio: "Focused on research and coordination tasks within the team.",
      image: b
    },
    {
      name: "Mwamvua Juma Haji",
      position: "Assistance Accountant",
      gender: "Female",
      bio: "Assists in data analysis, reporting, and supporting project documentation.",
      image: c
    },
    {
      name: "Salwa Haji Abdulla ",
      position: "Geo-Informatics Officer",
      gender: "Female",
      bio: "She is a Geoinformatics officer specializing in marine research using GIS, spatial analysis and Remote sensing technology.I am passionate on using spatial technology  to support  decision  making.conservtion plans  for sustainable development of marine resources.",
      image: d
    },
    {
      name: "Khalid Rashid Suleiman",
      position: "Office Supervisor",
      gender: "Male",
      bio: "He is a Office supervisor at ZAFIRI in my Biology to ensuring the building is clean and tidy and also ensuring all work servics are abvailable such as water and electricity, Transportation and also ensure the safety of the building and all work work assets are safe",
      image: e
    },
    {
      name: "Maitham Tahir Bakar",
      position: "Fisheries Research Officer",
      gender: "Female",
      bio: "She is an aquaculture specialist dedicated to sustainable practices, conducting research and collaborating with stakeholders to enhance food security and biodiversity. She is committed to supporting communities and preserving Zanzibar’s marine heritage.",
      image: f
    },
    {
      name: "Gora Haji Gora",
      position: "Electrician",
      gender: "Male",
      bio: "Responsible for planning and executing assigned project activities.",
      image: g
    },
    {
      name: "Fatma Mohammed Kadir",
      position: "Finance Officer",
      gender: "Female",
      bio: "Manages budgets, financial tracking, and accountability processes.",
      image: h
    },
    {
      name: "Sukhayla Khamis Juma",
      position: "Aqualculture Research Officer",
      gender: "Female",
      bio: "She is specialist in sustainable aquaculture and marine resource management. She improves aquaculture productivity and livelihoods through research, community collaboration, and sustainable fish and seaweed farming. Committed to outreach and empowering farmers for sustainable economy.",
      image: i
    },
    {
      name: "Hidaya Abdallah Juma",
      position: "Secretary",
      gender: "Female",
      bio: "Conducts research and provides insights for program development.",
      image: j
    },
    {
      name: "Yussuf Abdulla Mohamed",
      position: "Laboratory Assistance(Chemistry)",
      gender: "Male",
      bio: "He is skilled Laboratory Technician with experience in conducting sample collection and sample tests, maintaining laboratory Equipment (handling) and maintaining laboratory safety and accuracy in scientific analysis. ",
      image: k
    },
    {
      name: "Bishara Ali Juma",
      position: "Fisheries Research Officer",
      gender: "Female",
      bio: "Handles recruitment, welfare, and staff relations within the organization.",
      image: l
    },
    {
      name: "Tum Mohamed Sheikh",
      position: "Marine Environment Conservation Researcher",
      gender: "Female",
      bio: "Organizes and manages staff and community training sessions.",
      image: m
    },
    {
      name: "Abdallah Hamad Bakari",
      position: "Monitoring & Evaluation",
      gender: "Male",
      bio: "Oversees project monitoring and evaluation to ensure quality delivery.",
      image: n
    },
    {
      name: "Rahma Sultan Salum",
      position: "Archieve and Records Officer",
      gender: "Female",
      bio: "Provides IT support, manages digital systems, and maintains databases.",
      image: o
    },
    {
      name: "Shadia Ahmada Hamad ",
      position: "Geoinformatics Officer",
      gender: "Female",
      bio: "He is geospatial scientist focused on marine and environmental conservation. She applies GIS, remote sensing, and spatial data analysis to map and monitor coastal ecosystems. Her work supports sustainable management, climate change reporting, and conservation planning.",
      image: p
    },
    {
      name: "Nyange Hassan Mwadini",
      position: "Laboratory technician",
      gender: "Male",
      bio: "He is laboratory technician he hold a Bachelor of Science in Biology which provide him with a solid foundation in biological sciences. In his role as a lab technician   he utilize his experties to coduct analysis of sample and contribut to scientific research and health care development ",
      image: q
    },
    {
      name: "Ali Said Ali",
      position: "Head of Research Department",
      gender: "Male",
      bio: "Supports research initiatives, data collection, and reporting.",
      image: r
    },
    {
      name: "Mansur Suleiman Juma",
      position: "Lab Chemists",
      gender: "Male",
      bio: "He is chemist focuses on test and studies materials to undestand their chemical properties. He use laboratory equipmentto analyze marine resource and product.he give support in research quality control and environmrntal protection",
      image: s
    },
    {
      name: "Moh'd Azad Sharif",
      position: "Chief ICT officer",
      gender: "Male",
      bio: " is an accomplished Information and Communication Technologies Officer with a Bachelor of Science in Computer Science, with expertise in system administration, Mohammed has successfully managed various systems, including the Government Mailing System, Electronic Office System, and Zanzibar Government Asset Registration System. His technical skills also extend to Local Internet Services, CCTV Camera Systems, PBX systems, Attendance Biometric Systems, and Advanced Access Control Systems. Additionally, he provides crucial help desk support for internal assistance, ensuring seamless operations.",
      image: t
    },
    {
      name: "Yussuf Salim Bakar",
      position: "Aquaculture Research Officer",
      gender: "Male",
      bio: "He is Researcher at ZAFIRI His work is mainly focus on coral reef and reef fisheries management marine culture and fish stock assesment",
      image: u
    },
    {
      name: "Jamila Haji Ali",
      position: "Marine Conservation Research Officer",
      gender: "Female",
      bio: "She is a bachelor degree holder in Geography and Environmental studies. Her main functions in ZAFIRl are to conduct all marine related Researches basically in Marine Conservation, dissemination of findings. Moreover, she is also working with GIS in marine and coastal researches, with focus on mapping, monitoring and interpretation to support marine conservation, climate adaptation and sustainable resources management",
      image: v
    },
    {
      name: "Hashim Kombo Hassan",
      position: "Marine Conservation Research Officer",
      gender: "Male",
      bio: "He is marine conservation researcher whose work examines coastal ecosystem management, marine litter dynamics, aquatic ecosystems, the ocean observation system, and the impacts of climate change on marine resources in Zanzibar. ",
      image: ab
    },
    {
      name: "Ahmed Kombo Suleiman",
      position: "Marine Ecology Research Officer",
      gender: "Male",
      bio: "Dedicated to marine ecosystems and marine life by supporting marine conservation through scientific research and fieldwork to promoting sustainable conservation practices of marine resources.",
      image: ac
    },
    {
      name: "Abdul Fahad Othman",
      position: "Chief Accountant",
      gender: "Male",
      bio: "As a marine conservation researcher I am committed to strengthening marine conservation and sustainable uses of marine and coastal resources.  I have actively contributed to various marine scientific research, conservation initiatives and monitoring of marine ecosystem resources.",
      image: ad
    },
    {
      name: "Ahmad Khamis Ali",
      position: "Marine Ecology Research Officer",
      gender: "Male",
      bio: "Engages in fieldwork, data entry, and preliminary analysis.",
      image: ae
    },
    {
      name: "Nadiya Juma Haji",
      position: "Marine Ecology Research Officer",
      gender: "Female",
      bio: "Engages in fieldwork, data entry, and preliminary analysis.",
      image: af
    },
    {
      name: "Riziki Abdulla Sharia",
      position: "Store keeper",
      gender: "Female",
      bio: "Engages in fieldwork, data entry, and preliminary analysis.",
      image: ag
    },
  ];

  // ✅ Rank priority
  const rankOrder = {
    "Chief Executive Officer": 1,
    "Chief Technical Advisor": 2,
    "Marine Conservation Officer": 3,
    "Program Manager": 4,
    "Project Officer": 5,
    "Research Staff": 6,
    "Research Assistant": 7,
    "Field Coordinator": 8,
    "Admin Officer": 9,
    "Community Liaison": 10,
    "Finance Officer": 11,
    "Technical Assistant": 12,
    "Researcher": 13,
    "Support Officer": 14,
    "HR Officer": 15,
    "Training Coordinator": 16,
    "Monitoring & Evaluation": 17,
    "IT Support": 18,
    "Field Officer": 19,
    "Assistant Researcher": 20,
    "Communications Officer": 21,
    "Operations Assistant": 22,
    "Project Intern": 23,
    "Research Intern": 24,
  };

  // ✅ Filtering + Sorting
  const filteredMembers = teamMembers
    .filter(member => {
      return (
        (selectedGender === "All" || member.gender === selectedGender) &&
        (member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          member.position.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    })
    .sort((a, b) => {
      const rankA = rankOrder[a.position] || 99;
      const rankB = rankOrder[b.position] || 99;
      return sortOrder === "HighToLow" ? rankA - rankB : rankB - rankA;
    });

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>THE PEOPLE BEHIND OUR SUCCESS</h1>
          <div className="breadcrumb">
            <a href="/">HOME</a> <span>&gt;</span>
            <span>OUR DEDICATED TEAM</span>
          </div>
        </div>
      </section>

      {/* Heading + Filter Section */}
      <div className="team-container">
        <h2 className="team-heading">Our Team</h2>

        <div className="filter-bar">
          {/* Search */}
          <input
            type="text"
            placeholder="Search staff..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Gender Filters */}
          <div className="filter-buttons">
            {["All", "Male", "Female"].map(gender => (
              <button
                key={gender}
                className={`filter-btn ${selectedGender === gender ? "active" : ""}`}
                onClick={() => setSelectedGender(gender)}
              >
                {gender}
              </button>
            ))}
          </div>

          {/* Rank Dropdown */}
          <div className="rank-dropdown">
            <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
              <option value="HighToLow">Rank: High → Low</option>
              <option value="LowToHigh">Rank: Low → High</option>
            </select>
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {filteredMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-card-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-member-photo"
                />
              </div>
              <div className="team-card-content">
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-position">{member.position}</p>
                <p className={`team-member-bio ${expandedCards[index] ? 'expanded' : ''}`}>
                  {expandedCards[index] ? member.bio : `${member.bio.substring(0, 100)}...`}
                </p>
                <button
                  className="read-more-btn"
                  onClick={() => toggleReadMore(index)}
                >
                  {expandedCards[index] ? 'Read less' : 'Read more'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
