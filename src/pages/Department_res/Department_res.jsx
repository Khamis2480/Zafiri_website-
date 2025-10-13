import React from "react";
import heroImage from "../../assets/laboratory/research-page.jpg";
import researchImage from "../../assets/laboratory/road.jpg";
import researchimage from "../../assets/laboratory/respu.jpg";
import promoImage from "../../assets/laboratory/strategic.webp"
import "./Department_res.css";

function Research() {
    return (
        <section
            className="hero-research-dept"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <div className="overlay-research-dept"></div>
            <div className="hero-research-content-dept">
                <h1>Department of Research</h1>
                <p>
                    Our Research Department focuses on advancing knowledge, generating
                    innovative solutions, and supporting evidence-based decision-making
                    in fisheries, aquaculture, and marine ecosystems.
                </p>
            </div>
        </section>
    );
}

function ResearchDescription() {
    return (
        <section className="research-description-dept">
            <h2>
                Multidisciplinary and collaborative research as the foundation of our
                department
            </h2>
            <p>
                The aim of our Department of Research is to promote innovation, generate new knowledge, and 
                provide solutions that contribute to national development and global progress.
                 Collaboration across different fields of study and disciplines is central to our work.
            </p>
            <p>
              Every year, we manage numerous funded projects and partnerships with universities,
            government institutions, and international organizations.These projects focus on advancing science, 
            technology, and sustainable development through both applied and theoretical research.
            </p>
            <p>
            Key supporters of our department include the Ministry of Education and Vocational Training,
             the Ministry of Blue Economy and Fisheries, as well as national and international research councils. In addition,
             we collaborate with global funding partners to ensure our research remains impactful and relevant.
            </p>
            <hr />
        </section>
    );
}

function ResearchProjects() {
    const projects = [
        {
            title: "Division of fisheries Research and aquaculture",
            description:
                "The Division of Fisheries Research is dedicated to conducting research and innovations on the fisheries value chain, including value chain studies, innovative fishing methods, and the dissemination of research findings.",
            link: "#",
        },
        {
            title: "Division of Marine Environment Conservation Research",
            description:
                "A collaborative program between local universities and international partners to study climate change impacts on marine ecosystems and propose practical solutions for coastal communities.",
            link: "#",
        },
        {
            title: "Division of Marine system Research",
            description:
                "This initiative strengthens the research skills of young scientists through training, mentorship, and scholarships, ensuring a sustainable future for research and innovation in the country.",
            link: "#",
        },
    ];

    return (
        <section className="projects-section-research">
            <h2>Our Division </h2>
            <div className="projects-grid-research">
                {projects.map((project, index) => (
                    <div className="project-card-research" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function ResearchInfo() {
    return (
        <section className="research-info-dept">
            <div className="research-image-dept">
                <img src={researchImage} alt="Research Department" />
            </div>
            <div className="research-content-dept">
                <h2>Research and Innovation at ZAFIRI</h2>
                <p>
                   The Department of Research plays a central role in advancing knowledge, innovation,
                    and evidence-based solutions for fisheries, aquaculture, and marine ecosystems.
                     Through multidisciplinary research, we address pressing challenges and provide insights 
                     that support sustainable development.
                </p>
                <p> We collaborate with universities, government ministries, and global partners to conduct impactful research projects.
                     Our goal is to strengthen research capacity, drive innovation, and ensure the long-term sustainability of marine and coastal resources. 
                     </p>
                <a href="/publication" className="research-btn-dept">
                    Learn More →
                </a>
            </div>
        </section>
    );
}

function ResearchRecommendations() {
    return (
        <div className="research-container-dept">
            <div className="research-text-dept">
                <h2>Research Insights</h2>
                <div className="underline" />
                <p>
                  In our department, we generate evidence-based insights, reports, and briefs.
                   Explore key findings and publications crafted to support policy-making, innovation, and scientific advancement.
                </p>
                <a href="/publication" className="research-button-dept">
                    Access Research Projects
                </a>
            </div>
            <div className="research-image-container-dept">
                <img src={researchimage} alt="Research publications" />
            </div>
        </div>
    );
}
function PromoSection() {
  return (
    <section className="promo-section">
      <div className="promo-container">
        <div className="promo-content">
          <h2> Our <span className="highlight">Strategies</span> in Research department </h2>
          <ul> <li>Adopt cutting-edge laboratory technologies</li>
            <li>Ensure compliance with global testing standards</li>
            <li>Provide timely and reliable laboratory results</li>
            <li>Support fisheries, aquaculture, and marine conservation</li>
          </ul>
        </div>
        <div className="promo-image">
          <img src={promoImage} alt="Laboratory strategies" />
        </div>
      </div>
    </section>
  );
}

export default function ResearchPage() {
    return (
        <>
            <Research />
            <ResearchDescription />
            <ResearchProjects />
            <ResearchInfo />
            <ResearchRecommendations />
            <PromoSection />
        </>
    );
}
