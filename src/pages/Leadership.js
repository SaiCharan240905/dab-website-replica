import React from 'react';
import './Leadership.css';

const Leadership = () => {
  return (
    <div className="leadership-section fade-in-up">
      <div className="leadership-header">
        <h2>Leadership Team</h2>
        <p>Meet the President behind the Diamond Association Bangalore.</p>
      </div>

      <div className="leadership-container fade-in-up">
        <div className="image-container zoom-in">
          <img src="/kiran.jpg" alt="President" className="image" />
        </div>
        <div className="text-container fade-in-up">
          <p className="highlighted-text">President - Mr. Kiran Mehta</p>
          <p>2022 - Present</p>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
