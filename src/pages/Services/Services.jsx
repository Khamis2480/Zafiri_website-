import React from "react";
import "./Services.css";

// Images
import sampleImage from "../../assets/histo/Service.webp";
import infra1 from "../../assets/histo/doctorservice.jpg";
import infra2 from "../../assets/histo/waterservice.jpg";
import infra3 from "../../assets/histo/waterservice.jpg";
import heroImage from '../../assets/histo/ser.jpg';
import other1 from "../../assets/histo/waterservice.jpg";
import other2 from "../../assets/histo/doctorservice.jpg";
import other3 from "../../assets/histo/waterservice.jpg";

export default function Services() {
    const infraCards = [
        {
            image: infra1,
            title: "Research infrastructures",
            desc: "We offer our laboratories, equipment, and data for use in research projects and by our partners.",
        },
        {
            image: infra2,
            title: "Quality and laboratory services",
            desc: "We act as national environmental reference laboratory appointed by the Ministry of the Environment.",
        },
        {
            image: infra3,
            title: "Research vessel Aranda",
            desc: "Aranda is a modern, ice-reinforced research vessel.",
        },
    ];

    const otherServices = [
        {
            image: other1,
            title: "We provide international expert services",
            desc: "Our strong expertise and broad knowledge make us a reliable partner for international environmental projects.",
        },
        {
            image: other2,
            title: "Participate in high-quality environmental training and events",
            desc: "We train and organise events for thousands of participants annually, covering a wide range of environmental topics.",
        },
        {
            image: other3,
            title: "Authority services",
            desc: "In authority services, we implement environmental and nature protection regulations, monitor markets, and participate in national and international activities.",
        },
    ];

    return (
        <>
            <div>


                {/* Hero Section */}
                <section
                    className="hero"
                    style={{ backgroundImage: `url(${heroImage})` }}
                >
                    <div className="overlay"></div>
                    <div className="hero-content">
                        <h1>OUR PROUD JOURNEY IN RESEARCH AND SERVICE </h1>
                        <div className="breadcrumb">
                            <a href="../../pages/Home.jsx">HOME</a> <span>&gt;</span>
                            <span>OUR SERVICE </span>
                        </div>
                    </div>
                </section>

                {/* ========== Services Section ========== */}
                <section className="decision-section">
                    <div className="decision-hero">
                        <div className="decision-text">
                            <h2>Services to support decision-making</h2>
                            <p>
                                We provide information and services for political decision-making,
                                sustainable business operations, and research partners.
                            </p>
                            <button className="decision-btn">Find an expert →</button>
                        </div>
                        <div className="decision-image">
                            <img src={sampleImage} alt="Decision support" />
                        </div>
                    </div>

                    <div className="decision-info">
                        <h3>We look at things as a whole</h3>
                        <p>
                            Syke monitors the state of the environment and its changes over the long term.
                            With broad expertise and collaboration, we seek the best solutions for building
                            a sustainable society. In this, we utilise experiments, interdisciplinary
                            scenarios, modeling, and the latest expertise from various fields.
                        </p>
                        <p>
                            We offer quality and testing services to our clients and partners, and we have a
                            versatile research infrastructure that we also provide for research projects.
                            We act as an authority in special tasks, grant permits, conduct market
                            surveillance, and provide training. We have strong expertise in international
                            cooperation.
                        </p>
                        <hr />
                    </div>
                </section>

                {/* ========== Research Infrastructure Section ========== */}
                <section className="infra-section">
                    <div className="infra-header">
                        <h2>Versatile and high-quality research infrastructures</h2>
                        <p>
                            We offer high-quality laboratory and quality assurance services, marine
                            research infrastructure services, and data resources with interface services
                            for use by our partners. Our services also include the research vessel Aranda,
                            measurement stations, and numerous different measurement devices.
                        </p>
                    </div>

                    <div className="infra-cards">
                        {infraCards.map((card, index) => (
                            <div key={index} className="infra-card">
                                <img src={card.image} alt={card.title} />
                                <div className="infra-content">
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ========== Other Services Section ========== */}
                <section className="other-services">
                    <div className="services-header">
                        <h2>Our other services</h2>
                    </div>

                    <div className="services-grid">
                        {otherServices.map((service, index) => (
                            <div className="service-card" key={index}>
                                <img src={service.image} alt={service.title} />
                                <div className="service-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                    <span className="service-arrow">→</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div className="research-ethics-container">
                <div className="research-ethics-content">
                    <div className="ethics-text">
                        <h2>For the external researchers</h2>
                        <p>Get your ethical certificate here</p>
                        <button className="apply-button">APPLY HERE</button>
                    </div>
                    <div className="ethics-image">
                        <img
                            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Research Ethics Certificate"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};


