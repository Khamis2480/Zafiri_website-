import React, { useState } from 'react';
import './Staff.css';

// Import placeholder images (replace these with your actual image paths)
import saidKhalidImage from '../../assets/partner/1.jpeg';
import aliThaniImage from '../../assets/partner/5.jpeg';
import lornaSladeImage from '../../assets/partner/6.png';
import sakhileTsotsobeImage from '../../assets/partner/7.jpeg';

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
    }
  ];

  return (
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
  );
};

export default Team;