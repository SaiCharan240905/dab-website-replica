import React from 'react';
import './About.css'; // Import the CSS file

const About = () => {
  return (
    <div className="about-page">
      {/* Intro Section with Fade-In Animation */}
      <section className="intro">
        <p className="highlighted-text">About Us</p>
        <p className="highlighted-text">How it Started?</p>
        <p className="highlighted-text">From Idea to Impact</p>
        <p className="highlighted-text">Driving Bangalore's Diamond Industry since 2016</p>
      </section>

      {/* Content Section with Fade-In Animation */}
      <section className="content">
        <p>
          Diamond Association Bangalore, established in 2016, was initiated by Ratan Srisrimal, Sunil Surana, Lalith Saklecha, Chetan Mehta, and other senior members under their common and collective thought and encouragement by other manufacturers and wholesalers in the Bangalore market. The purpose was to establish Bangalore as a hub for the manufacturing and wholesale supply of diamonds and diamond jewellery.
        </p>
        <p>
          In simple terms, the goal was to create a gateway to the South Indian market and become a platform for our fellow members to overcome the challenges faced in loose diamond supply, diamond jewellery equipment, and the modernization of craftsmanship. Over the past 7 years, the Diamond Association Bangalore has undertaken numerous initiatives in this direction.
        </p>
      </section>

      {/* About Section with Fade-In Animation */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>To empower the diamond industry by promoting ethical practices, innovation, and collaboration among manufacturers, wholesalers, and retailers.</p>
      </section>
    </div>
  );
};

export default About;
