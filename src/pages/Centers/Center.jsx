import React from 'react';
import './Center.css';
import directorImage from '../../assets/staff/IMG-20250906-WA0076.jpg';

const Centre = ({ title, description, features, imageUrl }) => {
  // Properly formatted description
  const defaultDescription = `The Pemba Center of the Zanzibar Fisheries and Marine Resources Research Institute (ZAFIRI) is one of the key branches of the Institute, located on Pemba Island, which is part of the Zanzibar Archipelago. The Center was established to bring research, innovation, and sustainable development initiatives closer to the communities and marine environments of Pemba.

Its strategic position allows it to respond to the unique challenges and opportunities of the island, especially because Pemba is surrounded by rich marine ecosystems, coral reefs, and fishing communities that depend heavily on marine resources.

The Pemba Center plays a central role in conducting scientific research that focuses on fisheries management, marine biodiversity conservation, and the sustainable use of ocean resources. Scientists and researchers at the center work on monitoring fish stocks, studying the health of coral reefs, and exploring new techniques that can help improve the livelihoods of local fishing communities without harming the environment.

Apart from research, the center also emphasizes community engagement and training. It works closely with fishermen, seaweed farmers, and other stakeholders to introduce modern, eco-friendly fishing practices, promote aquaculture, and raise awareness about marine conservation. By doing so, it helps reduce overfishing, protect endangered species, and improve food security for the people of Pemba.

In addition, the Pemba Center contributes to policy support and decision-making for the government of Zanzibar. The data and knowledge generated from its activities are used to guide strategies on marine protection, climate change adaptation, and the sustainable development of the blue economy. The center also collaborates with schools, universities, and international research organizations to build capacity and exchange knowledge.

Overall, the Pemba Center of ZAFIRI is more than just a research hub. It is a bridge between science, policy, and the community, dedicated to ensuring that Pemba's marine resources are managed wisely and preserved for future generations. Its work is crucial not only for the people of Pemba but also for the wider goals of protecting Zanzibar's marine environment and strengthening its blue economy.`;

  return (
    <>
      <div className="centre-container">
        <div className="centre-header">
          <h1>Pemba Center</h1>
        </div>

        <div className="director-container">
          <div className="director-image">
            <img src={directorImage} alt="Dr. khamis" />
          </div>

          <div className="director-info">
            <p className="director-name">
              <strong>Dr. khamis (Ph.D)</strong>
            </p>
            <p className="director-position">
              Ag. Centre Director
            </p>
          </div>
        </div>
      </div>

      <div className="page-description">
        <div className="description-container">
          <div className="description-content">
            <h1>{title || "About Pemba Centre"}</h1>

            <div className="description-text">
              <p>
                {description || defaultDescription}
              </p>

              {features && features.length > 0 ? (
                <div className="features-section">
                  <h2>Key Features</h2>
                  <ul>
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="features-section">
                  <h2>Our Focus Areas</h2>
                  <ul>
                    <li>Fisheries Management Research</li>
                    <li>Marine Biodiversity Conservation</li>
                    <li>Sustainable Ocean Resource Use</li>
                    <li>Community Engagement and Training</li>
                    <li>Policy Support and Decision-Making</li>
                    <li>Climate Change Adaptation</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {imageUrl && (
            <div className="description-image">
              <img src={imageUrl} alt="Pemba Centre illustration" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Centre;