import React from "react";
import "./Event.css";
import heroImage from "../../assets/event/event1.JPG";
import event1Image from "../../assets/event/event2.JPG"; // replace with actual path
import event2Image from "../../assets/event/event3.JPG"; // replace with actual path
import event3Image from "../../assets/event/event4.JPG"; // replace with actual path

const LatestEvents = () => {
  return (
    <>
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>NEWS & EVENTS</h1>
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
              Dar es Salaam, Tanzania — Katika juhudi za kukuza na kuendeleza
              sekta ya uvuvi na kuboresha maisha ya wavuvi wadogo, wataalamu
              kutoka Shirika la...
            </p>
          </div>
          <div className="event-card-image">
            <img src={event1Image} alt="Official visit event" />
          </div>
        </div>

        {/* Event 2 */}
        <div className="latest-event-card">
          <div className="event-card-content">
            <h2 className="latest-event-title">
              CELEBRATING 40 YEARS OF TAFIRI
            </h2>
            <div className="latest-finished-badge">FINISHED</div>
            <p className="latest-event-date">June 17, 2025</p>
            <p className="latest-event-description">
              We hope to provide you with the best of our service, through which
              I believe we will be able to realize our vision and mission and
              diligently execute our core...
            </p>
            <a href="#" className="latest-more-details">
              More Details —
            </a>
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
              Regenerative Ocean Week, organized by Ocean Innovation Africa
              (OIA), will be held in Dar es Salaam, Tanzania, from February 24th
              to 28th, 2025. The...
            </p>
            <a href="#" className="latest-more-details">
              More Details —
            </a>
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
