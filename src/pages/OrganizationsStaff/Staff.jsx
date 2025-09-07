import React, { useState } from 'react';
import './Staff.css';
import heroImage from '../../assets/staff/our tim.jpg';
// Import placeholder images (replace these with your actual image paths)
import saidKhalidImage from '../../assets/staff/IMG-20250906-WA0073.jpg';
import aliThaniImage from '../../assets/staff/IMG-20250906-WA0074.jpg';
import lornaSladeImage from '../../assets/staff/IMG-20250906-WA0075.jpg';
import sakhileTsotsobeImage from '../../assets/staff/IMG-20250906-WA0076.jpg';
import a from '../../assets/staff/IMG-20250906-WA0077.jpg';
import b from '../../assets/staff/IMG-20250906-WA0078.jpg';
import c from '../../assets/staff/IMG-20250906-WA0079.jpg';
import d from '../../assets/staff/IMG-20250906-WA0080.jpg';
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
import s from '../../assets/staff/IMG-20250906-WA0095.jpg';
import u from '../../assets/staff/IMG-20250906-WA0096.jpg';
import v from '../../assets/staff/IMG-20250906-WA0097.jpg';
import t from '../../assets/staff/IMG-20250906-WA0098.jpg';

const Team = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleReadMore = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const teamMembers = [
    {
      name: "Said Khalid",
      position: "Chief Executive Officer",
      bio: "Said Khalid is an experienced leader with a strong background in management and strategic planning. He has been instrumental in guiding the company's vision and growth over the past several years.",
      image: saidKhalidImage
    },
    {
      name: "Ali Thani",
      position: "Technical Advisor Co-founder",
      bio: "Ali has worked in the natural resources sector (forestry & fisheries) under Zanzibar Government for more than 10 years. He has also worked for CARE International and WWF Tanzania for more than 12 years in Communication, Awareness and Training. Ali is from Zanzibar and for the last 7 years he's worked in community-based coastal",
      image: aliThaniImage
    },
    {
      name: "Lorna Slade",
      position: "Technical Advisor Co-founder",
      bio: "Lorna brings extensive technical expertise to the team with over 15 years of experience in the industry. She has been pivotal in developing innovative solutions and guiding the technical direction of the company.",
      image: lornaSladeImage
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: sakhileTsotsobeImage
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: a
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: b
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: c
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: d
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: sakhileTsotsobeImage
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: e
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: f
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: g
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: h
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: i
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: j
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: k
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: l
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: m
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: n
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: o
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: p
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: q
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: r
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: s
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: t
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: u
    },
    {
      name: "Sakhile Tsotsobe",
      position: "Chief Technical Advisor",
      bio: "Sakhile is a seasoned technical expert with a proven track record in implementing complex systems and providing strategic technical guidance. His insights have been crucial to the company's success.",
      image: v
    }
  ];

  return (
    <>
      {/* Hero Section */}
      < section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }
        }
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>THE PEOPLE BEHIND OUR SUCCESS</h1>
          <div className="breadcrumb">
            <a href="../../../Home page/home/home.html">HOME</a> <span>&gt;</span>
            <span>OUR DEDICATED TEAM </span>
          </div>
        </div>
      </section >

      <div className="team-container">
        <h2 className="team-heading">Our Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
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