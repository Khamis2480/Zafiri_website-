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
import s from '../../assets/staff/IMG-20250906-WA0075.jpg';
import u from '../../assets/staff/IMG-20250906-WA0096.jpg';
import v from '../../assets/staff/IMG-20250906-WA0097.jpg';
import t from '../../assets/staff/IMG-20250906-WA0098.jpg';
import ab from '../../assets/staff/IMG-20250924-WA0013.jpg';
import ac from '../../assets/staff/IMG-20250924-WA0012.jpg';
import ad from '../../assets/staff/IMG-20250906-WA0077.jpg';
import ae from '../../assets/staff/IMG-20250906-WA0099.jpg';
import af from '../../assets/staff/IMG-20250906-WA0081.jpg';
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
      bio: "Ali has worked in the natural resources sector for more than 10 years. He also worked with CARE International and WWF Tanzania in Communication, Awareness and Training.",
      image: aliThaniImage
    },
    {
      name: "Omar Hussein Ngushi",
      position: "Statistic officer",
      gender: "Male",
      bio: "Lorna brings extensive technical expertise with over 15 years of experience. She has been pivotal in developing innovative solutions.",
      image: lornaSladeImage
    },
    {
      name: "Abuu Bakar Thabit Noman",
      position: "Aquaculture Research Officer",
      gender: "Male",
      bio: "s an Aquaculture Researcher specializing in sustainable marine aquaculture and resource management, promoting food security and economic growth. He advances innovative practices, engages communities, and supports the Blue Economy while safeguarding marine resources.",
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
      bio: "is a Geoinformatics officer specializing in marine research using GIS, spatial analysis and Remote sensing technology.I am passionate on using spatial technology  to support  decision  making.conservtion plans  for sustainable development of marine resources.",
      image: d
    },
    {
      name: "Khalid Rashid Suleiman",
      position: "Office Supervisor",
      gender: "Male",
      bio: "Provides administrative and office support to ensure smooth operations.",
      image: e
    },
    {
      name: "Maitham Tahir Bakar",
      position: "Fisheries Research Officer",
      gender: "Female",
      bio: "is an aquaculture specialist dedicated to sustainable practices, conducting research and collaborating with stakeholders to enhance food security and biodiversity. She is committed to supporting communities and preserving Zanzibar’s marine heritage.",
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
      bio: "is a specialist in sustainable aquaculture and marine resource management. She improves aquaculture productivity and livelihoods through research, community collaboration, and sustainable fish and seaweed farming. Committed to outreach and empowering farmers for sustainable economy.",
      image: i
    },
    {
      name: "Staff Member J",
      position: "Researcher",
      gender: "Female",
      bio: "Conducts research and provides insights for program development.",
      image: j
    },
    {
      name: "Yussuf Abdulla Mohamed",
      position: "Lboratory Assistance(Chemistry)",
      gender: "Male",
      bio: "Supports day-to-day operations and logistics management.",
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
      gender: "Female",
      bio: "Oversees project monitoring and evaluation to ensure quality delivery.",
      image: n
    },
    {
      name: "Staff Member O",
      position: "IT Support",
      gender: "Male",
      bio: "Provides IT support, manages digital systems, and maintains databases.",
      image: o
    },
    {
      name: "Shadia Ahmada Hamad ",
      position: "Geoinformatics Officer",
      gender: "Female",
      bio: "is a geospatial scientist focused on marine and environmental conservation. She applies GIS, remote sensing, and spatial data analysis to map and monitor coastal ecosystems. Her work supports sustainable management, climate change reporting, and conservation planning.",
      image: p
    },
    {
      name: "Nyange Hassan Mwadini",
      position: "Microbiology Laboratory Officer",
      gender: "Male",
      bio: "Leads program strategy, implementation, and resource mobilization.",
      image: q
    },
    {
      name: "Staff Member R",
      position: "Assistant Researcher",
      gender: "Female",
      bio: "Supports research initiatives, data collection, and reporting.",
      image: r
    },
    {
      name: "Omar Hussein Ngushi",
      position: "Communications Officer",
      gender: "Male",
      bio: "Handles organizational communications, social media, and public relations.",
      image: s
    },
    {
      name: "Moh'd Azad Sharif",
      position: "Operations Assistant",
      gender: "Female",
      bio: "Assists in day-to-day operations and ensures project milestones are met.",
      image: t
    },
    {
      name: "Staff Member U",
      position: "Project Intern",
      gender: "Male",
      bio: "Provides support to senior staff while learning practical project management.",
      image: u
    },
    {
      name: "Jamila Haji Ali",
      position: "Marine Conservation Research Officer",
      gender: "Female",
      bio: "Engages in fieldwork, data entry, and preliminary analysis.",
      image: v
    },
    {
      name: "Hashim Kombo Hassan",
      position: "Marine Conservation Research Officer",
      gender: "Male",
      bio: "is a marine conservation researcher whose work examines coastal ecosystem management, marine litter dynamics, aquatic ecosystems, the ocean observation system, and the impacts of climate change on marine resources in Zanzibar. ",
      image: ab
    },
    {
      name: "Ahmed Kombo Suleiman",
      position: "Marine Ecology Research Officer",
      gender: "Male",
      bio: "Engages in fieldwork, data entry, and preliminary analysis.",
      image: ac
    },
    {
      name: "Mohammed Omar Khamis",
      position: "Marine Conservation Research Officer",
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
