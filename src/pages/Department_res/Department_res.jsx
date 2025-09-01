import React from "react";
import heroImage from "../../assets/laboratory/laboratory-equipment.jpeg";
import "./Department_res.css";

 
function Research() {
  return (
    <>
          {/* Hero Section */}
          <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="overlay"></div>
            <div className="hero-content">
              <h1>Department of Laboratory</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
              </p>
            </div>
          </section>

    </>
  );
}

export default Research;










