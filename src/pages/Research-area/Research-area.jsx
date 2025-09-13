import React from 'react';
import './Research-area.css';

const ResearchAreas = () => {
  const researchAreas = [
    {
      id: 1,
      title: "Fish Catch and Stock Assessment",
      description: "Research focused on evaluating fish populations, monitoring catch data, and assessing stock health to ensure sustainable fishing practices.",
      icon: "🐟"
    },
    {
      id: 2,
      title: "Capture Fishery",
      description: "Studies on wild fish harvesting techniques, ecosystem impacts, and management strategies for sustainable capture fisheries.",
      icon: "🎣"
    },
    {
      id: 3,
      title: "Aquaculture",
      description: "Research on fish farming systems, breeding techniques, and sustainable practices for cultivating aquatic organisms.",
      icon: "🏞️"
    },
    {
      id: 4,
      title: "Fish Biology",
      description: "Investigating the physiology, genetics, behavior, and life cycles of various fish species to support conservation and aquaculture efforts.",
      icon: "🔬"
    },
    {
      id: 5,
      title: "Fish Disease",
      description: "Study of pathogens, immune responses, and treatment methods to maintain healthy fish populations in both wild and farmed environments.",
      icon: "🦠"
    },
    {
      id: 6,
      title: "Oceanography",
      description: "Research on physical, chemical, and biological aspects of oceans and their influence on marine life and ecosystems.",
      icon: "🌊"
    },
    {
      id: 7,
      title: "Climate Change and Environment",
      description: "Examining the impacts of climate change on marine ecosystems and developing adaptation strategies for fisheries and aquaculture.",
      icon: "🌡️"
    },
    {
      id: 8,
      title: "Coastal and Marine Pollution",
      description: "Investigating pollutants, their sources, impacts on marine life, and developing mitigation strategies for healthier oceans.",
      icon: "🗑️"
    },
    {
      id: 9,
      title: "Socio-economics of Fisheries and Aquaculture",
      description: "Analyzing the economic viability, market dynamics, and social impacts of fishing and aquaculture communities.",
      icon: "💰"
    },
    {
      id: 10,
      title: "Bioinformatics",
      description: "Applying computational tools to analyze biological data for genomics, proteomics, and other molecular studies in aquatic species.",
      icon: "💻"
    },
    {
      id: 11,
      title: "Fish Farming and Processing Technologies",
      description: "Developing innovative technologies for efficient fish farming, harvesting, and processing to improve yield and quality.",
      icon: "🏭"
    },
    {
      id: 12,
      title: "Aquatic Ecosystems and Biodiversity",
      description: "Research on the diversity of aquatic life, ecosystem functions, and conservation strategies for preserving biodiversity.",
      icon: "🐠"
    },
    {
      id: 13,
      title: "Fish Breeding and Feeding",
      description: "Studies on selective breeding, nutrition, feed formulation, and feeding strategies to optimize growth and health in aquaculture.",
      icon: "🍽️"
    },
    {
      id: 14,
      title: "Fish Handling, Storage, Processing, Marketing and Distribution Facilities",
      description: "Research on post-harvest technologies, value addition, cold chain management, and market access for fishery products.",
      icon: "🚚"
    },
    {
      id: 15,
      title: "Tissue Culturing of Seaweed and Other Marine Cultured Species",
      description: "Developing tissue culture techniques for seaweed and other marine species to support sustainable mariculture and biotechnology applications.",
      icon: "🌿"
    }
  ];

  return (
   <div className="research-areas-container">
      <div className="research-areas-header">
        <h1>Research Areas</h1>
        <p>
          Exploring diverse aspects of fisheries, aquaculture, and marine
          sciences to advance sustainable practices and knowledge.
        </p>
      </div>

      <div className="research-areas-grid">
        {researchAreas.map((area) => (
          <div key={area.id} className="research-areas-card">
            <div className="research-areas-icon">{area.icon}</div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <button className="research-areas-button">Learn More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchAreas;