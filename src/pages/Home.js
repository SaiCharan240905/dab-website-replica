// src/pages/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero fade-in-up">
        <h1>Welcome to the Diamond Association Bangalore</h1>
        <p>Uniting the Diamond Community on Our Website!</p>
        <button className="cta-button">Get Started</button>
      </section>

      <section className="about-us fade-in-up">
        <p className="highlighted-text">About Us</p>
        <p>
          <span className="highlighted-text">Shine Together... Grow Together...</span>
          <br /><br /><br />
          At our Diamond Association, we embody the motto "Shine Together, Grow Together."
          <br />
          We are dedicated to fostering collaboration, supporting growth, 
          and creating a thriving environment for our members to shine and succeed in the diamond industry.
        </p>
      </section>

      <section className="services fade-in-up">
        <div className="text-content">
          <h2>Our Services</h2>
          <div className="service-item slide-in-left">
            <h3>Diamond Supply</h3>
            <p>We provide a reliable network for the supply of diamonds.</p>
          </div>
          <div className="service-item slide-in-left">
            <h3>Jewellery Design</h3>
            <p>Innovative and custom jewellery designs tailored to your needs.</p>
          </div>
          <div className="service-item slide-in-left">
            <h3>Expert Consultation</h3>
            <p>Get expert advice on all things related to diamonds and jewellery.</p>
          </div>
        </div>
        <div className="image-container zoom-in">
          <img src="/diamond.jpg" alt="Services" />
        </div>
      </section>

      <section className="testimonials fade-in-up">
        <div className="testimonial-content">
          {/* LEFT - Text */}
          <div className="testimonial-text">
            <h2>What Our Members Say</h2>
            <div className="testimonial fade-in-up">
              <p>
                "Our mission is to promote ethical practices, foster innovation, provide valuable resources, 
                and create a strong network to ensure the growth and sustainability of our members and the diamond industry as a whole"
              </p>
              <cite>- Mr. Kiran Mehta, President-DAB</cite>
              <cite>President : 2022 - present</cite>
            </div>
            <div className="testimonial fade-in-up">
              <p>
                "The support from the association has helped my business grow exponentially."
              </p>
              <cite>- T. Mehta, Member of DAB</cite>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="testimonial-image zoom-in">
            <img src="/kiran.jpg" alt="President" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
