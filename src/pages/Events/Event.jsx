import React, { useState } from "react";
import "./Event.css";

import heroImage from "../../assets/event/event1.JPG";
import event1Image from "../../assets/event/event2.JPG";
import event2Image from "../../assets/event/event3.JPG";
import event3Image from "../../assets/event/event4.JPG";

const LatestEvents = () => {
  const [expandedEvent, setExpandedEvent] = useState(null);

  const toggleExpand = (eventId) => {
    setExpandedEvent(expandedEvent === eventId ? null : eventId);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>NEWS &amp; EVENTS</h1>
          <div className="breadcrumb">
            <a href="/">HOME</a> <span>&gt;</span>
            <span>Both Upcoming and Latest</span>
          </div>
        </div>
      </section>

      {/* Latest Events Section */}
      <div className="latest-events">
        <h1 className="latest-main-heading">Latest Events</h1>

        {/* Event 1 */}
        <div className="latest-event-card">
          <div className="event-card-content">
            <h2 className="latest-event-title">
              <strong>
                WATARAM KUTOKA IFAD, OFISI YA <br />
                MAKAMU WA RAIS NA WIZARA YA <br />
                MIFUGO NA UVUVI WATEMBELEA TAFIRI
              </strong>
            </h2>

            <p className="latest-event-date">June 24, 2025</p>

            <p className="latest-event-description">
              {expandedEvent === 1 ? (
                <>
                  Dar es Salaam, Tanzania — Katika juhudi za kukuza na kuendeleza
                  sekta ya uvuvi na kuboresha maisha ya wavuvi wadogo, wataalamu
                  kutoka Shirika la IFAD, Ofisi ya Makamu wa Rais, na Wizara ya
                  Mifugo na Uvuvi walitembelea Taasisi ya Utafiti wa Uvuvi Tanzania (TAFIRI).
                  Ziara hiyo ililenga kujifunza kuhusu miradi ya utafiti na mbinu
                  endelevu zinazotumika katika kulinda mazingira ya baharini.
                </>
              ) : (
                <>
                  Dar es Salaam, Tanzania — Katika juhudi za kukuza na kuendeleza
                  sekta ya uvuvi na kuboresha maisha ya wavuvi wadogo, wataalamu
                  kutoka Shirika la...
                </>
              )}
            </p>

            <button
              onClick={() => toggleExpand(1)}
              className="latest-more-details"
              aria-expanded={expandedEvent === 1}
            >
              {expandedEvent === 1 ? "Show Less —" : "More Details —"}
            </button>
          </div>

          <div className="event-card-image">
            <img src={event1Image} alt="Official visit event" />
          </div>
        </div>

        {/* Event 2 */}
        <div className="latest-event-card">
          <div className="event-card-content">
            <h2 className="latest-event-title">CELEBRATING 40 YEARS OF TAFIRI</h2>
            <div className="latest-finished-badge">FINISHED</div>
            <p className="latest-event-date">June 17, 2025</p>

            <p className="latest-event-description">
              {expandedEvent === 2 ? (
                <>
                  The 40th Anniversary of TAFIRI was marked by a series of events
                  celebrating the institution’s achievements in advancing fisheries
                  and marine research in Tanzania. The event gathered government
                  officials, researchers, and international partners to discuss the
                  future of sustainable fisheries and the Blue Economy.
                </>
              ) : (
                <>
                  We hope to provide you with the best of our service, through which
                  I believe we will be able to realize our vision and mission and
                  diligently execute our core...
                </>
              )}
            </p>

            <button
              onClick={() => toggleExpand(2)}
              className="latest-more-details"
              aria-expanded={expandedEvent === 2}
            >
              {expandedEvent === 2 ? "Show Less —" : "More Details —"}
            </button>
          </div>

          <div className="event-card-image">
            <img src={event2Image} alt="40 years celebration" />
          </div>
        </div>

        {/* Event 3 */}
        <div className="latest-event-card">
          <div className="event-card-content">
            <h2 className="latest-event-title">
              OCEAN WEEK, RAMADA HOTEL — DAR ES SALAAM
            </h2>
            <p className="latest-event-date">June 17, 2025</p>

            <p className="latest-event-description">
              {expandedEvent === 3 ? (
                <>
                  Regenerative Ocean Week, organized by Ocean Innovation Africa
                  (OIA), will be held in Dar es Salaam, Tanzania, from February 24th
                  to 28th, 2025. The event will bring together innovators,
                  researchers, and policymakers to discuss sustainable ocean
                  solutions and promote a regenerative Blue Economy in the region.
                </>
              ) : (
                <>
                  Regenerative Ocean Week, organized by Ocean Innovation Africa
                  (OIA), will be held in Dar es Salaam, Tanzania, from February 24th
                  to 28th, 2025. The...
                </>
              )}
            </p>

            <button
              onClick={() => toggleExpand(3)}
              className="latest-more-details"
              aria-expanded={expandedEvent === 3}
            >
              {expandedEvent === 3 ? "Show Less —" : "More Details —"}
            </button>
          </div>

          <div className="event-card-image">
            <img src={event3Image} alt="Ocean week event" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestEvents;
