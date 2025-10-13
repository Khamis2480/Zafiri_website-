import React from "react";
import "./ongoingProjects.css";
import heroImage from "../../../assets/project/Project.jpg";

const ongoingProjects = [
    {
        id: 1,
        title: "Climate Change Adaptation",
        duration: "2024 – 2026",
        summary: "Studying the impact of climate change on fisheries and marine biodiversity.",
        image: "/assets/projects/climate.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "Sustainable Fishing Practices",
        duration: "2023 – 2025",
        summary: "Promoting eco-friendly fishing methods to protect marine resources.",
        image: "/assets/projects/fishing.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Coral Reef Restoration",
        duration: "2022 – 2024",
        summary: "Working with local communities to restore damaged coral reefs.",
        image: "/assets/projects/coral.jpg",
        link: "#",
    },
];

const OngoingProjects = () => {
    return (
        <div className="projects-container">
            {/* Projects Hero */}
            <div className="projects-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="projects-overlay"></div>
                <div className="projects-hero-content">
                    <h1>MESSAGE FROM THE DIRECTOR</h1>
                    <div className="projects-breadcrumb">
                        <a href="../../../Home page/home/home.html">HOME</a>
                        <span>&gt;</span>
                        <span>MESSAGE</span>
                    </div>
                </div>
            </div>


            {/* ✅ Projects Grid */}
            <div className="projects-grid">
                {ongoingProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} />
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>
                                <strong>Duration:</strong> {project.duration}
                            </p>
                            <p>{project.summary}</p>
                            <a href={project.link} className="learn-more">
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OngoingProjects;
